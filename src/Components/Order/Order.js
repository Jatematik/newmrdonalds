import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { TotalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { OrderTitle } from '../Style/OrderTitle';
import { Total } from '../Style/Total';
import { TotalPrice } from '../Style/TotalPrice';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = () => {
    const {auth: {authentication, logIn}} = useContext(Context);
    const {openItem: {setOpenItem}} = useContext(Context);
    const {orders: {orders, setOrders}} = useContext(Context);
    const {orderConfirm: {setOpenOrderConfirm}} = useContext(Context);

    const deleteItem = (index) => {
        const newOrders = orders.filter((item, i) => index !== i); //либо методом splice
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order) => {
        return TotalPriceItems(order) + result;
    }, 0);

    const totalQuantity = orders.reduce((result, order) => {
        return order.count + result;
    }, 0);

    return (
        <OrderStyled>
        <OrderTitle>
            Ваш заказ
        </OrderTitle>
        <OrderContent>
            {orders.length ? <OrderList>
                {orders.map((order, index) => <OrderListItem 
                    order={order} 
                    deleteItem={deleteItem}
                    key={index}
                    index={index}
                    setOpenItem={setOpenItem}/>)}
            </OrderList> : <EmptyList>Список заказов пуст</EmptyList>}
        </OrderContent>
        <Total>
            <span>Итого</span>
            <span>
                {totalQuantity}
            </span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout onClick={()=>{
            if(authentication) {
                setOpenOrderConfirm(true);
            } else {
                logIn();
            }
        }}>Оформить</ButtonCheckout>
    </OrderStyled>
    )
};