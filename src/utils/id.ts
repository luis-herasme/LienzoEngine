export default function id () {
  let ID = ''
  for (let i = 0; i < 10; i++) {
    ID += Math.round(Math.random() * 100)
  }
  return ID
}
