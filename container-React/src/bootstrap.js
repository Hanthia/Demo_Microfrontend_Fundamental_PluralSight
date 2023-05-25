import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const element= document.getElementById("dev-container");
 const root = ReactDOMClient.createRoot(element);
    root.render(<App />);