import React,{Component} from "react"
import {ProductConsumer} from "../Context.js"
import {Link} from "react-router-dom"
import {ButtonContainer} from "./Button.js"
 
class Details extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value)=>{
                       const {id,title,img,info,price,company,inCart} = value.detailProduct;
                       return(
                           <div className="container py-5">
                               {/* {title} */}
                                    <div className="row">
                                        <div className="col-10 max-auto text-center text-slanted text-blue my-5">
                                            <h1>{title}</h1>
                                        </div>
                                    </div>
                               {/* {title end} */}

                               {/*Product info*/ }
                                    <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3">
                                            <img src={img} className="img-fluid" alt="product"/>
                                        </div>
                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                            <h2>model: {title}</h2>
                                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                                made by: <span className="text-uppercase">{company}</span>
                                            </h4>
                                            <h4 className="text-blue">
                                                <strong>
                                                    price: <span>$</span>{price}
                                                </strong>
                                            </h4>
                                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                                some info about the product
                                            </p>
                                            <p className="text-muted lead">{info}</p>
                                            {/* buttons */}
                                            <div>
                                                <Link to="/">
                                                    <ButtonContainer>back to product</ButtonContainer>
                                                </Link>
                                                <ButtonContainer 
                                                cart 
                                                disabled={inCart?true:false} 
                                                onClick={()=>{
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                    }}>
                                                    {inCart?"in cart":"add to cart"}
                                                </ButtonContainer>
                                            </div>

                                        </div>
                                    </div>
                               {/*Product info end*/ }
                           </div>
                       )
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

export default Details;