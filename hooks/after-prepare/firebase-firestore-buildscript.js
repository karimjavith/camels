const fs = require('fs-extra');
const path = require('path');

module.exports = function($logger, $projectData, hookArgs) {
  const platformFromHookArgs = hookArgs && (hookArgs.platform || (hookArgs.prepareData && hookArgs.prepareData.platform));
  const platform = (platformFromHookArgs  || '').toLowerCase();
  return new Promise(function(resolve, reject) {
    const isNativeProjectPrepared = hookArgs.prepareData ? (!hookArgs.prepareData.nativePrepare || !hookArgs.prepareData.nativePrepare.skipNativePrepare) : (!hookArgs.nativePrepare || !hookArgs.nativePrepare.skipNativePrepare);
    if (isNativeProjectPrepared) {
      try {
        if (platform !== 'ios') {
          resolve();
          return;
        }

        const sanitizedAppName = path.basename($projectData.projectDir).split('').filter((c) => /[a-zA-Z0-9]/.test(c)).join('');

        const xcodeWorkspacePath = path.join($projectData.platformsDir, 'ios', sanitizedAppName + '.xcworkspace');
        if (!fs.existsSync(xcodeWorkspacePath)) {
          $logger.error(xcodeWorkspacePath + ' is missing.');
          reject();
          return;
        }

        const xcodeWorkspaceShareddataPath = path.join($projectData.platformsDir, 'ios', sanitizedAppName + '.xcworkspace', 'xcshareddata');
        $logger.trace('Using Xcode workspace settings path', xcodeWorkspaceShareddataPath);
        console.log('Using Xcode workspace settings path: ' + xcodeWorkspaceShareddataPath);

        if (!fs.existsSync(xcodeWorkspaceShareddataPath)) {
          fs.mkdirSync(xcodeWorkspaceShareddataPath);
        }

        const xcodeWorkspaceSettingsFile = path.join(xcodeWorkspaceShareddataPath, 'WorkspaceSettings.xcsettings');
        // for this temp fix we assume that if the file is there, it contains the correct config
        if (!fs.existsSync(xcodeWorkspaceSettingsFile)) {
          fs.writeFileSync(xcodeWorkspaceSettingsFile, `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>BuildSystemType</key>
	<string>Original</string>
</dict>
</plist>
`);
          $logger.trace('Xcode workspace file written');
        }
        resolve();

      } catch (e) {
        $logger.error('Unknown error during prepare Firestore', e);
        reject();
      }
    } else {
      $logger.trace("Native project not prepared.");
      resolve();
    }
  });
};
