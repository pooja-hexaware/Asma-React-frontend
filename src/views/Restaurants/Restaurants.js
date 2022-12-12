import { Card, Button, Box } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system'
import Layout1Topbar from 'components/MatxLayout/Layout1/Layout1Topbar'
import Stack from '@mui/material/Stack'
const Container = styled('div')(({ theme }) => ({
  margin: '20px',
  color:'blue',
  [theme.breakpoints.down('sm')]: {
      margin: '20px',
  },
  '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: {
          marginBottom: '16px',
      },
  },
}))
const Restaurants = () => {
  return (
    <div>
    <Layout1Topbar />
    <Container>
      <Card>
      <Box sx={{ mb: 3, width: '100%' }}>
        <Stack  spacing={2} >
          <div></div>
      <Button sx={{  width: '20%' }}  variant="contained" color="success" href="stores/465"> Store 4 </Button>
      <br></br>
      <Button sx={{  width: '20%' }}  variant="contained" color="success" href="/stores/772"> Store 7 </Button>
      <br></br>
      <Button sx={{  width: '20%' }}  variant="contained" color="success" href="/stores/891"> Store 8 </Button>
      <br></br>
      <Button sx={{  width: '20%' }}  variant="contained" color="success" href="/stores/901"> Store 9 </Button>
      </Stack>
      </Box>
      </Card>
      </Container>
    </div>
  )
}

export default Restaurants
