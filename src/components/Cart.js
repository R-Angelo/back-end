import  React from 'react'

// image
import beefpro from '../image/beefpro.jpg'

// Styles
import '../styles/cart.css'

// component
import Header from './Header'
import Footer from './Footer'

const Cart = () => {
    return(
        <>
        <Header />
            <div className="cart-container">
                <div className="cart-header">
                    <div className="select-all">
                        <input type="checkbox" name="cbSelectAll" id="cbSelectAll" />
                        <label> Select All</label>
                    </div>
                    <div className="details">
                        <div className="box"><h4>Unit Price</h4></div>
                        <div className="box"><h4>Quantity</h4></div>
                        <div className="box"><h4>Total Price</h4></div>
                        <div className="box"><h4>Action</h4></div>
                    </div>
                </div>
                <div className="cart-list">
                    <div className="box-1">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <div className="image-container">
                            <img src={beefpro} alt="image" />
                        </div>
                        <h4>Variation:</h4>
                    </div>
                    <div className="box-2">
                        <div className="box"><label id="price">300</label></div>
                        <div className="box"><input type="number" name="quantity" id="quantity" /></div>
                        <div className="box"><label id="totalPrice">300</label></div>
                        <div className="box"><button>Remove</button></div>
                    </div>
                </div>
                <div className="cart-list">
                    <div className="box-1">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <div className="image-container">
                            <img src={beefpro} alt="image" />
                        </div>
                        <h4>Variation:</h4>
                    </div>
                    <div className="box-2">
                        <div className="box"><label id="price">300</label></div>
                        <div className="box"><input type="number" name="quantity" id="quantity" /></div>
                        <div className="box"><label id="totalPrice">300</label></div>
                        <div className="box"><button>Remove</button></div>
                    </div>
                </div>
                <div className="cart-list">
                    <div className="box-1">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <div className="image-container">
                            <img src={beefpro} alt="image" />
                        </div>
                        <h4>Variation:</h4>
                    </div>
                    <div className="box-2">
                        <div className="box"><label id="price">300</label></div>
                        <div className="box"><input type="number" name="quantity" id="quantity" /></div>
                        <div className="box"><label id="totalPrice">300</label></div>
                        <div className="box"><button>Remove</button></div>
                    </div>
                </div>
                <div className="cart-list">
                    <div className="box-1">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <div className="image-container">
                            <img src={beefpro} alt="image" />
                        </div>
                        <h4>Variation:</h4>
                    </div>
                    <div className="box-2">
                        <div className="box"><label id="price">300</label></div>
                        <div className="box"><input type="number" name="quantity" id="quantity" /></div>
                        <div className="box"><label id="totalPrice">300</label></div>
                        <div className="box"><button>Remove</button></div>
                    </div>
                </div>
                <div className="cart-list">
                    <div className="box-1">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <div className="image-container">
                            <img src={beefpro} alt="image" />
                        </div>
                        <h4>Variation:</h4>
                    </div>
                    <div className="box-2">
                        <div className="box"><label id="price">300</label></div>
                        <div className="box"><input type="number" name="quantity" id="quantity" /></div>
                        <div className="box"><label id="totalPrice">300</label></div>
                        <div className="box"><button>Remove</button></div>
                    </div>
                </div>
        </div>
        <Footer />
        </>
    )
}

export default Cart