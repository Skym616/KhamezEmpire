import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useBadgeContext } from '../contexts/BadgeContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const badgeContext = useBadgeContext();
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [total, setTotal] = useState(0);
  const [number, setNumber] = useState('');


  useEffect(() => {
    getCart();
  }, [refresh]);

  const getCart = () => {
    const tab = [...new Set(JSON.parse(window.sessionStorage.getItem('pannier')))];
    if (tab) {
      setProducts([...tab]);
    }
    let total = 0;
    tab.forEach((i) => {
      total += (i.qt * i.price);
    });
    setTotal(total);
  };

  const removeProduct = (id) => {
    const tab = [...new Set(JSON.parse(window.sessionStorage.getItem('pannier')))];
    const t = [...tab.filter(item => item._id !== id)];
    window.sessionStorage.setItem('pannier', JSON.stringify(t));
    setProducts([...t]);
    badgeContext.update();
    setRefresh(!refresh);
  };

  const increment = (item) => {
    if (item.quantity > item.qt) {
      item.qt += 1;
      window.sessionStorage.setItem('pannier', JSON.stringify(products));
      setRefresh(!refresh);
    }
  };

  const decrement = (item) => {
    if (item.qt > 1) {
      item.qt -= 1;
    }
    window.sessionStorage.setItem('pannier', JSON.stringify(products));
    setRefresh(!refresh);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ordered = {
      ordered: JSON.stringify(products),
      total: total,
      number: number,
      dateOrdered: new Date().toLocaleString(),
      status: ''
    };
    axios.post('https://khamez-empire-api.herokuapp.com/ordered', ordered).then((res) => {
      const orderedObj = { ...ordered, numberBill: res.data.message };
      window.setTimeout(() => {
        window.sessionStorage.setItem('pdf', JSON.stringify(orderedObj));
        navigate('/ordered');
      }, 2000);
    }).catch((error) => {
      return null;
    });
  };
  console.log(number);
  return (<Container sx={{ backgroundColor: '#000a2b', pb: '20px', w: '100%', pt: { lg: '150px' } }}>
    {products.length < 1 ?
      <Typography variant='h2' component='div' sx={{ textAlign: 'center', color: '#ffffff' }}>PANNIER
        VIDE</Typography> :
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item lg={12} sm={12} md={12} xs={12}
                key={item._id}
                sx={{
                  ml: 'auto',
                  mr: 'auto',
                  w: '100%',
                  borderBottom: { xs: '1px solid #f9f9f9' },
                  paddingBottom: { xs: '10px' }
                }}>
            <Box
              sx={{
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: { xs: 'column', lg: 'row' },
                position: 'relative'
              }}>
              <div>
                <Avatar src={item.image} sx={{ width: 76, height: 76 }} alt={item.name} />
              </div>
              <div>
                <Typography component='span'> {item.name}</Typography>
              </div>
              <div>
                <Typography variant='h6'
                            sx={{
                              fontSize: '15px'
                            }}>subTotal {' ' + item.price * item.qt + ' XAF'}</Typography>
              </div>
              <div>
                <div>
                  <CancelIcon color='primary'
                              sx={{ cursor: 'pointer', position: { xs: 'absolute', top: 0, left: 100 } }}
                              onClick={() => removeProduct(item._id)} />
                </div>
                <Button variant='outlined' sx={{ w: '20px' }} onClick={() => decrement(item)}> - </Button>
                <Typography component='span' sx={{ margin: '0 10px' }}>{item.qt}</Typography>
                <Button variant='outlined' sx={{ w: '20px' }} onClick={() => increment(item)}> + </Button>
              </div>
            </Box>
          </Grid>))}
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Box sx={{ ml: { lg: '30%', md: '20%' }, mr: { lg: '30%', md: '20%' }, w: '100%' }} component='div'>
            <Card elevation={1} sx={{ backgroundColor: '#ffffff', p: 1, w: '100%' }}>
              <CardContent>
                < Typography variant='h5' sx={{ color: '#000', mb: 2 }}>Total {' ' + total + ' XAF'}</Typography>
                <TextField
                  variant='outlined' label='Numéro Telephone'
                  helperText='Numéro whatsapp de préférence avec indicatif pays'
                  placeholder='Ex:+237655625506'
                  sx={{ color: '#ffffff', display: 'block', mb: '20px' }}
                  onChange={handleChange}
                  value={number}
                  fullWidth
                />
                <Button variant='contained' disabled={number.length < 9}
                        sx={{ color: '#ffffff', ml: { lg: '25%', xs: '15%', md: '30%', sm: '25%' } }}
                        onClick={handleSubmit}> Passer la commande </Button>
                <Typography variant='body2' sx={{ textAlign: 'center', mt: '10px' }}>
                  ** Votre numéro de téléphone servira
                  à vous
                  contactez pour le règlement de
                  certaines modalités
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>}
  </Container>);
};

export default ShoppingCart;