import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#000a2b',
    color: '#ffffff'
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderBottom: '1px solid #ffffff',
    textAlign: 'center',
    fontSize: 10,
    alignItems: 'center'
  },
  sectionTwo: {
    backgroundColor: '#c40027',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '15px',
    color: '#ffffff',
    alignItems: 'end',
    padding: 10
  },
  image: {
    width: 20,
    height: 20,
    margin: 0,
    padding: 0
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fe4c50',
    padding: 5,
    fontSize: 10
  }
});


// Create Document Component
const MyDocument = () => {
  const [products, setProducts] = useState([]);
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleString());
  const [total, setTotal] = useState(0);
  const [numberBill, setNumberbill] = useState('');

  useEffect(() => {
    const pannier = window.sessionStorage.getItem('pdf');
    const pannierObject = JSON.parse(pannier);
    const products = JSON.parse(pannierObject.ordered);
    setProducts(products);
    setNumber(pannierObject.number);
    setTotal(pannierObject.total);
    setDate(pannierObject.dateOrdered);
    setNumberbill(pannierObject.numberBill);
  }, []);

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text>Image</Text>
          <Text>Name</Text>
          <Text>Price</Text>
          <Text>Quantity</Text>
          <Text>SubTotal</Text>
        </View>
        <View>
          {products.map((product) => (
            <View key={product._id} style={styles.section}>
              <Image src={product.image} alt='photo' style={styles.image} />
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
              <Text>{product.qt}</Text>
              <Text>{product.price * product.qt}</Text>
            </View>
          ))}
        </View>
        <View style={styles.sectionTwo}>
          <Text>{'Date et Heure de commande ' + date}</Text>
          <Text>{'Numero de commande ' + numberBill}</Text>
          <Text>{'Numéro de téléphone ' + number}</Text>
          <Text>{'Total ' + total + ' XAF'}</Text>
        </View>
      </Page>
    </Document>);
};

export default MyDocument;