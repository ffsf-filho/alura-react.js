import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }){
  const [ nome, setNome ] = useState("");
  const [ sobrenome, setSobrenome ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ promocoes, setPromocoes ] = useState(true);
  const [ novidades, setNovidades ] = useState(false);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={event =>{
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }
      }}
    >
      <TextField type="text" id="nome" name="nome"
        value={nome}
        onChange={event => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        label="Nome" 
        variant="outlined" 
        margin="normal" 
        fullWidth />
      <TextField type="text" id="sobrenome" name="sobrenome"
        value={sobrenome}
        onChange={event => {
          setSobrenome(event.target.value);
        }} 
        label="Sobrenome" variant="outlined" margin="normal" fullWidth />
      <TextField type="text" id="cpf" name="cpf"
        value={cpf}
        onChange={event => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}        
        label="CPF" variant="outlined" margin="normal" fullWidth />
      <FormControlLabel label="Promoções" control={
        <Switch
          checked={promocoes}
          onChange={event => {
            setPromocoes(event.target.checked);
          }}
          name="promocoes"
          color="primary"
        />
      } />
      <FormControlLabel label="Novidades" control={
        <Switch
          checked={novidades}
          onChange={event => {
            setNovidades(event.target.checked);
          }}
          name="novidades"
          color="primary"
        />      
      } />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  );
}

export default DadosPessoais;