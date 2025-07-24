import { useState } from 'react';
import { getCurrencyName } from '../../tools/currency.tool';
import deviseInfo from './../../data/devise.json';

export default function CurrencyConvert() {

    const [currencyFrom, setCurrencyFrom] = useState('EUR');
    const [valueFrom, setValueFrom] = useState('');
    const [currencyTo, setCurrencyTo] = useState('CAD');
    const [valueTo, setValueTo] = useState('');


    return (
        <form>
            <div>
                <input type="text" value={valueFrom} onChange={(e) => setValueFrom(e.target.value)} />
                <select value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)}>
                    {deviseInfo.map((elem, idx) => (
                        <option key={idx} value={elem.currency}>{getCurrencyName(elem.currency)}</option>
                    ))}
                </select>
            </div>
            <div>
                <input type="text" value={valueTo} readOnly />
                <select value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)}>
                    {deviseInfo.map((elem, idx) => (
                        <option key={idx} value={elem.currency}>{getCurrencyName(elem.currency)}</option>
                    ))}
                </select>
            </div>
        </form>
    );
}