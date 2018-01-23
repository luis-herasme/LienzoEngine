
export function getNumber (number) {
  return number * Math.random() * symbol()
}

export function symbol (probability = 0.5) {
  if (Math.random() < probability) {
    return -1
  } else {
    return 1
  }
}

export function random (finish = 1, start = 0) {
  return (Math.random() * (finish - start)) + start
}

export function randomList (len = 2, finish = 1, start = 0) {
  let list = []
  for (let i = 0; i < len; i++) {
    list.push(random(finish, start))
  }
  return list
}

export function randomMatrix (finish = 1, start = 0, width = 2, heigth = 2) {
  let list = []
  for (let i = 0; i < heigth; i++) {
    list.push(randomList(width, finish, start))
  }
  return list
}

export function noise (resolution = 3, len = 10, finish = 1, start = 0) {
  let result = []
  let size = Math.round(len / resolution)

  for (let long = 0; long < size; long++) {
    let number = random(finish, start)
    result.push(number)

    for (let i = 1; i <= resolution; i++) {
      number += symbol() * random(finish / i, start / i)
      result.push(number)
    }

    result.push(number)
  }

  return result
}
