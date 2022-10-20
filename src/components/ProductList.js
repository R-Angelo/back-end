import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Header from './Header'

//img
import beefpro from '../image/beefpro.jpg'

// styles
import '../styles/productlist.css'

// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// MUI
import { Card, CardContent, CardHeader, ListItem, List, Typography, Divider } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProductList = () => {
    const hoverProduct = {
        margin: '5px',
        '&:hover': {
            boxShadow: 8
        }
    }

    const [paperView, setPaperView] = useState();

    return(
        <>
            <Header />
            <div className="product-container">
                <Paper className="category-container" elevation={2}>
                    <h3>Category:</h3>
                    <List sx={{display: 'grid'}}>
                        <Link><Divider/><ListItem>Pet Food<ArrowRightIcon/></ListItem></Link>
                        <Link><Divider/><ListItem>Pet Supplement<ArrowRightIcon/></ListItem></Link>
                        <Link><Divider/><ListItem>Pet Accessories<ArrowRightIcon/></ListItem></Link>
                        <Link><Divider/><ListItem>Pet Cage<ArrowRightIcon/></ListItem></Link>
                        <Link><Divider/><ListItem>Bowls and Feeders<ArrowRightIcon/></ListItem></Link>
                        <Link><Divider/><ListItem>Pet Treats<ArrowRightIcon/></ListItem></Link>
                    </List>
                </Paper>
                <div className="allproduct">
                    <div className="productheader">
                        <h4>Sort by: </h4>
                        <div className="dropdown">
                            <Link href="/myaccount">A-Z 
                                    <ArrowDropDownIcon />
                            </Link>
                            <div className="dropdown-content">
                                <Link>A-Z</Link>
                                <Link>Z-A</Link>
                                <Link>Price: Lowest to Highest</Link>
                                <Link>Price: Highest to Lowest</Link>
                            </div>
                        </div>
                        
                        <IconButton sx={{padding: '0'}} >
                            <ArrowLeftIcon />
                        </IconButton>
                        <p>1</p>
                        <IconButton sx={{padding: '0'}} >
                            <ArrowRightIcon/>
                        </IconButton>
                    </div>
                    <div className="product-list">
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                        <Card className="product" sx={hoverProduct}>
                            <Link to="/selectedproduct">
                                <div className="img-container">
                                    <img src={beefpro} alt="Product-image" />
                                </div>
                                <Typography variant='h6' sx={{marginLeft: '15px'}}>Pangalan ng product</Typography>
                                <Typography variant='subtitle1' sx={{marginLeft: '15px'}}>Price: 123</Typography>
                                <Typography variant='body' sx={{marginLeft: '15px'}}>Stock available: 123 </Typography>
                            
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton aria-label="buy now">
                                        <ShoppingBagIcon />
                                    </IconButton>
                                </CardActions>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList
