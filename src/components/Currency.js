import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'bootstrap';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const currencyList = [
        { name: "Dollar", symbol: "$"},
        { name: "Pound", symbol: "£"},
        { name: "Euro", symbol: "€"},
        { name: "Ruppee", symbol: "₹"},
    ];
    const changeCurrency = (val) => {
        dispatch ({
            type: "CHG_CURRENCY",
            payload: val,
        });
    };
    return (
        <div className='alert alert-success'
        style={{
            background: "#90ee90",
            color: "#f5f6fa",
        }}>
            <span>
                Currency:
                <select
                id="Currency"
                className="custom-select"
                onChange={(event) => changeCurrency(event.target.value)}
                style={{
                    marginLeft: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                    background: "#90ee90",
                    color: "#f5f6fa",
                }}>
                    {currencyList.map((currency) =>
                            <option value={currency.symbol} name={currency.name} style={{
                                background: "#90ee90",
                                color: "#f5f6fa",
                                cursor: "pointer",
                            }}>{currency.symbol} {currency.name}</option>
                    )}
                </select>
            </span>
        </div>
    );
};
export default Currency;