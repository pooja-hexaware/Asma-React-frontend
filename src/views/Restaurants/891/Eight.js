import * as React from 'react';
import { styled } from '@mui/system'
import { useSelector } from 'react-redux'
import {  SimpleCard } from 'components'
import { Button } from '@mui/material';
import StoreCard from 'components/cards/StoreCard';
import Stack from '@mui/material/Stack';
import AddToppings from '../AddToppings';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
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
export default function Eight() {
  const loading = useSelector((state) => state.loading)

  return ( <div>
    <Layout1Topbar />
    <Container>
    <br></br>
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
        <Stack direction="row" spacing={2}>
        <StoreCard title="Hummus Falafel"  >
      <CardMedia 
        component="img"
        alt="green iguana"
        height="350"
        image="https://c4.wallpaperflare.com/wallpaper/809/377/276/meat-tomatoes-salad-tomatoes-wallpaper-preview.jpg"
      />
      
      
      <br></br>
        {loading ? (
                'Loading...'
            ) : (
                <div >
                 Falafel, Cucumber Salsa, Spicy Chimichumi, Go-Go Sauce, Roasted Red Pepper Hummus, Red Onions, Feta Pita Chips
                </div>
            )}
            <br></br>
            <Rating name="read-only" value={4} readOnly />
            <br></br>
            <Stack direction="row" spacing={40} >
            
                  <Button variant="contained" color="success"> Add to Cart</Button>
                  <AddToppings />
                  
            </Stack>
        </StoreCard>
        <br></br>
        <StoreCard title="Feta Falafel">
        <CardMedia 
        component="img"
        alt="green iguana"
        height="350"
        image="https://joyfoodsunshine.com/wp-content/uploads/2016/05/baked-falafel-recipe-square-2.jpg"
      />
        {loading ? (
                'Loading...'
            ) : (
                <div >
                  Falafel Green Goddess Dressing, Lemon Garlic, Vinaigrette, Cucumber Salsa, Picked Red Onion, Tangy Herb Aioli, Feta
                </div>
            )}
            <br></br>
            <Rating name="read-only" value={5} readOnly />
            <Stack direction="row" spacing={40}>
                  <Button variant="contained" color="success"> Add to Cart </Button>
                  <AddToppings />
                  
            </Stack>
        </StoreCard>
        <br></br>
        <StoreCard title="Loaded Veggie">
        <CardMedia 
        component="img"
        alt="green iguana"
        height="350"
        image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F04%2F06%2Fchicken-and-halloumi-chickpea-rice-bowls.jpg"
        />
        {loading ? (
                'Loading...'
            ) : (
                <div >
                 Sweet Potatoes, Brown Rice, Pinto Beans, Green Chilli Queso, Chipottle Mayo, Corn Pepper Blend
                </div>
            )}
            <br></br>
            <Rating name="read-only" value={5} readOnly />
            <Stack direction="row" spacing={40}>
                  <Button variant="contained" color="success"> Add to Cart </Button>
                  <AddToppings />
                  
            </Stack>
        </StoreCard>
        </Stack>
        <br></br>

       
</Container>
</div>
   
  );
}