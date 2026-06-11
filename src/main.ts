import {Endereco} from './endereco';
import {Cliente} from './cliente';

const endereco = new Endereco("Rua das Flores", "São Paulo");
const cliente = new Cliente("Rafael", endereco);

cliente.mostrarDados();