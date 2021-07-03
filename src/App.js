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
import { useDB } from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

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
  const dataBase = firebase.database();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  const dbMenu = useDB(dataBase);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu dbMenu={dbMenu}/>
      {openItem.openItem && <ModalItem/>}
      {orderConfirm.openOrderConfirm && 
        <OrderConfirm dataBase={dataBase}/>}
    </Context.Provider>
  );
}

export default App;
