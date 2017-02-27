// import { UIStore } from 'stores'
import { extendObservable, transaction } from 'mobx'
import bindAll from 'lodash/bindAll'
import { isObject, isInteger, find } from "lodash"
import { autorun } from 'mobx'

import { questions } from 'views/components/test/questions'
import { subscription } from 'views/components/test/subscription'

let UIStore  = {
  notificationSystem: null,
  // email: "mail@example.com",
}

extendObservable(UIStore, {
  // questions
  isLastQuestion: false,

  // isShowOffer: false,
  isShowOffer: true,

  discount: 0,

  questions: questions,
  question: questions[0],
  subscription: subscription[0],

  user: {
    name: "",
    phone: "",
    answers: [],
  },

  // modals
  modalForm: false,
  titleModalForm: "",
  buttonModalForm: "",
  // modalForm: true,

})

Object.assign(UIStore, {

  // questions
  firstQuestion() {
    this.question = this.questions[0]
    this.isShowOffer = false
    this.isLastQuestion = false
    this.discount = 0
  },

  nextQuestion() {
    let nextQuestionId = this.question.id + 1
    let nextNextQuestionId = this.question.id + 1

    const nextQuestion = find(this.questions, (obj) => { return obj.id == nextQuestionId })
    const nextNextQuestion = find(this.questions, (obj) => { return obj.id == nextNextQuestionId })

    if (isObject(nextQuestion)) {
      this.question = nextQuestion
      this.discount = this.discount + 50
    }

    if (!isObject(nextNextQuestion)) {
      this.isLastQuestion = true
      this.isShowOffer = true
      this.discount = this.discount + 50
    }

  },

  // modals
  showModalForm(options) {
    let { title, button } = options

    autorun(() => {
      this.modalForm = true
      this.titleModalForm = title
      this.buttonModalForm = button
    })
  },

  hideModalForm() {
    this.modalForm = false
  },

})

export default bindAll(UIStore, [
  "firstQuestion",
  "nextQuestion",
  "showModalForm",
  "hideModalForm",
])
