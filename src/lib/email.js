// import sendEmail from "lib/email"
export default function(options = {}) {
  let { phone, questions } = options

  if (ENV == "production") {
    emailjs.send(
      "mailgun",
      "test",
      {
        phone: phone,
        questions: questions.slice()
      }
    )
  } else {
    console.log("send test email!!!")
    console.log(options)
  }

}
