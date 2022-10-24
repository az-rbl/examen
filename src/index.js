import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [Entrada, setEntrada]=useState(0);
  const [Salida, setSalida]=useState(0);
  const [DivisaA, setDivisaA] =useState(1);
  const [DivisaB, setDivisaB] =useState(1);

  const onChange =(e) =>{
    e.preventDefault();
    console.log(Entrada);
    setEntrada(e.target.value);
    setSalida(e.target.value*DivisaB/DivisaA)
  }

  const ChangeDivisaA =(e) =>{
    e.preventDefault();
    console.log(DivisaA);
    setDivisaA(e.target.value);
    setSalida(Entrada*DivisaB/e.target.value);
  }

  const ChangeDivisaB =(e) =>{
    e.preventDefault();
    console.log(DivisaB);
    setDivisaB(e.target.value);
    setSalida(Entrada*e.target.value/DivisaA);
  }

  return(<>
<h1>Calculadora de divisas</h1>

  <label htmlFor='divisas1'>Divisa de entrada</label>
  <select name ="divisas1" id ="divisas1" onChange={ChangeDivisaA}>
  <option value="1">USD</option>
  <option value="19.93">MXN</option>
  <option value="1.01">EUR</option>
  <option value="0.000052">BTC</option>
  <option value="0.00075">ETH</option>
  <option value="16.89">DOGE</option>
  </select>

  <p></p>
  <label htmlFor='Entrada'>Entrada: </label>
  <input type="number" name="Entrada" id ="Entrada" onChange={onChange} ></input>

<p></p>
  <label htmlFor='divisas2'>Divisa de salida</label>
  <select name ="divisas2" id ="divisas2" onChange={ChangeDivisaB}>
  <option value="1">USD</option>
  <option value="19.93">MXN</option>
  <option value="1.01">EUR</option>
  <option value="0.000052">BTC</option>
  <option value="0.00075">ETH</option>
  <option value="16.89">DOGE</option>
  </select>

  
  <p>{Salida}</p>

 
</>);};

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

