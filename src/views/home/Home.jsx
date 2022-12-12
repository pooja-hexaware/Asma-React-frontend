import React from 'react'
import { styled } from '@mui/system'
import {  SimpleCard } from 'components'
import { useSelector } from 'react-redux'
import GoogleMaps from './GoogleMaps'
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
const Home = () => {
    const loading = useSelector((state) => state.loading)
    return <Container>
        
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
            <GoogleMaps />
           
    </Container>
}

export default Home
