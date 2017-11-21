function formatVanityPlate(string) {
  if (string.length > 12) {
    return `Your vanity plate is ${string.length} characters long - the maximum length is 12!`
  }
  let words = string.replace(/for/gi, '4').replace(/to/gi, '2').split(' ')
  words = words.map(word => word.toUpperCase())
  return words.join('')
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(two) }`)

const three = 'To be for me'
console.log(`Number plate: ${ formatVanityPlate(three) }`)

const four = 'This one is a very long one'
console.log(`Number plate: ${ formatVanityPlate(four) }`)


/*
Challenges:
1. Replace 'for' with '4' (COMPLETE)
2. Replace 'to' with '2'(COMPLETE)
3. Restrict to maximum of 12 characters
*/