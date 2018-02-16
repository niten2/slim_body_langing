import scriptjs from "scriptjs"
import setting from "lib/setting"
import { parseTest } from "lib/parse_test"

export default function(options = {}) {
  let { phone, questions, place } = options

  if (setting.prod) {
    scriptjs('//cdn.emailjs.com/dist/email.min.js', () => {
      window.emailjs.init(setting.email_js_key)
      window.emailjs.send(
        setting.email_js_service,
        setting.email_js_template,
        {
          place: place,
          phone: phone,
          questions: parseTest(questions),
        }
      )
    })

    if (window.yaCounter41977889) {
      window.yaCounter41977889.reachGoal(place)
    } else {
      console.log("window.yaCounter41977889 not found!!!")
    }

    console.log("SEND EMAIL", options)

  } else {
    console.log("SEND TEST EMAIL DEV", options)
  }

}
