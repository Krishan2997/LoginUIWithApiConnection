export function nameValidator(name) {
  console.log("I am validating you name: " + name)
  if (!name) return "Name can't be empty."
  return ''
}
