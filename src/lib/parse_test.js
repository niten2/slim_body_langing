import R from "ramda"

R.get = R.curry((name, obj) => {
  return obj[name]
})

let getAnswer = R.pipe(
  R.get("answers"),
  R.filter( R.where({ checked: R.equals(true) }) ),
  R.map(R.get("body"))
)

export const parseTest = (values) => {
  if (!values) { return null }

  const array =  values.map(value => {
    return `${value["question"]} = ${getAnswer(value)}`
  })

  return JSON.stringify(array)
}
