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

    abstract sacar(valor: number): void;
    
    depositar(valor: number): void { 
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado.`);
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }

}

