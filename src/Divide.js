import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Divide() {
    let [searchParams] = useSearchParams();
    let x = parseFloat(searchParams.get('x'));
    let y = parseFloat(searchParams.get('y'));
    let result = x / y;

    return <div>{`Wynik dzielenia: ${result}`}</div>
}

export default Divide;