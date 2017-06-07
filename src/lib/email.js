import { AlertIOS } from 'react-native'

const Mailer = require('NativeModules').RNMail

export default function sendEmail() {
  Mailer.mail({
    subject: 'need help',
    recipients: ['celine.patag@gmail.com'],
    ccRecipients: ['chibeepatag@yahoo.com'],
    bccRecipients: ['cpatag@iripple.net'],
    body: 'This is a text email.',
    attachment: {
      path: '',  // The absolute path of the file from which to read data.
      type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
      name: '',   // Optional: Custom filename for attachment
    },
  }, (error, event) => {
    if (error) {
      AlertIOS.alert('Error', error.message)
    }
  })
}
