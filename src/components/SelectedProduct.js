import React from 'react'
import { useState } from 'react'
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

// icons
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from '@mui/material/Stack';    
import { Input, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { withTheme } from 'styled-components'


const SelectedProduct = () => {
    const [quantityCount, setQuantityCount] = useState(0);

    const increment = () =>{
        setQuantityCount(quantityCount + 1);
    }
    const decrement = () =>{
        setQuantityCount(quantityCount - 1);
    }
    
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
                    <p> <Stack direction="row" alignItems='center'> Quantity:
                    <IconButton aria-label="minus" onClick={decrement} disabled={quantityCount == 0} >
                        <RemoveIcon fontSize='small' sx={{ backgroundColor: 'white', color: 'black'}} />
                    </IconButton>
                        <Input sx={{ backgroundColor: 'white'}} placeholder='0' value={quantityCount}></Input>
                    <IconButton aria-label="add" onClick={increment} >
                        <AddIcon fontSize='small' sx={{ backgroundColor: 'white', color: 'black'}}/>
                    </IconButton>
                        <IconButton variant="contained" endIcon={<AddIcon />} />
                    </Stack> 
                    </p>
                    <div className="button">
                        <Button 
                            variant='contained' 
                            type='submit' 
                            endIcon={<ShoppingCartIcon />}
                            sx={{backgroundColor: 'white', color: 'black'}}
                        >
                            Add to cart
                        </Button>
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
