import { Cliente } from "./cliente";

export abstract class Conta {
    protected numero: number;
    protected saldo: number; 
    protected cliente : Cliente;

    constructor(numero: number, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    abstract sacar(valor: number): boolean;

    depositar(valor: number): void {
    this.saldo += valor;

    console.log(`Depósito de R$ ${valor} realizado.`);
    console.log(`Saldo atual: R$ ${this.saldo}`);
}

    transferir(valor: number, contaDestino: Conta): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            console.log(`Transferência de R$ ${valor} realizada para a conta ${contaDestino.numero}.`);
            return true;
        } else {
            console.log("Saldo insuficiente para realizar a transferência.");
            return false;
        }
    }
}
