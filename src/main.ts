import { Endereco } from "./endereco.js";
import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./conta-corrente.js";
import { ContaPoupanca } from "./conta-poupanca.js";
import { Conta } from "./conta.js";
import { Banco } from "./banco.js";

const enderecoRafael = new Endereco("Rua das Flores", "Recife");
const clienteRafael = new Cliente("Rafael", enderecoRafael);

const enderecoMaria = new Endereco("Rua Henrique de Lucena", "Recife");
const clienteMaria = new Cliente("Maria", enderecoMaria);

const contaCorrenteRafael = new ContaCorrente(1001, 1000, clienteRafael);
const contaPoupancaRafael = new ContaPoupanca(2001, 5000, clienteRafael);
const contaPoupancaMaria = new ContaPoupanca(2002, 3000, clienteMaria);
const contaCorrenteMaria = new ContaCorrente(1002, 2000, clienteMaria);
const contaPoupancaMaria2 = new ContaPoupanca(2003, 4000, clienteMaria);

const contas: Conta[] = [
    contaCorrenteRafael,
    contaPoupancaRafael,
    contaPoupancaMaria,
    contaCorrenteMaria,
    contaPoupancaMaria2
];

for (const conta of contas) {
    conta.depositar(100);
}

contaCorrenteRafael.depositar(500);
contaPoupancaRafael.depositar(1000);

contaCorrenteRafael.sacar(200);
contaPoupancaRafael.sacar(400);
contaPoupancaRafael.sacar(1400);

contaCorrenteRafael.transferir(300, contaPoupancaRafael);

const banco = new Banco();

for (const conta of contas) {
    banco.adicionarConta(conta);
}

banco.listarContas();

console.log("\n========================");
contaCorrenteRafael.mostrarHistorico();

console.log("\n========================");
contaPoupancaRafael.mostrarHistorico();