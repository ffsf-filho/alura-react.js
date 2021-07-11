import { Cliente } from "./Model/Cliente.js";
import { ContaCorrente } from "./Model/Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Model/Conta/ContaPoupanca.js";
import { ContaSalario } from "./Model/Conta/ContaSalatio.js";
import { Diretor } from "./Model/Funcionarios/Diretor.js";
import { Gerente } from "./Model/Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemasAutenticacao.js";

//testesContas();
testesFuncionarios();

function testesFuncionarios(){
  const diretor = new Diretor("Rodrigo", 10000, 12345678910)
  const gerente = new Gerente("Flávio", 5000, 23456789123);

  diretor.cadastrarSenha("123456789")
  gerente.cadastrarSenha("123")

  const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
  const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

  const cliente = new Cliente("Rose", 11122233301, 12345678985);
  cliente.cadastrarSenha("456");

  const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

  console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
}

function testesContas(){
  const cliente1 = new Cliente("Francisco", 11122233301, 12345678985);
  const contaCorrenteFrancisco = new ContaCorrente(1001, cliente1);
  contaCorrenteFrancisco.depositar(500);
  contaCorrenteFrancisco.sacar(100);
  
  const contaPoupanaca = new ContaPoupanca(50, cliente1, 1001);
  contaPoupanaca.sacar(10);
  
  const contaSalario = new ContaSalario(cliente1);
  contaSalario.depositar(100);
  contaSalario.sacar(10);

  console.log(contaPoupanaca);
  console.log(contaCorrenteFrancisco);
  console.log(contaSalario);
  console.log("Total de Contas Abertas: " + ContaCorrente.numeroDeContas);
}
