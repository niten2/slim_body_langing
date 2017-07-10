// import sendEmail from "lib/email"
import scriptjs from "scriptjs"
import setting from "lib/setting"

export default function(options = {}) {
  let { phone, questions, place } = options

  if (setting.prod) {
    scriptjs('//cdn.emailjs.com/dist/email.min.js', () => {
      window.emailjs.init(setting.email_js_key)
      window.emailjs.send(
        "mailgun",
        "test",
        {
          place: place,
          phone: phone,
          questions: questions,
        }
      )
    })

    window.yaCounter41977889.reachGoal(place)

    console.log("SEND TEST EMAIL Production", options)
  } else {
    console.log("SEND TEST EMAIL", options)
  }

}
