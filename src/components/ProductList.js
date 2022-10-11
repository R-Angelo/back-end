import React from 'react'
import { Link } from 'react-router-dom'

//components
import Header from './Header'
import Footer from './Footer'

//img
import beefpro from '../image/beefpro.jpg'

// styles
import '../styles/productlist.css'

const ProductList = () => {
    return(
        <>
            <Header />
            <div className="product-container">
                <div className="category-container">
                    <h3>Category:</h3>
                    <ul>
                        <li>Pet Food</li>
                        <li>Pet Supplement</li>
                        <li>Pet Accessories</li>
                        <li>Pet Cage</li>
                        <li>Bowls and Feeders</li>
                        <li>Pet Treats</li>
                    </ul>
                </div>
                <div className="allproduct">
                    <div className="productheader">
                        <h4>Sort by: </h4>
                        <label> iba't-ibang sorting </label>
                        <button>L</button>
                        <p>1</p>
                        <button>R</button>
                    </div>
                    <div className="product-list">
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                        <div className="product">
                            <Link to="/selectedproduct">
                            <div className="img-container">
                                <img src={beefpro} alt="Product-image" />
                            </div>
                            <h4>Pangalan ng product</h4>
                            </Link>
                            <h3>Price: 123 </h3>
                            <p>Stock available: 123 </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductList