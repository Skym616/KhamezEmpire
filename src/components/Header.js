import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

import {
  Button,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const drawerWidth = '240px';

const useStyles = makeStyles({
  drawer: { width: drawerWidth },
  drawerPaper: { width: drawerWidth },
});

const Header = () => {
  const [colour, setColor] = React.useState('black');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname === '/') {
      setColor('#fe4c50');
    }
  }, []);

  const classes = useStyles();
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
            onClick={() => setOpen(true)}
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
              fontFamily: 'Poppins',
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
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <SearchIcon
                color="black"
                sx={{
                  marginLeft: '20px',
                  cursor: 'pointer',
                }}
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ShoppingCartIcon
                color="black"
                sx={{
                  marginLeft: '20px',
                  cursor: 'pointer',
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
        <Drawer
          anchor="left"
          open={open}
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          onClose={() => setOpen(false)}
        >
          <Box sx={{ height: '100%', backgroundColor: '#000a2b' }}>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="open drawer"
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: { xs: 'block', lg: 'block' },
                backgroundColor: '#fe4c50'
              }}
              onClick={() => setOpen(false)}
            >
              <ChevronLeft />
            </IconButton>
            <Divider />
            <List>
              <ListItem sx={{ borderBottom: '2px solid #fe4c50' }}>
                <ListItemIcon>
                  <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/" sx={{ color: '#ffffff' }} underline="none">
                    Home
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ borderBottom: '2px solid #fe4c50' }}>
                <ListItemIcon>
                  <InfoIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/about" sx={{ color: '#ffffff' }} underline="none">
                    About
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Header;
