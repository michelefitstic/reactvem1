import React from 'react';
import ReactDOM from 'react-dom/client';
//App è l'export di default e lo importi come sotto
import App from './App';
//MyComponent è un export normale e lo importi come sotto
import { MyComponent } from './App';

//Il div root è l'anchor della tua app --> React fa un mount della tua app nel div root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

