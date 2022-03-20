import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../components/PDFfile';
import { Button, Container, Typography } from '@mui/material';

const PDFRender = () => {

  return (
    <Container sx={{ pt: { lg: '150px', xs: '50px' }, ml: 'auto', mr: 'auto', pb: '20px' }}>
      <Typography variant='h6' sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        mb: '20px',
        textTransform: 'uppercase',
        color: '#00c853'
      }}>
        Votre Commande a été transmis avec Succès.
        Vous serez contacté dans de bref délais pour le règlement des derniers Détails.
        Merci de Patienter !
      </Typography>
      <Typography variant='body2'
                  sx={{ textAlign: 'center', mb: '20px', textTransform: 'uppercase' }}>
        Cliquez ci dessous pour télécharger votre Commande.
      </Typography>
      <PDFDownloadLink document={<MyDocument />} fileName='ordered'>
        {({ loading }) => loading ?
          <Button variant='contained' disabled sx={{ marginLeft: { xs: '30%', lg: '40%' } }}> Loading ...</Button> :
          <Button variant='contained' sx={{ marginLeft: { xs: '30%', lg: '40%' } }}> Download</Button>}
      </PDFDownloadLink>
    </Container>);
};

export default PDFRender;