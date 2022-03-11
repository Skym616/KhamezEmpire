import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import PaidIcon from '@mui/icons-material/Paid';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
      <Container
        sx={{ backgroundColor: '#f5f5f5', paddingTop: '5px', width: '100%' }}
      >
        <Grid
          container
          display='flex'
          flexDirection='row'
          sx={{ margin: '20px' }}
        >
          <Box
            sx={{
              backgroundColor: '#000a2b',
              padding: ' 10px 20px',
              width: { xs: '100%', lg: 'max-content' },
              display: 'flex',
              marginRight: '10px',
              marginBottom: '20px'
            }}
          >
            <LocalShippingIcon
              color='primary'
              fontSize='large'
              sx={{
                textAlign: 'center'
              }}
            />
            <Box>
              <Typography
                variant='h5'
                sx={{ textAlign: 'center', color: '#ffffff' }}
              >
                LIVRAISON
              </Typography>
              <Typography
                color='rgb(233, 233, 233)'
                sx={{ textAlign: 'center' }}
              >
                Au frais du client
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: '#000a2b',
              padding: ' 10px 20px',
              width: { xs: '100%', lg: '275px' },
              display: 'flex',
              marginRight: '10px',
              marginBottom: '20px'
            }}
          >
            <SettingsBackupRestoreIcon
              color='primary'
              fontSize='large'
              sx={{
                textAlign: 'center'
              }}
            />
            <Box>
              <Typography
                variant='h5'
                sx={{ textAlign: 'center', color: '#ffffff' }}
              >
                Wholesale//Retail sale
              </Typography>
              <Typography
                color='rgb(233, 233, 233)'
                sx={{ textAlign: 'center' }}
              >
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: '#000a2b',
              padding: ' 10px 20px',
              width: { xs: '100%', lg: 'max-content' },
              display: 'flex',
              marginRight: '10px',
              marginBottom: '20px'
            }}
          >
            <PaidIcon
              color='primary'
              fontSize='large'
              sx={{
                textAlign: 'center'
              }}
            />
            <Box>
              <Typography
                variant='h5'
                sx={{ textAlign: 'center', color: '#ffffff' }}
              >
                PAIEMENT
              </Typography>
              <Typography
                color='rgb(233, 233, 233)'
                sx={{ textAlign: 'center' }}
              >
                Selon l'entendement
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: '#000a2b',
              padding: ' 10px 20px',
              width: { xs: '100%', lg: '275px' },
              display: 'flex',
              marginRight: '10px',
              marginBottom: '20px'
            }}
          >
            <WatchLaterIcon
              color='primary'
              fontSize='large'
              sx={{
                textAlign: 'center'
              }}
            />
            <Box>
              <Typography
                variant='h6'
                sx={{ textAlign: 'center', color: '#ffffff' }}
              >
                HEURE D'OUVERTURE
              </Typography>
              <Typography
                color='rgb(233, 233, 233)'
                sx={{ textAlign: 'center' }}
              >
                Disponible 24h/7j
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: '#c40027',
          height: '100px',
          marginTop: '10px',
          paddingLeft: 'auto',
          paddingRight: 'auto',
          textAlign: 'center'
        }}
      >
        <Typography variant='h6' sx={{ color: '#ffffff', marginTop: '20px' }}>
          NOUS CONTACTER
        </Typography>
        <Button
          variant='outlined'
          startIcon={<WhatsAppIcon />}
          sx={{ backgroundColor: '#ffffff', marginTop: '10px' }}
          onClick={() =>
            window.open(
              'https://wa.me/237697015038?text=Salut Khamez Empire J\'ai une préoccupation qui est la suivante :'
            )
          }
        >
          Whatsapp
        </Button>
        <Typography variant='h6' sx={{ color: '#ffffff', margin: '20px' }}>
          Bringing the world closer
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
