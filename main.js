var sayHello = require('./first-component');

require('./styles/main.scss');

sayHello('Guybrush', document.querySelector('h2'));
