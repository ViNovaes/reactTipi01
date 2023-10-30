import { useState } from "react";
import axios from 'axios';

function ConsumindoApi() {
    const [buscaCep, setBuscaCep] = useState();
    const [data, setData] = useState([]);

    const api = `https://viacep.com.br/ws/${buscaCep}/json`;

    function buscaApi(e) {
        e.preventDefault();
        axios.get(api)
            .then(response => {
                if(response.data.erro === true){
                    setData([])
                } else{
                    setData(response.data)
                }
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <form>
                <label>Pesquisar cep: </label>
                <br/>
                <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)} />
                <br/>
                <button onClick={buscaApi}>Pesquisar</button>
            </form>
            <p>{data.length === 0 ? 'Digite um cep para buscar': `${data.logradouro} ${data.b00airro} ${data.localidade} - ${data.uf}`}</p>
        </>
    )
}

export default ConsumindoApi;