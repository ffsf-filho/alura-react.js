import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}){
  const [ nome, setNome ] = useState("");
  const [ sobrenome, setSobrenome ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ promocoes, setPromocoes ] = useState(true);
  const [ novidades, setNovidades ] = useState(false);
  const [ erros, setErros] = useState({cpf:{valido: true, texto: ""}});

  return (
    <form onSubmit={event =>{
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
      }}
    >
      <TextField type="text" id="nome"
        value={nome}
        onChange={event => {
          setNome(event.target.value);
        }}
        label="Nome" 
        variant="outlined" 
        margin="normal" 
        fullWidth />
      <TextField type="text" id="sobrenome"
        value={sobrenome}
        onChange={event => {
          setSobrenome(event.target.value);
        }} 
        label="Sobrenome" variant="outlined" margin="normal" fullWidth />
      <TextField type="text" id="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={event => {
          setCpf(event.target.value);
        }}
        onBlur={event => {
            const ehvalido = validarCPF(cpf);
          setErros({cpf:ehvalido});
        }}
      label="CPF" variant="outlined" margin="normal" fullWidth />
      <FormControlLabel label="Promoções" control={
        <Switch
          checked={promocoes}
          onChange={event => {
            setPromocoes(event.target.checked);
          }}
          defaultChecked={promocoes}
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
          defaultChecked={novidades}
          name="novidades"
          color="primary"
        />      
      } />
      <Button type="submit" variant="contained" color="primary">Cadastar</Button>
    </form>
  );
}

export default FormularioCadastro;