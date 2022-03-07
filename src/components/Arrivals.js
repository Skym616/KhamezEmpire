import {
  Typography,
  Grid,
  Container,
  ButtonGroup,
  Button,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
} from '@mui/material';
import list from '../data/ListArrival';
import '../styles/style.css';

const Arrivals = () => {
  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography
        variant="h4"
        sx={{
          marginRight: 'auto',
          marginLeft: 'auto',
          borderBottom: '3px solid #fe4c50',
          width: 'max-content',
          fontWeight: '500',
        }}
      >
        New Arrivals
      </Typography>
      <Grid container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            size="large"
            sx={{ backgroundColor: '#ffffff' }}
          >
            <Button
              sx={{
                borderColor: 'rgb(233, 233, 233)',
                color: 'black',
                backgroundColor: '#fffff',
              }}
            >
              All
            </Button>
            <Button sx={{ borderColor: 'rgb(233, 233, 233)', color: 'black' }}>
              Shoes
            </Button>
            <Button sx={{ borderColor: 'rgb(233, 233, 233)', color: 'black' }}>
              Clothes
            </Button>
            <Button sx={{ borderColor: 'rgb(233, 233, 233)', color: 'black' }}>
              Accessoires
            </Button>
          </ButtonGroup>
        </Box>
        <Grid item container sx={{ marginTop: '45px' }}>
          {list.map((item) => (
            <Grid item lg={3} xs={12} md={4} sm={6} key={item.image}>
              <Card
                sx={{
                  maxWidth: 221,
                  height: 340,
                  borderRight: '1px solid rgb(233, 233, 233)',
                  borderLeft: '1px solid rgb(233, 233, 233)',
                  borderRadius: 0,
                  cursor: 'pointer',
                  marginBottom: '40px',
                  marginLeft: { xs: 'auto' },
                  marginRight: { xs: 'auto' },
                }}
                elevation={0}
                className="card"
              >
                <CardHeader
                  subheader="20pcs"
                  sx={{
                    backgroundColor: '#ff817c',
                    width: 'max-content',
                    color: '#ffffff',
                    height: '10px',
                    borderTopRightRadius: '20px',
                    borderBottomLeftRadius: '20px'
                  }}
                />
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="primary"
                    sx={{ textAlign: 'center' }}
                  >
                    {item.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center' }}
                  >
                    {item.name}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: 0, marginTop: '10px' ,backgroundColor: '#c40027'}}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Arrivals;
