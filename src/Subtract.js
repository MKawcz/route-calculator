import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Subtract() {
    let [searchParams] = useSearchParams();
    let x = parseFloat(searchParams.get('x'));
    let y = parseFloat(searchParams.get('y'));
    let result = x - y;

    return <div>{`Wynik odejmowania: ${result}`}</div>
}

export default Subtract;