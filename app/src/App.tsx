import React from 'react';
import './App.css';

import Counter from './components/Counter';
import CustomHeader, { addNumber } from './components/CustomHeader';


const App = () => {
  const addedNumber = addNumber(1, 2);
  const [changeNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = ( newNumber: number ) => {
    setChangedNumber(newNumber);
  }

  const liczbaMniejszaOdZera = (liczba: number) => {
    if (liczba < 0){
      return (<div>liczba jest mniejsza od 0</div>)
    }
  }

  return (
    <div className="App">
      <CustomHeader>
        {/* <Counter onNumberChange={(newNumber)=> { console.log(newNumber)}}/> */}
        <Counter onNumberChange={handleNumberChange}/>
        {
          changeNumber > 0 && (<div> Liczba jest wieszka od 0</div>)
        }
        {liczbaMniejszaOdZera(changeNumber)}
      </CustomHeader>   

    </div>
  );
}

export default App;