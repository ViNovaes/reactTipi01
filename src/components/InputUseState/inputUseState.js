import { useState } from "react";

function InputUseState() {

    const [login, setlogin] = useState();
    const [senha, setsenha] = useState();
    const [vlogin, setvlogin] = useState();


    function verificaLogin(v) {
        v.preventDefault();
        /* console.log("O login é", login); */
        if(login.toLowerCase() === 'vic' && senha === '123'){
            setvlogin(true);
        } else{
            if(login.toLowerCase() !== 'vic' && senha === '123'){
                setvlogin('Login incorreto!');
            }else if (login.toLowerCase() === 'vic' && senha !== '123'){
                setvlogin('Senha incorreta!')
            } else {
                setvlogin('Login e senha incorretos!');
            }
        }
    }

    return (
        <form>
            <p>{login}</p>
            <label>Login: </label>
            <input type="email" value={login} placeholder="Digite seu email aqui" onChange={((v) => setlogin(v.target.value))} />
            <br />
            <label>Senha: </label>
            <input type="password" value={senha} placeholder="Digite sua senha aqui" onChange={((v) => setsenha(v.target.value))}/>
            <br />
            <button onClick={verificaLogin}>Entrar</button>
            {
                vlogin === true
                    ? <p>Login efetuado com sucesso!</p>
                    : ''
                    
            }

            {
                vlogin !== true ?
                    <p>{vlogin}</p>
                    : ''
            }
        </form>
    )
}

export default InputUseState;