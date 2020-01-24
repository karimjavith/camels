import * as application from 'tns-core-modules/application'
import { isIOS, isAndroid } from 'tns-core-modules/platform'
import * as utils from 'tns-core-modules/utils/utils'
import { Color } from 'tns-core-modules/color'
import * as frame from 'tns-core-modules/ui/frame'

declare var android: {
    app: {
      ProgressDialog: {
        show: (
          arg0: any,
          arg1: string,
          arg2: string
        ) => {
          center: any
          layer: { cornerRadius: number }
          backgroundColor: any
          addSubview: (arg0: any) => void
          removeFromSuperview: () => void
          dismiss: () => void
        } | null
      }
    }
  },
  UIApplication: { sharedApplication: any },
  UIView: {
    alloc: () => { (): any; new (): any; initWithFrame: { (arg0: any): any; new (): any } }
  },
  CGRectMake: (arg0: number, arg1: number, arg2: number, arg3: number) => any,
  CGPointMake: (arg0: number, arg1: number) => any,
  UIActivityIndicatorView: {
    alloc: () => {
      (): any
      new (): any
      initWithActivityIndicatorStyle: { (arg0: any): any; new (): any }
    }
  },
  UIActivityIndicatorViewStyle: { WhiteLarge: any }

let loaderView: {
  center: any
  layer: { cornerRadius: number }
  backgroundColor: any
  addSubview: (arg0: any) => void
  removeFromSuperview: () => void
  dismiss: () => void
} | null

export function showLoader(message: string = 'Loading...') {
  if (loaderView) {
    return
  }

  if (isIOS) {
    utils.ios
      // @ts-ignore
      .getter(UIApplication, UIApplication.sharedApplication)
      .beginIgnoringInteractionEvents()

    const currentView = frame.topmost().ios.controller.view
    loaderView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 90, 90))
    // @ts-ignore
    loaderView.center = currentView.center
    // @ts-ignore
    loaderView.layer.cornerRadius = 4
    // @ts-ignore
    loaderView.backgroundColor = new Color('#CC000000').ios

    const indicator = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(
      UIActivityIndicatorViewStyle.WhiteLarge
    )
    indicator.center = CGPointMake(45, 45)
    // @ts-ignore
    loaderView.addSubview(indicator)
    currentView.addSubview(loaderView)

    indicator.startAnimating()
  }

  if (isAndroid) {
    // loaderView = android.app.ProgressDialog.show(
    //   application.android.foregroundActivity,
    //   '',
    //   message
    // )
  }
}

export function hideLoader() {
  if (!loaderView) {
    return
  }

  if (isIOS) {
    loaderView.removeFromSuperview()
    // @ts-ignore
    utils.ios.getter(UIApplication, UIApplication.sharedApplication).endIgnoringInteractionEvents()
  }

  if (isAndroid) {
    loaderView.dismiss()
  }

  loaderView = null
}
