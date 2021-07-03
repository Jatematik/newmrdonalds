// import React from 'react';
// import styled from 'styled-components';
// import { Overlay } from '../Modal/ModalItem';
// import { OrderTitle, Total, TotalPrice } from './Order';
// import { ButtonCheckout } from '../Style/ButtonCheckout';
// import { projection } from '../Functions/secondaryFunction';
// import { TotalPriceItems } from '../Functions/secondaryFunction';
// import { formatCurrency } from '../Functions/secondaryFunction';

// const rulesData = {
//     name: ['name'],
//     price: ['price'],
//     count: ['count'],
//     topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'Нет добавок'],
//     choice: ['choice', item => item ? item : 'нету выбора']
// }

// const sendOrder = () => {
//     const newOrder = orders.map(projection(rulesData));
//     dataBase.ref('orders').push().set({
//         nameClient: authentication.displayName,
//         email: authentication.email,
//         order: newOrder
//     });
//     setOrders([]);
// }

// export const OrderConfirm = () => {
//     const database = firebaseDatabase();
// }