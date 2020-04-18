import React from 'react';
import PaypalButton from "./PaypalButton.js"
import {Link} from "react-router-dom"

function CartTotals({value,history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value
    console.log(value.cartSubTotal)
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto ml-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={()=>value.clearCart()}
                            >
                            Clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal : 
                            </span>
                            <strong>${value.cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Tax : 
                            </span>
                            <strong>$ {value.cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total : 
                            </span>
                            <strong>$ {value.cartTotal}</strong>
                        </h5>
                        <PaypalButton 
                        total={value.cartTotal} 
                        clearCart={value.clearCart} 
                        history={history} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotals;