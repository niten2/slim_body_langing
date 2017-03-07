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
    console.log("SEND TEST EMAIL Production", options)
  } else {
    console.log("SEND TEST EMAIL", options)
  }

}
