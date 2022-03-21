import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material';
import '../styles/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useBadgeContext } from '../contexts/BadgeContext';


const ButtonItems = ['All', 'Shoes', 'Clothes', 'Accessories'];

const Arrivals = () => {
  const navigate = useNavigate();
  const badgeContext = useBadgeContext();
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState([]);
  const [shoppingTab, setShoppingTab] = useState([]);
  const [circular, setCircular] = useState(true);


  useEffect(() => {
    getProducts();
    badgeContext.update();
    if (window.sessionStorage.getItem('pannier')) {
      setShoppingTab([...JSON.parse(window.sessionStorage.getItem('pannier'))]);
    }
  }, []);

  const getProducts = () => {
    axios
      .get('https://khamez-empire-api.herokuapp.com/products')
      .then((response) => {
        const products = response.data.products;
        let tab = [];
        products.forEach((product) => {
          const value = { ...product, qt: 1 };
          tab.push(value);
        });
        setProducts([...tab]);
        setTab([...tab]);
        setCircular(false);
      })
      .catch((error) => {
        console.log(error);
        setCircular(false);
      });
  };

  const filterProduct = (button) => {
    console.log(button);
    if (button.toLowerCase() === 'clothes') {
      setTab([...products.filter((item) => item.category.toLowerCase().includes('clothe'))]);
    }
    if (button.toLowerCase() === 'shoes') {
      setTab([...products.filter((item) => item.category.toLowerCase().includes('shoe'))]);
    }
    if (button.toLowerCase() === 'accessories') {
      setTab([...products.filter((item) => item.category.toLowerCase().includes('accessory'))]);
    }
    if (button.toLowerCase() === 'all') {
      setTab([...products]);
    }
  };

  const addProduct = (item) => {
    shoppingTab.push(item);
    setShoppingTab((prevState) => [...prevState]);
    window.sessionStorage.setItem('pannier', JSON.stringify([...new Set(shoppingTab)]));
    badgeContext.update();
  };

  return (
    <Container sx={{ marginTop: '20px' }}>
      {/* <Typography
        variant='h4'
        sx={{
          marginRight: 'auto',
          marginLeft: 'auto',
          borderBottom: '3px solid #fe4c50',
          width: 'max-content',
          fontWeight: '500',
          fontFamily: 'poppins'
        }}
      >
        New Arrivals
      </Typography>*/}
      {circular ? <CircularProgress size={60} sx={{ ml: '40%' }} /> :
        <Grid container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '30px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <ButtonGroup
              variant='outlined'
              aria-label='outlined button group'
              size='large'
              sx={{ backgroundColor: '#ffffff', ml: { xs: '0' } }}
            >
              {ButtonItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    borderColor: 'rgb(233, 233, 233)',
                    color: 'black',
                    fontSize: { xs: '10px' }
                  }}
                  onClick={() => {
                    filterProduct(item.toLowerCase());
                  }}
                >
                  {item}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Grid item container sx={{ marginTop: '45px' }}>
            {tab.map((item) => (
              <Grid item lg={3} xs={12} md={4} sm={6} key={item.image}>
                <Card
                  sx={{
                    maxWidth: 221,
                    height: 350,
                    borderRight: '1px solid rgb(233, 233, 233)',
                    borderLeft: '1px solid rgb(233, 233, 233)',
                    borderRadius: 0,
                    cursor: 'pointer',
                    marginBottom: '40px',
                    marginLeft: { xs: 'auto' },
                    marginRight: { xs: 'auto' }
                  }}
                  elevation={0}
                  className='card'
                >
                  {!item.available || item.quantity > 0 && <CardHeader
                    subheader={item.quantity + 'pcs'}
                    sx={{
                      backgroundColor: '#ff817c',
                      width: 'max-content',
                      color: '#000',
                      height: '10px',
                      borderTopRightRadius: '20px',
                      borderBottomLeftRadius: '20px'
                    }}
                  />}
                  <CardMedia
                    component='img'
                    height='140'
                    image={item.image}
                    alt='green iguana'
                    onClick={() => navigate('/detail/' + item._id)}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='div'
                      color='primary'
                      sx={{ textAlign: 'center' }}
                    >
                      {item.price + ' XAF'}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ textAlign: 'center' }}
                    >
                      {item.size}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}
                    >
                      {item.name}
                    </Typography>
                    <Button
                      variant='contained'
                      fullWidth
                      disabled={!item.available}
                      sx={{
                        borderRadius: 0,
                        marginTop: '10px',
                        backgroundColor: '#c40027'
                      }}
                      onClick={() => addProduct(item)}
                    >
                      {item.available ? 'Add to Cart' : 'En Rupture'}
                    </Button>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ textAlign: 'center', mt: '5px' }}
                    >
                      {'Vendu(e)s ' + item.quantitySell + ' fois'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>}
    </Container>
  );
};

export default Arrivals;
