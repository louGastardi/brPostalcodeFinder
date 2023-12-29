import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [endereco, setEndereco] = useState({});
  const [cepUser, setCepUser] = useState('');
  const [erro, setErro] = useState('');
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {
    if (endereco.estado) {
      setAllResults((prevResults) => [...prevResults, endereco.cep]);
    }
  }, [endereco]);

  async function handleChange(e) {
    const cepDigitado = e.target.value;
    setCepUser(cepDigitado);

    if (cepDigitado.length !== 8) {
      setEndereco({});
      setErro('');
    }

    if (cepDigitado && cepDigitado.length === 8) {
      try {
        const res = await axios.get(`https://viacep.com.br/ws/${cepDigitado}/json/`);
        const data = res.data;

        if (!data || data.hasOwnProperty('erro')) {
          setErro('Esse endereço não foi encontrado!');
          console.log(erro);
        } else {
          setEndereco({
            cep: data.cep,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
          setErro('');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Ache o endereço com seu CEP</h3>
        <input type="text" placeholder="digite o cep" onChange={handleChange} />
        {erro ? (
          <p style={{ backgroundColor: 'red', padding: '0.2em' }}>{erro}</p>
        ) : (
          <div>
            {endereco.cep ? <p>CEP: {endereco.cep}</p> : null}
            {endereco.rua ? <p>Rua: {endereco.rua}</p> : null}
            {endereco.bairro ? <p>Bairro: {endereco.bairro} </p> : null}
            {endereco.cidade ? <p>Cidade: {endereco.cidade} </p> : null}
            {endereco.estado ? <p>Estado: {endereco.estado} </p> : null}
          </div>
        )}
        <h3>CEPs procurados anteriormente:</h3>
        {allResults.map((result, i) => (
          <div key={i}>
            <p>CEP: {result}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
