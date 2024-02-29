function sayHello(string) {
  return ("Hello, " + string + "!")
}

  // const prompt = require('prompt-sync')();
  
  // const text = prompt('Type the string here: ');
  // console.log('Hello ' + text + '!');

function uppercase (string) {
  return string.toUpperCase();
};

function lowercase (string) {
  return string.toLowerCase();
};

function countCharacters (string) {
  return string.length;
};

function firstCharacter (string) {
  return string.charAt(0);
};

function firstCharacters (string, n) {
  return string.slice(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
