import './App.css'
import CurrencyConvert from './components/currency-convert/currency-convert';
import PalindromeMot from './components/palindrome/palindrome-v1';
import PalindromePhrase from './components/palindrome/palindrome-v2';
import SuperficieCalculatorV1 from './components/superficie-calculator/superficie-calculator';

function App() {

  return (
    <>
      <h1>Exercice formulaire</h1>

      <h2>Exo 01</h2>
      {/* <PalindromeMot /> */}
      <PalindromePhrase />

      <h2>Exo 02</h2>
      <SuperficieCalculatorV1 />

      <h2>Exo 03</h2>
      <CurrencyConvert />
    </>
  )
}

export default App
