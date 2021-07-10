import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente extends ContaCorrente {
  nome;
  _cpf;
  _rg;

  get cpf(){
    return this._cpf;
  }

  get rg(){
    return this._rg;
  }

  constructor (nome, cpf, rg, agencia)
  {
    super(agencia);
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
  }
}