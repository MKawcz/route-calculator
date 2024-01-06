import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Add() {
    let [searchParams] = useSearchParams();
    let x = parseFloat(searchParams.get('x'));
    let y = parseFloat(searchParams.get('y'));
    let result = x + y;

    return <div>{`Wynik dodawania: ${result}`}</div>
}

export default Add;