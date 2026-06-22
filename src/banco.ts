import { Conta } from './conta.js';

export class Banco {
    private contas: Conta[];

    constructor() {
        this.contas = [];
    }
}