console.log(`Javascript Lexical Structure allows
free use of whitespace and new lines`)

var a = 0; var b =      11
var     c=     10.2   

console.log(`a: ${a} b: ${b} c: ${c}`)

console.log()
console.log(`Any unicode character can be used in
identifiers.`)
var π = 3.14159;

console.log(`Pi: ${π}`)
console.log()

console.log(`Print an emoji using unicode escape sequence: ${"\u{1F600}"}`)

console.log('Printing more emojis...')

let eggplant = "\u{1F346}"
let peach = "\u{1F351}"
let splash = "\u{1F4A6}"

console.log(`Netflix and chill? ${eggplant} ${splash} ${peach}`)

console.log(`Full emoji list: https://unicode.org/emoji/charts/full-emoji-list.html`)

console.log()
console.log('Fun with linebreaks')
let s
s
=
3
console.log('We did it, s! '+s)
