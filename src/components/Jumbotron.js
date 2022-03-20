import { Card, CardContent, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 4000,
  fade: true
};

const Jumbotron = () => {
  return (
    <Slider {...settings}>
      <Card
        elevation={0}
        sx={{
          backgroundImage: 'url(../../assets/image/slider_1.jpg)',
          marginTop: { lg: '100px', xs: '20px' },
          height: '700px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: 'cover', lg: 'cover' },
          backgroundPosition: 'center center'
        }}
      >
        <CardContent>
          <Grid
            container
            lg='6'
            md='6'
            sm='12'
            xs='12'
            sx={{
              width: { lg: '80%', md: '80%', sm: '80%' },
              marginLeft: { lg: '50%', md: '50%', sm: '50%' },
              marginRight: { lg: 'auto', md: 'auto', sm: 'auto' },
              marginTop: { lg: '10%', md: '10%', sm: '10%', xs: '35%' }
            }}
          >
            <Typography
              variant='h3'
              sx={{
                fontSize: { xs: '30px', lg: '50px' },
                fontFamily: 'poppins',
                backgroundColor: { xs: 'rgba(255,255,255,0.4)' }
              }}
            >
              <Typography
                variant='h3'
                component='span'
                sx={{ color: '#c40027', fontSize: { xs: '30px', lg: '50px' } }}
              >
                Khamez Empire
              </Typography>{' '}
              est votre plateforme idéale de shooping. <br />
              "Bringing the world closer"<br />
              Making things easier.
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      <Card
        elevation={0}
        sx={{
          backgroundImage: 'url(../../assets/image/banner.jpg)',
          marginTop: { lg: '100px', xs: '20px' },
          height: '700px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: 'cover', lg: 'cover' },
          backgroundPosition: 'center center'
        }}
      >
        <Grid
          container
          lg='5'
          md='5'
          sm='12'
          xs='12'
          sx={{
            width: { lg: '80%', md: '80%' },
            marginLeft: { lg: '7%', md: '7%' },
            marginRight: { lg: 'auto', md: 'auto' },
            marginTop: { lg: '10%', md: '10%', xs: '35%' },
            padding: '20px'
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '30px', lg: '50px' },
              color: '#000',
              backgroundColor: { xs: 'rgba(255,255,255,0.2)' },
              fontFamily: 'poppins'
            }}
          >
            Sur{' '}
            <Typography
              variant='h3'
              component='span'
              sx={{
                color: '#c40027', fontFamily: 'poppins', fontSize: { xs: '30px', lg: '50px' }
              }}
            >
              Khamez Empire{' '}
            </Typography>
            achetez en gros et/ou en détail et faites vous livrer dans de bref
            délais
          </Typography>
        </Grid>
      </Card>
    </Slider>
  );
};

export default Jumbotron;
