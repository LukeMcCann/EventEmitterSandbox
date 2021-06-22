'use strict';

const Emitter = require('events');

let emt = new Emitter();

emt.on('greet', () => {
    console.log('Hello World');
});

emt.emit('greet');
