import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Link } from '@mui/material';

const Header = () => {
  const [colour, setColor] = React.useState('black');

  React.useEffect(() => {
    if (window.location.pathname === '/') {
      setColor('#fe4c50');
    }
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: { lg: 'fixed' },
        zIndex: { lg: 1 },
        right: { lg: 0 },
        left: { lg: 0 },
      }}
    >
      <AppBar
        position="static"
        color="white"
        sx={{
          height: '80px',
          paddingTop: '10px',
          paddingLeft: { xs: '5%', sm: '5%', md: '5%', lg: '10%' },
          paddingRight: { lg: '10%' },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            color="primary"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'block', sm: 'block' },
              marginRight: { xs: '5%', sm: '8%', md: '10%', lg: '12%' },
              width: '20%',
              fontSize: { xs: '20px', sm: '20px', md: '24px', lg: '24px' },
            }}
          >
            KHAMEZ-
            <Typography
              variant="h6"
              sx={{
                color: 'black',
                display: { xs: 'block', sm: 'inline' },
                fontSize: { xs: '20px', sm: '20px', md: '24px', lg: '24px' },
              }}
            >
              EMPIRE
            </Typography>
          </Typography>
          <Link
            component="button"
            variant="body2"
            underline="hover"
            sx={{
              display: { xs: 'none', lg: 'block' },
              color: colour,
              fontSize: '20px',
              padding: '20px',
            }}
            // onClick={() => navigate('/about')}
          >
            Home
          </Link>
          <Link
            component="button"
            variant="body2"
            underline="hover"
            sx={{
              display: { xs: 'none', lg: 'block' },
              color: 'black',
              fontSize: '20px',
              padding: '20px',
            }}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            A propos
          </Link>

          <Button
            sx={{
              color: 'black',
              borderRadius: '20%',
              paddingLeft: 'auto',
              paddingRight: 'auto',
            }}
          >
            <SearchIcon
              color="black"
              sx={{
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            />
          </Button>
          <Button
            sx={{
              color: 'black',
              borderRadius: '20%',
              paddingLeft: 'auto',
              paddingRight: 'auto',
            }}
          >
            <ShoppingCartIcon
              color="black"
              sx={{
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
