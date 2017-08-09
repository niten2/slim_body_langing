// import setting from "lib/setting"
export default {
  env: process.env.NODE_ENV,
  dev: process.env.NODE_ENV === "development",
  prod: process.env.NODE_ENV === "production",

  email_js_key: process.env.REACT_APP_EMAIL_JS_KEY,
  email_js_template: process.env.REACT_APP_EMAIL_JS_TEMPLATE,
  email_js_service: process.env.REACT_APP_EMAIL_JS_SERVICE,
}
