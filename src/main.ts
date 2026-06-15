import {Endereco} from './endereco';
import {Cliente} from './cliente';
import {ContaCorrente} from './conta-corrente';
import {ContaPoupanca} from './conta-poupanca';

const endereco = new Endereco("Rua das Flores", "Recife");
const cliente = new Cliente ("Rafael", endereco); 

const contaCorrente = new ContaCorrente(1001, 1000, cliente);
const contaPoupanca = new ContaPoupanca(2001, 5000, cliente);

contaCorrente.depositar(500);
contaPoupanca.depositar(1000);

contaCorrente.sacar(300);

contaPoupanca.sacar(500);

contaPoupanca.sacar(1500);