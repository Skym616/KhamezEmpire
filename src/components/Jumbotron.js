import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
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
  fade: true,
};

const Jumbotron = () => {
  return (
    <Slider {...settings}>
      <Card
        elevation={1}
        sx={{
          backgroundImage: 'url(../../assets/image/banner.jpg)',
          marginTop: { lg: '100px', xs: '20px' },
          height: '700px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: 'cover', lg: 'cover' },
          backgroundPosition: 'center center',
        }}
      >
        <Grid
          container
          lg="5"
          xs="12"
          sx={{
            width: { lg: '80%' },
            marginLeft: { lg: '7%' },
            marginRight: { lg: 'auto' },
            marginTop: { lg: '10%' },
            marginTop: { lg: '10%', xs: '35%' },
            padding: '20px'
          }}
        >
          <Typography
            variant={{ xs: 'h4', lg: 'h3' }}
            sx={{
              fontSize: { xs: '30px', lg: '50px', color: '#ffffff' },
              backgroundColor: { xs: 'rgba(0,0,0,0.4)' },
            }}
          >
            Sur{' '}
            <Typography
              variant={{ xs: 'h4', lg: 'h3' }}
              component="span"
              sx={{ color: '#c40027' }}
            >
              Khamez Empire{' '}
            </Typography>
            achetez en gros et/ou en détail et faites vous livrez dans de bref
            délais
          </Typography>
        </Grid>
      </Card>
      <Card
        elevation={1}
        sx={{
          backgroundImage: 'url(../../assets/image/slider_1.jpg)',
          marginTop: { lg: '100px', xs: '20px' },
          height: '700px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: 'cover', lg: 'cover' },
          backgroundPosition: 'center center',
        }}
      >
        <CardContent>
          <Grid
            container
            lg="6"
            xs="12"
            sx={{
              width: { lg: '80%' },
              marginLeft: { lg: '10%' },
              marginRight: { lg: 'auto' },
              marginTop: { lg: '10%', xs: '15%' },
            }}
          >
            <Typography
              variant={{ xs: 'h4', lg: 'h3' }}
              sx={{ fontSize: { xs: '30px', lg: '50px' } }}
            >
              <Typography
                variant={{ xs: 'h4', lg: 'h3' }}
                component="span"
                sx={{ color: '#c40027' }}
              >
                Khamez Empire
              </Typography>{' '}
              est votre plateforme idéale de shooping, ce en vous proposant un
              catalogue varié d'article de qualités présentés dans les moindres
              détails.
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Slider>
  );
};

export default Jumbotron;
