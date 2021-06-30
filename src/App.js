import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/Navbar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
  apiKey: "AIzaSyD1w4EfNDCNTu1POhRtJBEOSSNvqqA2n0s",
  authDomain: "newmrdonalds.firebaseapp.com",
  databaseURL: 'https://newmrdonalds-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: "newmrdonalds",
  storageBucket: "newmrdonalds.appspot.com",
  messagingSenderId: "480078402872",
  appId: "1:480078402872:web:4a23b487ed86d8157a1dcd"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth} firebaseDatabase={firebase.database}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
