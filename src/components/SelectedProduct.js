import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Header from './Header'

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
import { Divider, Input, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { withTheme } from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SelectedProduct = () => {
    const hoverStyle = {
        backgroundColor: 'white', 
        color: 'black',
        "&:hover": {
            backgroundColor: 'black',
            color: 'white',
            border: '1px white solid'
        },
    }

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

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
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1') } sx={{marginTop: '20px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Description
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A high protein, high energy and highly digestible beef meal based dry dog food in an easy to chew, bite size form. Because of the highly digestible formula, even the most demanding nutritional requirements can be met by feeding less than other commercial dog foods.
                            </Typography>
                            <Divider />
                            <Typography>
                                FEEDING TIPS: Changes in your pet’s feeding habits should be made gradually. When changing over to BEEFPRO PERFORMANCE formula, first substitute small amounts of BEEFPRO PERFORMANCE in place of your pet’s current food. Then over the next week to 10 days, increase the amount of BEEFPRO PERFORMANCE while decreasing amounts of his other food, until your pet has a 100% BEEFPRO PERFORMANCE formula diet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
                <div className="availability-container">
                    <h1>Beef pro adult</h1>
                    <p>Price: 3,000</p>
                    <p> 
                        <Stack direction="row" alignItems='center'> Quantity:
                            <IconButton aria-label="minus" onClick={decrement} disabled={quantityCount == 0} >
                                <RemoveIcon fontSize='small' sx={hoverStyle}  />
                            </IconButton>
                            <Input sx={{ backgroundColor: 'white'}} placeholder='0' value={quantityCount}></Input>
                            <IconButton aria-label="add" onClick={increment} >
                                <AddIcon fontSize='small' sx={hoverStyle} />
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
        </div>
    )
}

export default SelectedProduct
