import { getCurrencyName } from '../../tools/currency.tool';
import deviseInfo from './../../data/devise.json';

export default function CurrencyConvert() {

    return (
        <form>
            <div>
                <input type="text" />
                <select name="">
                    { deviseInfo.map((elem, idx) => (
                        <option key={idx} value={elem.currency}>{getCurrencyName(elem.currency)}</option>
                    ))}
                </select>
            </div>
            <div>
                <input type="text" />
                 <select name="">
                    { deviseInfo.map((elem, idx) => (
                        <option key={idx} value={elem.currency}>{getCurrencyName(elem.currency)}</option>
                    ))}
                </select>
            </div>
        </form>
    )
}