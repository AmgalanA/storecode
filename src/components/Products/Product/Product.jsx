import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Badge, CircularProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import BadgeContent from './BadgeContent/BadgeContent';

import useStyles from './styles';

const Product = ({ cart, product, onAddToCart, onSetProductId, isTyping, onSetIsTyping }) => {
    const classes = useStyles();
    
    if(isTyping) return (
        <div className={classes.spinner}>
            <CircularProgress />
         </div>
    )

    return (
        <>
            <Card className={product.id === 'prod_AYrQlWXKVawnbR' || product.id === 'prod_yA6nldmQJMwEWb' || product.id === 'prod_A12JwrekE8lPjn' || product.id === 'prod_7ZAMo1QRWWoNJ4' || product.id === 'prod_r2LM5QGjEPwZV1' || product.id === 'prod_NXELwj182pl3A4' ? classes.firstRoot : classes.root} onClick={() => onSetProductId(product.id)}>
            {console.log(product.id)}
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.cardContentName} variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography className={classes.cardContentPrice} variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
            <Typography className={classes.cardContentDescription}
            dangerouslySetInnerHTML
            ={{ __html: `${product.description.substring(0, 100)}...`}} 
            variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={(e) => onAddToCart(e,product.id, 1)}>
                    {!cart.line_items && <AddShoppingCart />}
                    <BadgeContent product={product} items={cart.line_items}/>
                </IconButton>
            </CardActions>            
        </Card>
        </>
    )
}

export default Product
