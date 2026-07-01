import { Cliente } from "./cliente.js";

export abstract class Conta {
    protected numero: number;
    protected saldo: number;
    protected cliente: Cliente;
    private historico: string[];

    constructor(numero: number, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
        this.historico = [];
    }

    abstract sacar(valor: number): boolean;

    depositar(valor: number): void {
        this.saldo += valor;

        this.adicionarHistorico(`Depósito de R$ ${valor}`);

        console.log(`Depósito de R$ ${valor} realizado.`);
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }

    transferir(valor: number, contaDestino: Conta): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);

            this.adicionarHistorico(`Transferência enviada de R$ ${valor}`);
            contaDestino.adicionarHistorico(`Transferência recebida de R$ ${valor}`);

            console.log(`Transferência de R$ ${valor} realizada para a conta ${contaDestino.numero}.`);
            return true;
        }

        console.log("Transferência não realizada.");
        return false;
    }

    protected adicionarHistorico(mensagem: string): void {
        this.historico.push(mensagem);
    }

    mostrarHistorico(): void {
        console.log(`Histórico da conta ${this.numero}:`);

        for (const item of this.historico) {
            console.log(item);
        }
    }

    public getNumero(): number {
    return this.numero;
    }

    public getSaldo(): number {
    return this.saldo;
    }

    public getCliente(): Cliente {
    return this.cliente;
    }
}