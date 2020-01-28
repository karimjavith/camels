//
// Any changes in this file will be removed after you update your platform!
//

#include "TNSExceptionHandler.h"
#include <Foundation/Foundation.h>
#include <JavaScriptCore/JavaScriptCore.h>
#include <NativeScript/NativeScript.h>

#if DEBUG
#include "TNSDebugging.h"
#include "TKLiveSync/include/TKLiveSync.h"
//Crashlytics 1 BEGIN
#else
#import <Crashlytics/CLSLogging.h>
#endif
//Crashlytics 1 END
//Crashlytics 2 BEGIN
#if DEBUG
#else
static int redirect_cls(const char *prefix, const char *buffer, int size) {
  CLSLog(@"%s: %.*s", prefix, size, buffer);
  return size;
}

static int stderr_redirect(void *inFD, const char *buffer, int size) {
  return redirect_cls("stderr", buffer, size);
}

static int stdout_redirect(void *inFD, const char *buffer, int size) {
  return redirect_cls("stdout", buffer, size);
}
#endif
//Crashlytics 2 END

int main(int argc, char *argv[]) {
//Crashlytics 3 BEGIN
#if DEBUG
#else
  // Per https://docs.fabric.io/apple/crashlytics/enhanced-reports.html#custom-logs :
  // Crashlytics ensures that all log entries are recorded, even if the very next line of code crashes.
  // This means that logging must incur some IO. Be careful when logging in performance-critical areas.

  // As per the note above, enabling this can affect performance if too much logging is present.
  // stdout->_write = stdout_redirect;

  // stderr usually only occurs during critical failures;
  // so it is usually essential to identifying crashes, especially in JS
  stderr->_write = stderr_redirect;
#endif
//Crashlytics 3 END

  @autoreleasepool {
    TNSRuntime *runtime = [TNSRuntimeInstrumentation
          profile:@"main"
        withBlock:^{
          __block NSString *applicationPath = [NSBundle mainBundle].bundlePath;

#if DEBUG
          [TNSRuntimeInstrumentation
                profile:@"Debug: Lifesync & Syslog"
              withBlock:^{
                TNSInitializeLiveSync();
                if (getenv("TNSApplicationPath")) {
                  applicationPath = @(getenv("TNSApplicationPath"));
                }
                [TNSRuntimeInstrumentation
                    initWithApplicationPath:applicationPath];
                [TNSRuntimeInspector setLogsToSystemConsole:YES];
                return (id)nil;
              }];
#endif

          extern char startOfMetadataSection __asm(
              "section$start$__DATA$__TNSMetadata");
          [TNSRuntime initializeMetadata:&startOfMetadataSection];
          TNSRuntime *runtime =
              [[TNSRuntime alloc] initWithApplicationPath:applicationPath];
          [runtime scheduleInRunLoop:[NSRunLoop currentRunLoop]
                             forMode:NSRunLoopCommonModes];

#if DEBUG
          [TNSRuntimeInstrumentation
                profile:@"Debug: Wait for JavaScript debugger"
              withBlock:^{
                TNSEnableRemoteInspector(argc, argv, runtime);
                return (id)nil;
              }];
#endif

          TNSInstallExceptionHandler();
          return runtime;
        }];

    [runtime executeModule:@"./"];

    return 0;
  }
}
