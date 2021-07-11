export class Cliente{
  get cpf(){
    return this._cpf;
  }

  get rg(){
    return this._rg;
  }

  constructor (nome, cpf, rg)
  {
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
    this._senha;
  }

  autenticar(senha){
    return senha == this._senha;
  }
  
  cadastrarSenha(senha){
    this._senha = senha;
  }
}