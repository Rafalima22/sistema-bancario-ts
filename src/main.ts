import {Endereco} from './endereco.js';
import {Cliente} from './cliente.js';
import {ContaCorrente} from './conta-corrente.js';
import {ContaPoupanca} from './conta-poupanca.js';
import {Conta} from './conta.js';
import { Banco } from "./banco.js";

const endereco = new Endereco("Rua das Flores", "Recife");
const cliente = new Cliente ("Rafael", endereco); 
const endereco2 = new Endereco("Rua Henrique de Lucena", "Recife");
const cliente2 = new Cliente ("Maria", endereco2);




const contaCorrente = new ContaCorrente(1001, 1000, cliente);
const contaPoupanca = new ContaPoupanca(2001, 5000, cliente);
const contaPoupanca2 = new ContaPoupanca(2002, 3000, cliente2);
const contaCorrente2 = new ContaCorrente(1002, 2000, cliente2);
const contaPoupanca3 = new ContaPoupanca(2003, 4000, cliente2);

const contas: Conta[] = [
    contaCorrente,
    contaPoupanca,
    contaPoupanca2,
    contaCorrente2,
    contaPoupanca3
];

for (const conta of contas) {
    conta.depositar(100);
}

contaCorrente.depositar(500);
contaPoupanca.depositar(1000);
contaPoupanca2.depositar(2000);
contaCorrente2.depositar(1500);
contaPoupanca3.depositar(2500);

contaCorrente.sacar(200);

contaPoupanca.sacar(400);

contaPoupanca.sacar(1400);

const banco = new Banco();

banco.adicionarConta(contaCorrente);
banco.adicionarConta(contaPoupanca);

banco.listarContas();