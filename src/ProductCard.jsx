import React from 'react';
import { Styles } from './Styles';
import { 
  Box,
  Card,
  CardMedia,
  Grid,
  Link,
  Typography 
} from '@mui/material';

const ProductCard = ({ title, description}) => {
  const classes = Styles();
  return (
    <Grid container sx={{ padding: 1 }}>
      <Grid item xs={2} className={classes.cardImage}>
        <Card elevation={0}>
          <Link href="#">
            <CardMedia
              component="img"
              alt="Product card"
              image="https://via.placeholder.com/80"
              title="Product card"
            />
          </Link>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Box
          className={classes.cardContent}
          component={Link} 
          href="#"
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Grid>
    </Grid>
)};

export default ProductCard;