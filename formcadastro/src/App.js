import React from 'react';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '../src/assets/resset.css'
import '../src/assets/App.css';
import "@fontsource/roboto";
import ValidacoesCadastro from './contexts/validacoesCadastro';
import { validarCPF, validarSenha } from "../src/models/cadastro"

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha}} >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}
function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
