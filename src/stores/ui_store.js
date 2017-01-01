// import { UIStore } from 'stores'
import { extendObservable, transaction } from 'mobx'
import bindAll from 'lodash/bindAll'

// import search from './ui_store/search'
// import validate from './ui_store/validate'
// import sidebar from './ui_store/sidebar'
// import confim from './ui_store/confim'

let UIStore  = {
  notificationSystem: null,
  email: "mail@example.com",
}

extendObservable(UIStore, {
  login: false,
  loading: false,
  fobbiden: false,
})

Object.assign(UIStore, {

  // loading
  setLoading() {
    this.loading = true
  },

  setLoaded() {
    this.loading = false
  },

  // fobbiden
  setFobbiden() {
    this.fobbiden = true
  },

  // login
  setLogin() {
    this.login = true
  },

  setLogout() {
    this.login = false
  },

})

// UIStore.validate = validate
// UIStore.sidebar = sidebar
// UIStore.search = search
// UIStore.confim = confim

export default bindAll(UIStore, [
  "setLoading",
  "setLoaded",
  "setFobbiden",
  "setLogin",
  "setLogout",
])
