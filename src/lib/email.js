// import sendEmail from "lib/email"
export default function(options = {}) {
  let { phone, questions } = options

  if (__DEV__ == "production") {
    emailjs.send(
      "mailgun",
      "test",
      {
        phone: phone,
        questions: questions,
      }
    )
  } else {
    console.log("send test email!!!")
    console.log(options)
  }

}
