import { LoadingIndicator, Mode, OptionsCommon } from '@nstudio/nativescript-loading-indicator'

const loader = new LoadingIndicator()

const options: OptionsCommon = {
  // message: 'Loading...',
  // details: 'Additional detail note!',
  progress: 0.9,
  margin: 5,
  // dimBackground: true,
  color: '#ff4350', // color of indicator and labels
  // background box around indicator
  // hideBezel will override this if true
  backgroundColor: '#fff',
  userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
  // hideBezel: true, // default false, can hide the surrounding bezel
  mode: Mode.Indeterminate, // see options below
  // @ts-ignore
  android: {
    // view: view, // someStackLayout.android, // Target view to show on top of (Defaults to entire window)
    // cancelable: true,
    // cancelListener: function(dialog) {
    //   console.log('Loading cancelled')
    // },
  },
  ios: {
    // view: view, //someButton.ios, // Target view to show on top of (Defaults to entire window)
    square: false,
  },
}

export { loader, options }
