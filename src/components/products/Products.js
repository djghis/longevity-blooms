import React from 'react';
import{ Grid }from  '@material-ui/core';
import Product from './Product/Product';

const products = [
    {id: 1, name:'dried bouquets', description: '£35 drie bqts', price:'£3.99', image: 'https://honestlywtf.com/wp-content/uploads/2019/05/driedflowers25.webp'},
    {id: 2, name: 'flat bqts', description: '£40 inc delivery', price:'£5.09', image: 'https://honestlywtf.com/wp-content/uploads/2019/05/driedflowers30.webp'},
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products;