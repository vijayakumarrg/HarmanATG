
import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './greeting.js';

(() => {
    ReactDOM.render(<Greeting name="Harman" />, document.getElementById('app'));
})();