export interface Client {
  id?: number;
  nome: string;
  nomeSocial: string;
  endereco: {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;
  };
  telefones: {
    numero: string;
    ddd: string;
  }[];
}