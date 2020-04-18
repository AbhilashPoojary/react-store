import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import {BrowserRouter as Router} from "react-router-dom"
import {ProductProvider} from "./Context"
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
<ProductProvider>
    <Router>
    <App />
    </Router>
</ProductProvider>
, document.getElementById('root'))
registerServiceWorker()