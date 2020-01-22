import { Toasty, ToastPosition } from 'nativescript-toasty'
import { Color } from 'tns-core-modules/color/color'
// Toasty accepts an object for customizing its behavior/appearance. The only REQUIRED value is `text` which is the message for the toast.
const ToastService = (message: string, bgColor?: string): Toasty =>
  new Toasty({
    text: message,
    ios: {
      displayShadow: true,
      shadowColor: '#fff000',
      cornerRadius: 24,
    },
  })
    .setToastPosition(ToastPosition.BOTTOM)
    .setTextColor(new Color('white'))
    .setBackgroundColor(bgColor || '#000')

export { ToastService }
