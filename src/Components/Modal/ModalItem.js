import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { TotalPriceItems } from '../Functions/secondaryFunction';
import { useChoices } from '../Hooks/useChoices';
import { Choices } from './Choices';
import { Context } from '../Functions/context';

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 600px;
    background-color: #fff;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
`;

const BurgerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    line-height: 53px;
    font-family: Pacifico, sans-serif;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BlockInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    padding: 0 20px;
`;

export const ModalItem = () => {

    const {openItem: {openItem, setOpenItem}} = useContext(Context);
    const {orders: {orders, setOrders}} = useContext(Context);

    const counter = useCount(openItem);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <BlockInfo>
                    <BurgerInfo>
                        <span>{openItem.name}</span>
                        <span>{formatCurrency(openItem.price)}</span>
                    </BurgerInfo>
                    <CountItem {...counter} openItem={openItem} order={order}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem} order={order}/>}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(TotalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick={isEdit ? editOrder : addToOrder} disabled={order.choices && !order.choice}>
                        {isEdit ? 'Редактировать' : 'Добавить'}
                    </ButtonCheckout>
                </BlockInfo>
            </Modal>
        </Overlay>
    )
}