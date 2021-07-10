import { Cliente } from "./Model/Cliente.js";
import { ContaCorrente } from "./Model/ContaCorrente.js";

const cliente1 = new Cliente("Francisco", 11122233301, 12345678985, "1001");
cliente1.depositar(10500);

const cliente2 = new Cliente("Cleide", 22233344479,  33344455586, "1001");

let valorTransferencia = 1500;
cliente1.transferir(valorTransferencia, cliente2);
console.log(cliente1);
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);