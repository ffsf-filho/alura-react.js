import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosDoUsuario({ aoEnviar }){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({email, senha});
      }
    }}>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}      
        id="email" name="email" type="email" required
        label="email" 
        variant="outlined" 
        margin="normal" 
        fullWidth />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}  
        onBlur={validarCampos}
        error={!erros.senha.valido}   
        helperText={erros.senha.texto}
        id="senha" name="senha" type="password" required
        label="senha"
        variant="outlined" 
        margin="normal" 
        fullWidth />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  );
}

export default DadosDoUsuario;