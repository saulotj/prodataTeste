import './App.css';
import prodataLogo from './assets/images/prodataLogo.jfif';
import whatsLogo from './assets/images/WhatsApp-icone-3.png';
import React, {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const prodata = {
    contatoSup: 'https://api.whatsapp.com/send?phone=19998957231',
    homePage: '',
    youtube: '',
  };

  const handleChange =(event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let spl = inputValue.toUpperCase();
    let url = 'https://spl.sisdel.com.br/api/etiqueta/'
    window.open(url+spl);
  }

  return (
    <div className="flex column center">
      <img src={prodataLogo} alt="Logo da empresa Prodata"></img>
      <h1>Busca Etiqueta Só Peça Legal</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleChange}></input>
        <button type="submit">Verificar Etiqueta</button>
      </form>
        <h2>Sobre a Etiqueta SPL:</h2>
        <p>A etiqueta Só Peça Legal (SPL) é uma etiqueta fornecida para te auxiliar no controle interno de seu estoque, 
          auxiliando na localização e identificação da peça</p>
          <div className='whatsapp-button'>
              <a href={prodata.contatoSup} target="_blank">
              <img src={whatsLogo}></img></a>
          </div>

          
    </div>
  );
}

export default App;
