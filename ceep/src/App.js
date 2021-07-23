import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

import "../src/assets/resset.css";
import "../src/assets/app.css";

class App extends Component {
  constructor(){
    super();
    this.categorias =  new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} 
          categorias={this.categorias} />
          <ListaDeNotas
            notas={this.notas} 
            apagarNota={this.notas.apagarNotas.bind(this.notas)} />
        </main>
      </section>
    );
  }
}

export default App;
