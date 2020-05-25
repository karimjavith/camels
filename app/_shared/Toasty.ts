import { Toasty, ToastPosition } from 'nativescript-toasty'
import { Color } from 'tns-core-modules/color/color'
// Toasty accepts an object for customizing its behavior/appearance. The only REQUIRED value is `text` which is the message for the toast.
const ToastService = (message: string, bgColor?: string, textColor?: string): Toasty =>
  new Toasty({
    text: message,
    ios: {
      //   displayShadow: true,
      cornerRadius: 12,
    },
  })
    .setToastPosition(ToastPosition.BOTTOM)
    .setTextColor(textColor || new Color('white'))
    .setBackgroundColor(bgColor || '#000')

export { ToastService }
