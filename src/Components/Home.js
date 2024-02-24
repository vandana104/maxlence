import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useProductContext } from '../ProductContext';
import Navbar from './Navbar';

function Home() {
  const { filteredProducts } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Calculate indexes for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Navbar/>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:""}}>
      <Grid container spacing={2} margin="20px">
        {currentProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            {/* Adjust the xs, sm, md, and lg props above to control the number of cards per row */}
            <Card>
              <CardMedia
                component="img"
                height="240"
                width="250"
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
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </Button>
        <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
        <Button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastProduct >= filteredProducts.length}>
          Next Page
        </Button>
      </div>
    </div>
    </div>
  );
}

export default Home;
