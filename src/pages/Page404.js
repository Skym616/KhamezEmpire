import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';

const Page404 = () => {
  useEffect(() => {
    console.log(window.location);
  }, []);
  return (
    <Container>
      <Box sx={{ marin: 'auto', textAlign: 'center', w: '100%', backgroundColor: '#000a2b' }}>
        <Typography variant='h3' paragraph sx={{ color: '#ffffff' }}>
          Désolé, page introuvable !
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Désolé, nous ne retrouvons pas cette page. Vous avez peut être confondu d'URL ?
        </Typography>
      </Box>
    </Container>
  );
};

export default Page404;