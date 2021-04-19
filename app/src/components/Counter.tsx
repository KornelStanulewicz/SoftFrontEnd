import { equal } from 'node:assert';
import React from 'react';

interface CounterProps {
    initalNumber?: number;
    onNumberChange: (someNumber: number) => void;
}

const Counter:React.FC<CounterProps> = ({ initalNumber, onNumberChange }) => {
    const [counterNumber, setCounterNumber] = React.useState(initalNumber || 0);


    const addNumber = () =>{
        const number = counterNumber + 1;
        setCounterNumber(number);
        // if (onNumberChange) {
        //     onNumberChange(number);
        // } is equal to:
        onNumberChange && onNumberChange(number);

    }

    const decreasenumber = () => {
        const number = counterNumber - 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    return (
        <div>
            <button onClick={addNumber}>+</button>
            {counterNumber}
            <button onClick={decreasenumber}>-</button>
        </div>
    )
}
export default Counter;