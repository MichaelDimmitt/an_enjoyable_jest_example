import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxWithLabel from './CheckboxWithLabel';
import registerServiceWorker from './registerServiceWorker';
import Renderer from './Renderer';

ReactDOM.render(<Renderer />, document.getElementById('root'));
registerServiceWorker();
