import { useState } from "react";

export default function PalindromePhrase() {

    const [text, setText] = useState('');
    const [result, setResult] = useState(null);

    const handlePalindromeSubmit = (event) => {
        event.preventDefault();

        const textToCheck = text.toLowerCase().normalize('NFD').replaceAll(/[^a-z]+/g, '');
        let isPalindrome = true;

        for (let i = 0; isPalindrome && i < textToCheck.length / 2; i++) {
            if (textToCheck[i] !== textToCheck[textToCheck.length - 1 - i]) {
                isPalindrome = false;
            }
        }

        setText('');
        setResult({
            value: text.trim(),
            isPalindrome
        });
    };

    return (
        <>
            <form onSubmit={handlePalindromeSubmit}>
                <label htmlFor="input-val">Phrase à vérifier : </label>
                <input id="input-val" type="text"
                    value={text}
                    onChange={e => setText(e.target.value)} />
                <button type="submit">Vérification...</button>
            </form>
            {result === null ? (
                <p>Aucune phrase 😭</p>
            ) : (
                <p>Le phrase « {result.value} » {result.isPalindrome ? 'est' : 'n\'est pas'} un palindrome !</p>
            )}
        </>
    );
}