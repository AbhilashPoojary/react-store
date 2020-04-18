import React, { Component } from 'react'
import {Switch,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Store from "./components/Cart/Cart.js"
import Details from "./components/Details.js"
import Navbar from "./components/Navbar.js"
import ProductList from "./components/ProductList.js"
import Default from "./components/Default.js"
import Modal from "./components/Modal"

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar/>
       <Switch>
         <Route exact path="/" component={ProductList} />
         <Route path="/Details" component={Details} />
         <Route path="/Store" component={Store} />
         <Route component={Default} />
       </Switch>
       <Modal/>
    </React.Fragment>
    )
  }
}

export default App