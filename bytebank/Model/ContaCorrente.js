import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;

  //#saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  set saldo(valorSaldo) {
    this._saldo = valorSaldo;
  }

  get saldo(){ 
      return this._saldo;
  }

  constructor(agencia){
    this.agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
  };

  sacar(valor){
    if(this.saldo >= valor){
      this.saldo -= valor;
      return valor;
    }
  }

  depositar(valor){
    if(valor <= 0) return;
    this.saldo += valor;
  }

  transferir(valor, cliente){
    if(cliente instanceof Cliente){
      const valorSacado = this.sacar(valor);
      cliente.depositar(valorSacado);
    }
  }
}