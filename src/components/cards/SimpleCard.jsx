import React from 'react'
import { Card } from '@mui/material'
import { styled, Box } from '@mui/system'
const CardRoot = styled(Card)(() => ({
    backgroundColor:'#3187d9',
    height: '100%',
    width: '70%',
    padding: '20px 24px',
}))
const CardTitle = styled('div')(({ subtitle }) => ({
    
    fontFamily: "Gill Sans",
    fontStyle: 'revert',
    fontSize: '2rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: !subtitle && "35px",
}))
const SimpleCard = ({ children, title, subtitle, icon }) => {
    return (
        <CardRoot elevation={6}>
            <CardTitle subtitle={subtitle}>
                {title}
            </CardTitle>
            {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
            {children}
        </CardRoot>
    )
}

export default SimpleCard
