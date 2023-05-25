import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './app';

const fetch_el = document.getElementById("dev-react");

const mount = (el) => {
    const root = ReactDOMClient.createRoot(el);
    root.render(<App />);
}

if(fetch_el) {
    mount(fetch_el)
}

export {mount}

