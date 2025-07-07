
import type { Client } from '../../types';

interface Props {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (id: number) => void;
}

const ClientList = ({ clients, onEdit, onDelete }: Props) => {
  return (
    <div className="mt-4">
      <h2 className="mb-3">Lista de Clientes</h2>
      <ul className="list-group">
        {clients.map(client => (
          <li key={client.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{client.nome}</strong> ({client.nomeSocial})
              <br />
              <small>{client.endereco.rua}, {client.endereco.numero}, {client.endereco.bairro}, {client.endereco.cidade} - {client.endereco.estado}</small>
              <br />
              <small>CEP: {client.endereco.codigoPostal}</small>
              {client.endereco.informacoesAdicionais && <small>, {client.endereco.informacoesAdicionais}</small>}
              <br />
              {client.telefones.map((telefone, telIndex) => (
                <small key={telIndex}>({telefone.ddd}) {telefone.numero} </small>
              ))}
            </div>
            <div>
              <button onClick={() => onEdit(client)} className="btn btn-sm btn-warning me-2">Editar</button>
              <button onClick={() => onDelete(client.id!)} className="btn btn-sm btn-danger">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
