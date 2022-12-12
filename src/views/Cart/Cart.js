import { SimpleCard } from 'components'
import React from 'react'
import Dialog from '@mui/material/Dialog';
import { useSelector } from 'react-redux'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import { styled } from '@mui/system'
import SubmitOrder from './SubmitOrder';
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
const Cart = () => {
  const[coupon,setcoupon]=useState("")
  const loading = useSelector((state) => state.loading)
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleCoupOpen = () => {
    setOpen(true);
  };

  const handleCoupClose = () => {
    setOpen(false);
  };
  const couponcheck = () => {
    setcoupon(coupon);
    console.log("coupon",coupon);
  }
  return ( 
    <div>
  <Layout1Topbar />
   
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
        <br></br>
      <Button variant="outlined" color="success" onClick={handleCoupOpen}> Add Coupon </Button>
      <Dialog fullWidth={fullWidth}
        maxWidth={maxWidth} open={open} onClose={handleCoupClose}>
        <DialogTitle>Add Field</DialogTitle>
        <DialogContent sx={{ mb: 3, width: '100%' }}>
        <TextField
          sx={{ mb: 3, width: '100%' }}
            autoFocus
            margin="normal"
            fullWidth
            label="Address"
            type="string"
            variant="outlined"
            value={coupon}
            onChange={(e) => setcoupon(e.target.value)}
          /></DialogContent>
        <DialogActions>
          <Button  variant="outlined" color="success" onClick={handleCoupClose}>Cancel</Button>
          <Button  variant="outlined" color="success" onClick={couponcheck}>Validate Coupon</Button>
        </DialogActions>
      </Dialog> 
      <br></br>
      <br></br>
      <SubmitOrder />
      </Container>
    </div>
  )
}

export default Cart
