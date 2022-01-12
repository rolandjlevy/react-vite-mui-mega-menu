import React from 'react';
import { 
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography 
} from '@mui/material';

const ProductCard = ({ title, description}) => (
  <Container sx={{ padding: 1 }}>
    <Grid container>
      <Grid item xs={4} sx={{ 
          display:'flex', 
          justifyContent: 'flex-end',
          paddingRight: 2
        }}>
        <Card elevation={0}>
          <CardMedia
            component="img"
            alt="Product card"
            height="80"
            width="80"
            image="https://via.placeholder.com/80"
            title="Product card"
          />
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Box 
          p={1} 
          component={Link} 
          href="#"
          sx={{ 
            display:'flex', 
            justifyContent: 'center',
            flexDirection: 'column',
            height: 'calc(100% - 16px)'
          }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default ProductCard;