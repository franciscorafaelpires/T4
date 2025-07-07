
import { useState, useEffect } from 'react';
import ClientList from './ClientList';
import ClientForm from './ClientForm';

import type { Client } from '../../types';

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const response = await fetch('http://localhost:32831/cliente/clientes');
    const data = await response.json();
    setClients(data);
  };

  const handleSave = async (client: Client) => {
    if (editingClient) {
      await fetch(`http://localhost:32831/cliente/atualizar`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
      });
    } else {
      await fetch('http://localhost:32831/cliente/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
      });
    }
    fetchClients();
    setEditingClient(null);
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:32831/cliente/excluir`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchClients();
  };

  return (
    <div>
      <ClientForm client={editingClient} onSave={handleSave} />
      <ClientList clients={clients} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Clients;
