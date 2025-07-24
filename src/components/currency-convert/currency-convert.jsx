import { useState } from 'react';
import { getCurrencyName } from '../../tools/currency.tool';
import deviseInfo from './../../data/devise.json';

export default function CurrencyConvert() {

    const [currencyFrom, setCurrencyFrom] = useState(deviseInfo[0].value.toString());
    const [valueFrom, setValueFrom] = useState('');
    const [currencyTo, setCurrencyTo] = useState(deviseInfo[1].value.toString());
    const [valueTo, setValueTo] = useState('');

    const handleValueFrom = (e) => {
        computeConvert(e.target.value, currencyFrom, currencyTo);
    };

    const handleCurrencyFrom = (event) => {

        if (event.target.name === "select-from") {
            setCurrencyFrom(event.target.value);
            computeConvert(valueFrom, event.target.value, currencyTo);
        }
        else {
            setCurrencyTo(event.target.value);
            computeConvert(valueFrom, currencyFrom, event.target.value);
        }

    };

    const computeConvert = (valueUser, convertFrom, convertTo) => {
        if(valueUser === '') {
            setValueFrom('');
            setValueTo('');
            return;
        }

        const valueFinal = (parseFloat(valueUser) / convertFrom) * convertTo;
        setValueFrom(valueUser);
        setValueTo(valueFinal);
    };

    return (
        <form>
            <div>
                <input type="text" value={valueFrom} onChange={handleValueFrom} />
                <select value={currencyFrom} onChange={handleCurrencyFrom} name="select-from">
                    {deviseInfo.map((elem, idx) => (
                        <option key={idx} value={elem.value}>{getCurrencyName(elem.currency)}</option>
                    ))}
                </select>
            </div>
            <div>
                <input type="text" value={valueTo} readOnly />
                <select value={currencyTo} onChange={handleCurrencyFrom} name="select-to">
                    {deviseInfo.map((elem, idx) => (
                        <option key={idx} value={elem.value}>{getCurrencyName(elem.currency)}</option>
                    ))}
                </select>
            </div>
        </form>
    );
}