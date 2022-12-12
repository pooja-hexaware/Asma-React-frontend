import * as React from 'react';
import { styled } from '@mui/system'
import { useSelector } from 'react-redux'
import {  SimpleCard } from 'components'
import { Button } from '@mui/material';
import StoreCard from 'components/cards/StoreCard';
import Stack from '@mui/material/Stack';
import AddToppings from '../AddToppings';
import Rating from '@mui/material/Rating';
import Layout1Topbar from 'components/MatxLayout/Layout1/Layout1Topbar';
const Container = styled('div')(({ theme }) => ({
  margin: '20px',
  color:'blue',
  [theme.breakpoints.down('sm')]: {
      margin: '16px',
  },
  '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: {
          marginBottom: '16px',
      },
  },
}))
export default function Nine() {
  const loading = useSelector((state) => state.loading)

  return ( 
    <div>
        <Layout1Topbar />
    <br></br>
    <Container>
    <SimpleCard title="Good Food, Great Time" color="white">
            {loading ? (
                'Loading...'
            ) : (
                <div >
                   Our Chef's at WiWi make delicious food selections every week - you pick, we cook and deliver
                </div>
            )}
        </SimpleCard>  
        <br></br>
        <StoreCard title="Double Bagel">
        {loading ? (
                'Loading...'
            ) : (
                <div >
                  Egg, Wheat, Honey Grain, Marble, French Toast, Jalapeño Cheddar, Veggie, Cinnamon Raisin, Salt, Poppy, Chestnut Hill, Sesame, Asiago and Red Onion
                </div>
            )}
            <br></br>
            <Rating name="read-only" value={3} readOnly />
            <Stack direction="row" spacing={100}>
                  <Button variant="contained" color="success"> Add to Cart </Button>
                  <AddToppings />
                  
            </Stack>
        </StoreCard>
        <br></br>
        <StoreCard title="Loaded Veggie">
        {loading ? (
                'Loading...'
            ) : (
                <div >
                 Sweet Potatoes, Brown Rice, Pinto Beans, Green Chilli Queso, Chipottle Mayo, Corn Pepper Blend
                </div>
            )}
            <br></br>
            <Rating name="read-only" value={4} readOnly />
            <Stack direction="row" spacing={100}>
                  <Button variant="contained" color="success"> Add to Cart </Button>
                  <AddToppings />
                  
            </Stack>
        </StoreCard>
        </Container>
        </div>
   
  );
}