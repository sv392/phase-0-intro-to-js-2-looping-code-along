// Code your solutions in this file
let messages = [];
function writeCards(name, event) {
  for (let count = 0; count < name.length; count++) {
    messages.push(`Thank you, ${name[count]}, for the wonderful ${event} gift!`)

}
return messages;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }

}