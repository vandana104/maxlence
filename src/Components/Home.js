import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, TextField } from '@mui/material';

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch the first 30 products from the API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products.slice(0, 90));
        setFilteredProducts(response.data.products.slice(0, 90));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  useEffect(() => {
    // Update filteredProducts when search value changes
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

 

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                alt={product.title}
                src={product.thumbnail}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
