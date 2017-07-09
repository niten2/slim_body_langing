// import setting from "lib/setting"
export default {

  env: process.env.NODE_ENV,
  dev: process.env.NODE_ENV === "development",
  email_js_key: process.env.REACT_APP_EMAIL_JS_KEY,

}
