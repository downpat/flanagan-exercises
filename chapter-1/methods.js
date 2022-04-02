console.log('**Testing Javascript method implementations**')

console.log('Instantiating "catchPhrases" array...')
let catchPhrases = []
catchPhrases.push('Here I am.', 'Rock you like a hurricane!', 'Doh!', 'Aye Carumba')
console.log('Catch phrases: '+catchPhrases)

console.log('Running array "reverse" method on "catchPhrases" array')
catchPhrases.reverse()
console.log('Reversed catch phrases: '+catchPhrases)
console.log()


//'this' example
console.log('Adding custom "speak" method to catchPhrases array...')
catchPhrases.speak = function() {
  console.log('catchPhrases.speak this: '+this)
  return this[0] + ' ' + this[1]
}
console.log('catchPhrases.speak(): '+catchPhrases.speak())
console.log()

console.log('Instantiating "speakPhrases" JS object...')
let speakPhrases = {
  me: 'Here I am.',
  scorpions: 'Rock you like a hurricane!',
  homer: 'Doh!',
  bart: 'Aye Carumba!'
}
console.log('Speak phrases: '+speakPhrases)

console.log('Adding custom "speak" method to speakPhrases object...')
speakPhrases.speak = function() {
  console.log('speakPhrases.speak this: '+this)
  return this.me + ' ' + this.scorpions
}
console.log('speakPhrases.speak(): '+speakPhrases.speak())

console.log()


//Also, during experimentation, we discovered that arrow functions
//don't use 'this' like those instantiate with 'function'
console.log('Adding custom "talk" arrow-method to catchPhrases array...')
catchPhrases.talk = () => {
  console.log('catchPhrases.talk this: ')
  console.dir(this)
  return this[0] + ' ' + this[1]
}
console.log('catchPhrases.talk(): '+catchPhrases.talk())	//=> undefined undefined
console.log()

console.log('Adding custom "talk" arrow-method ot speakPhrases object...')
speakPhrases.talk = () => {
  console.log('speakPhrases.talk this: ')
  console.dir(this)
  return this.me + ' ' + this.scorpions
}
console.log('speakPhrases.talk(): '+speakPhrases.talk())	//=> undefined undefined

console.log('Arrow methods do not support "this" usage')
