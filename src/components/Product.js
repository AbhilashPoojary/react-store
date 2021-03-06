import React, { Component } from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../Context.js"
import PropTypes from "prop-types"

class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 max-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <ProductConsumer>
                    {(value)=>(
                        <div className="img-container py-5" onClick={()=> value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="card-btn" 
                            onClick={()=>{
                                value.addToCart(id)
                                value.openModal(id)
                            }} 
                            disabled={inCart?true:false}>
                            {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<i className="fa fa-cart-plus"></i>)}
                        </button>
                    </div>
                    )}
                    
                </ProductConsumer>
                    {/*card footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition: all 1.5s linear;

    }
    .card-footer{
        background:transparent;
        boder-top:trnasparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background:rgba(247,247,247);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    &:hover .card-img-top{
        transform:scale(1.1);
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .card-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border:none;
        color: var(--mainWhite);
        font-size:1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%,100%);
        transition: all 0.7s linear;
    }
    .img-container:hover .card-btn{
        transform: translate(0,0);
    }
    .card-btn:hover{
        color: var(--mainBlue);
        cursor: pointer;
    }
`;

export default Product;