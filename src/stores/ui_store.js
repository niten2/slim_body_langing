// import { UIStore } from 'stores'
import { extendObservable, transaction } from 'mobx'
import bindAll from 'lodash/bindAll'
import { isObject, isInteger, find } from "lodash"

// import search from './ui_store/search'
// import validate from './ui_store/validate'
// import sidebar from './ui_store/sidebar'
// import confim from './ui_store/confim'

import { questions } from 'views/test/questions'


let UIStore  = {
  notificationSystem: null,
  // email: "mail@example.com",
}

extendObservable(UIStore, {
  // modalOk: false,
  // modalForm: false,
  // login: false,
  // loading: false,
  // fobbiden: false,

  questions: questions,
  question: questions[0],
  isLastQuestion: false,
  isShowOffer: false,
})

Object.assign(UIStore, {

  firstQuestion() {
    this.question = this.questions[0]
    this.isShowOffer = false
    this.isLastQuestion = false
  },

  nextQuestion() {
    let nextQuestionId = this.question.id + 1
    let nextNextQuestionId = this.question.id + 1

    const nextQuestion = find(this.questions, (obj) => { return obj.id == nextQuestionId })
    const nextNextQuestion = find(this.questions, (obj) => { return obj.id == nextNextQuestionId })

    if (isObject(nextQuestion)) { this.question = nextQuestion }
    if (!isObject(nextNextQuestion)) {
      this.isLastQuestion = true
      this.isShowOffer = true
    }
  },

  // showOffer() {
  //   this.isShowOffer = true
  // }
  // // loading
  // showModalOk() {
  //   this.modalOk = true
  // },

  // hideModalOk() {
  //   this.modalOk = false
  // },

  // showModalForm() {
  //   this.modalForm = true
  // },

  // hideModalForm() {
  //   this.modalForm = false
  // },

})

// UIStore.validate = validate
// UIStore.sidebar = sidebar
// UIStore.search = search
// UIStore.confim = confim

export default bindAll(UIStore, [
  "firstQuestion",
  "nextQuestion",
  // "showOffer",
  // "showModalOk",
  // "hideModalOk",
  // "showModalForm",
  // "hideModalForm",
])
