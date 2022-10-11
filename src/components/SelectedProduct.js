import React from 'react'
import { Link } from 'react-router-dom'

//components
import Header from './Header'
import Footer from './Footer'

// image
import gcash from '../image/gcash.png'
import cod from '../image/cash-on-delivery.png'
import beefpro from '../image/beefpro.jpg'

// styles
import '../styles/selectedproduct.css'

const SelectedProduct = () => {
    return (
        <div className='main'>
        <Header />
            <div className="product-container">
                <div className="product-image">
                    <div className="product-image-container">
                        <img src={beefpro} alt="product"/>
                    </div>
                    <div className="product-description">
                        <p> Description: A high protein, high energy and highly digestible beef meal based dry dog food in an easy to chew, bite size form. Because of the highly digestible formula, even the most demanding nutritional requirements can be met by feeding less than other commercial dog foods.
                        </p>
                    </div>
                </div>
                <div className="availability-container">
                    <h1>Beef pro adult</h1>
                    <p>Price: 3,000</p>
                    <p>Quantity: <input type="number" name="" id="" /> </p>
                    <div className="button">
                        <button>Add to cart</button>
                        <button>Buy now</button>
                    </div>
                    <div className="payment-method">
                        <h3>Payment method</h3>
                        <div className="payment-container">
                            <div className="payment">
                                <img src={cod} alt="CashonDelivery"/>
                            </div>
                            <div className="payment">
                                <img src={gcash} alt="G-cash"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SelectedProduct