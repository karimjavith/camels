import {
  LoadingIndicator,
  Mode,
  OptionsCommon
} from "@nstudio/nativescript-loading-indicator";

const indicator = new LoadingIndicator();

const options: OptionsCommon = {
  message: "One moment...",
  //   details: "Additional detail note!",
  progress: 0.65,
  margin: 10,
  dimBackground: true,
  color: "#4B9ED6", // color of indicator and labels
  // background box around indicator
  // hideBezel will override this if true
  backgroundColor: "yellow",
  userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
  hideBezel: true, // default false, can hide the surrounding bezel
  mode: Mode.AnnularDeterminate, // see options below
  android: {
    // view: someStackLayout.android, // Target view to show on top of (Defaults to entire window)
    // cancelable: true,
    // cancelListener: function(dialog) {
    //   console.log("Loading cancelled");
    // }
  },
  ios: {
    // view: someButton.ios, // Target view to show on top of (Defaults to entire window)
    square: false
  }
};

// indicator.show(options);

// after some async event maybe or a timeout hide the indicator
// indicator.hide();

export default {
  showLoader: indicator.show(options),
  hideLoader: indicator.hide()
};
