import React from 'react'
import { Link } from 'react-router-dom'

//components
import Header from './Header'

//styles
import '../styles/homepage.css'

// image
import petfood from '../image/pet-food-category.png'
import petvit from '../image/pet-vit-category.png'
import petaccessories from '../image/pet-accessories-category.png'
import petcage from '../image/pet-cage-category.png'
import petbowl from '../image/pet-feeder-category.png'
import pettreats from '../image/pet-treat-category.png'
import Footer from './Footer'

const HomePage = () => {
    return (
        <div className='main'>
            <Header />
            <div className="promotion-section"> <h1>carousel nakalagay dito</h1></div>

            <div className="category-section">
                <h3>Categories</h3>
                <div className="category-list">
                    <div className="category">
                        <Link to="/productlist" >
                            <div className="image-container">
                                <img src={petfood} alt="petfoodicon"></img>
                            </div>
                            <p>Pet food</p>
                        </Link>
                    </div>
                    <div className="category">
                        <Link to="/productlist">
                            <div className="image-container">
                                <img src={petvit} alt="petvitaminsicon"></img>
                            </div>
                            <p>Pet supplement</p>
                        </Link>
                    </div>
                    <div className="category">
                        <Link to="/productlist">
                        <div className="image-container">
                            <img src={petaccessories} alt="petaccessoriesicon"></img>
                        </div>
                        <p>Pet accessories</p>
                        </Link>
                    </div>
                    <div className="category">
                        <Link to="/productlist">
                        <div className="image-container">
                            <img src={petcage} alt="petcageicon"></img>
                        </div>
                        <p>Pet cage</p>
                        </Link>
                    </div>
                    <div className="category">
                        <Link to="/productlist">
                        <div className="image-container">
                            <img src={petbowl} alt="petbowlsicon"></img>
                        </div>
                        <p>Pet feeders/bowls</p>
                        </Link>
                    </div>
                    <div className="category">
                        <Link to="/productlist">
                        <div className="image-container">
                            <img src={pettreats} alt="pettreaticon"></img>
                        </div>
                        <p>Pet treats</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="feedback-section">
                <h3>Feedback</h3>
            </div>

            <div className="topsale-section">
                <h3>Top Sale</h3>
            </div>

            <div className="about-section">
                <h3>About</h3>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage