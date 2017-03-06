// import sendEmail from "lib/email"

export default function(options = {}) {
  let { phone, questions, place } = options

  if (!DEV) {
    emailjs.send(
      "mailgun",
      "test",
      {
        place: place,
        phone: phone,
        questions: questions,
      }
    )
  } else {
    console.log("SEND TEST EMAIL", options)
  }

}
