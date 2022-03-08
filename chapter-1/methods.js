let catchPhrases = []
catchPhrases.push('Here I am.', 'Rock you like a hurricane!', 'Doh!', 'Aye Carumba')
console.log(catchPhrases)
catchPhrases.reverse()
console.log(catchPhrases)

//'this' example
catchPhrases.speak = function() {
  return this[0] + ' ' + this[1]
}

let speakPhrases = {
  me: 'Here I am.',
  scorpions: 'Rock you like a hurricane!',
  homer: 'Doh!',
  bart: 'Aye Carumba!'
}

speakPhrases.speak = function() {
  return this.me + ' ' + this.scorpions
}

console.log(catchPhrases.speak())

console.log(speakPhrases.speak())

//Also, during experimentation, we discovered that arrow functions
//don't use 'this' like those instantiate with 'function'
catchPhrases.talk = () => {
  return this[0] + ' ' + this[1]
}

speakPhrases.talk = () => {
  return this.me + ' ' + this.scorpions
}

console.log(catchPhrases.talk())	//=> undefined undefined

console.log(speakPhrases.talk())	//=> undefined undefined
