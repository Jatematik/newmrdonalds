import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { projection } from '../Functions/secondaryFunction';
import { TotalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { OrderTitle } from '../Style/OrderTitle';
import { Total } from '../Style/Total';
import { TotalPrice } from '../Style/TotalPrice';

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'Нет добавок'],
    choice: ['choice', item => item ? item : 'нету выбора']
}

const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder
    });
}

export const OrderConfirm = ({dataBase}) => {

    const {orders: {orders, setOrders}} = useContext(Context);
    const {auth: {authentication}} = useContext(Context);
    const {orderConfirm: {setOpenOrderConfirm}} = useContext(Context);

    const total = orders.reduce((result, order) => {
        return TotalPriceItems(order) + result;
    }, 0);

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenOrderConfirm(false);
        }
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => {
                    sendOrder(dataBase, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>
                    Подтвердить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    )

}