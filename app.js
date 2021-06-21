'use strict';

const Emitter = require('./emitter');

let emtr = new Emitter();
let emtr2 = new Emitter();

console.log('Emitter: ');
console.log(emtr);
console.log('');
console.log('Emitter2: ');
console.log(emtr2);

emtr.on('new_event', () => {
    console.log('Emitter Event was triggered');
});
console.log('');
console.log('Emitter: ');
console.log(emtr);

emtr2.on('new_event', () => {
    console.log('Emitter2 Event was triggered');
});
console.log('');
console.log('Emitter2: ');
console.log(emtr2);

emtr.on('awesome_event', () => {
    console.log('Awesome!');
});
console.log('');
console.log('Emitter: ');
console.log(emtr);

console.log('');
console.log('Emitter: ');
emtr.emit('new_event');
console.log(emtr);

console.log('');
console.log('Emitter: ');
emtr.emit('awesome_event');
console.log(emtr);

console.log('');
console.log('Emitter2: ');
emtr2.emit('new_event');
console.log(emtr2);

console.log('');
console.log('Emitter2: ');
emtr2.emit('awesome_event');
console.log(emtr2);