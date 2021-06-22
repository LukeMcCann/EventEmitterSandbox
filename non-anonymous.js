'use strict';

const Emitter = require('./emitter');

let emt = new Emitter();

emt.on('event', function listener() { console.log('Hello World') });

emt.emit('event');

console.log(emt);
