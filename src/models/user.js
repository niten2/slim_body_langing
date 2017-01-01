import { API, BaseModel } from 'mobx-model'
import authProvider from 'lib/auth'
import { userProfile } from 'stores'
import { UIStore, SearchStore } from 'stores'
import Notification from 'notification'

const ENDPOINT = "api/v1/users"

class User extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    id: null,
    email: '',
    password: '',
    token: '',
  }

}

export default User
