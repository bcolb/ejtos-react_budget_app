import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import * as icons from 'react-bootstrap-icons';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    } 
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><TiPlus size='2em' style={{
            color:'white',
            background:'green',
            cursor:'pointer',
        }} onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
        <td><TiMinus size='2em' style={{
            color:'white',
            background:'red',
            cursor:'pointer',
        }}onClick={event=> decreaseAllocation(props.name)}></TiMinus></td>
        <td><TiDelete size='2em' style={{
            color:'white',
            background:'black',
            cursor:'pointer',
        }} onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;