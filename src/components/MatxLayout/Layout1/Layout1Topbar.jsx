import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'common/hooks/useAuth'
import useSettings from 'common/hooks/useSettings'
import { styled, useTheme, Box } from '@mui/system'
import { Span } from '../../../components/Typography'
import { MatxMenu, MatxSearchBox } from 'components'
// import ShoppingCart from '../../ShoppingCart/ShoppingCart'
// import NotificationBar from '../../NotificationBar/NotificationBar'
import ReactRoundedImage from "react-rounded-image";
import { themeShadows } from 'components/MatxTheme/themeColors'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { NotificationProvider } from 'common/contexts/NotificationContext'
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    useMediaQuery,
    Hidden,
} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from 'react-router-dom'
import { topBarHeight } from 'utils/constant'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}))

const TopbarRoot = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarHeight,
}))

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}))

const UserMenu = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 24,
    padding: 4,
    '& span': {
        margin: '0 8px',
    },
}))

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': {
        marginRight: '10px',
        color: theme.palette.text.primary,
    },
}))

// const IconBox = styled('div')(({ theme }) => ({
//     display: 'inherit',
//     [theme.breakpoints.down('md')]: {
//         display: 'none !important',
//     },
// }))

const Layout1Topbar = () => {
    const theme = useTheme()
    const { settings, updateSettings } = useSettings()
    const { logout, user } = useAuth()
    const navigate = useNavigate()
    const { palette } = useTheme()
    const textColor = palette.text.primary

    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings
        let mode
        if (isMdScreen) {
            mode =
                layout1Settings.leftSidebar.mode === 'close'
                    ? 'mobile'
                    : 'close'
        } else {
            mode =
                layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full'
        }
        updateSidebarMode({ mode })
    }
    const Orders=()=>{
        navigate('/orders')
    }

    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                    <StyledIconButton>
                        <Link to = '/home' >
                       
                       <img width="80" height="45" src="https://wiwi.tu-dortmund.de/storages/wiwi/_processed_/7/a/csm_logo-wiwi-15-10_706365d493.png"></img>
                       
                        </Link>
                    </StyledIconButton>
                    

                    {/* <IconBox>
                        <StyledIconButton>
                            <Icon>mail_outline</Icon>
                        </StyledIconButton>

                        <StyledIconButton>
                            <Icon>web_asset</Icon>
                        </StyledIconButton>

                        <StyledIconButton>
                            <Icon>star_outline</Icon>
                        </StyledIconButton>
                    </IconBox> */}
                </Box>
                <Box display="flex" alignItems="center">
                    <MatxSearchBox />
                    <IconButton >
                    <Link to = "/cart">
                    <ShoppingCartIcon sx={{ color: textColor }} />
                    </Link>
                    </IconButton>
                    
                    {/* <AddToCartButton /> */}
                    {/* <NotificationProvider>
                        <NotificationBar />
                    </NotificationProvider> */}

                    {/* <ShoppingCart /> */}

                    <MatxMenu
                        menuButton={
                            <UserMenu>
                                <Hidden xsDown>
                                    <Span>
                                        Hi <strong>{user.name ?? "User"}</strong>
                                    </Span>
                                </Hidden>
                                <Avatar
                                    src={user.avatar}
                                    sx={{ cursor: 'pointer' }}
                                />
                            </UserMenu>
                        }
                    >
                        <StyledItem>
                            <Link to="/">
                                <Icon> home </Icon>
                                <Span> Home </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Link to="/page-layouts/user-profile">
                                <Icon> person </Icon>
                                <Span> Profile </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem >
                        <Link to="/orders">
                            <FastfoodIcon>  My Orders </FastfoodIcon>
                            <Span>  Orders </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem >
                        <Link to = "/stores">
                            <StoreIcon>   </StoreIcon>
                            <Span>  Stores  </Span>
                            </Link>
                        </StyledItem>
                    </MatxMenu>
                </Box>
            </TopbarContainer>
        </TopbarRoot>
    )
}

export default React.memo(Layout1Topbar)
