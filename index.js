const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  //.push adds element to beg. of array
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  //.unshift adds element to end of array
  return kittens
  }

function destructivelyRemoveLastKitten(name){
  kittens.pop()
  //.pop removes element from beg. of array
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  //.shift removes element from end of array
  return kittens
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(name){
  return kittens.slice(1)
  return array
}
