import bindAll from 'lodash/bindAll'
import find from "lodash/find"
import isObject from "lodash/isObject"
import { extendObservable } from 'mobx'
import { autorun } from 'mobx'

import { questions } from 'components/test/data/questions'

let UIStore  = {
  notificationSystem: null,
}

extendObservable(UIStore, {
  // NOTE questions
  isLastQuestion: false,
  isShowOffer: false,
  discount: 0,
  questions: questions,
  question: questions[0],
  isSendOffer: false,
  user: {
    phone: "",
  },

  // NOTE modals
  modalForm: false,
  titleModalForm: "",
  buttonModalForm: "",

})

Object.assign(UIStore, {
  // NOTE questions
  firstQuestion() {
    autorun(() => {
      this.question = this.questions[0]
      this.isShowOffer = false
      this.isLastQuestion = false
      this.discount = 0
      this.isSendOffer = false
    })
  },

  nextQuestion() {
    let stepDiscount = 85
    let nextQuestionId = this.question.id + 1
    let nextNextQuestionId = this.question.id + 1

    const nextQuestion = find(this.questions, (obj) => {
      return obj.id === nextQuestionId
    })

    const nextNextQuestion = find(this.questions, (obj) => {
      return obj.id === nextNextQuestionId
    })

    if (isObject(nextQuestion)) {
      this.question = nextQuestion
      this.discount = this.discount + stepDiscount
    }

    if (!isObject(nextNextQuestion)) {
      this.isLastQuestion = true
      this.isShowOffer = true
      this.discount = this.discount + stepDiscount + 5
    }

  },

  sendOffer() {
    this.isSendOffer = true
  },

  returnOffer() {
    this.isSendOffer = false
  },
})

export default bindAll(UIStore, [
  "firstQuestion",
  "nextQuestion",
  "sendOffer",
  "returnOffer",
])
