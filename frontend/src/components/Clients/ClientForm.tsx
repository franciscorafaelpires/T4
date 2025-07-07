
import { useState, useEffect } from 'react';
import type { Client } from '../../types';

interface Props {
  client: Client | null;
  onSave: (client: Client) => void;
}

const ClientForm = ({ client, onSave }: Props) => {
  const [formData, setFormData] = useState<Client>({
    nome: '',
    nomeSocial: '',
    endereco: {
      estado: '',
      cidade: '',
      bairro: '',
      rua: '',
      numero: '',
      codigoPostal: '',
      informacoesAdicionais: '',
    },
    telefones: [],
  });

  useEffect(() => {
    if (client) {
      setFormData(client);
    }
  }, [client]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      if (parent === 'endereco') {
        setFormData(prev => ({
          ...prev,
          endereco: { ...prev.endereco, [child]: value },
        }));
      }
    } else if (name === 'nome' || name === 'nomeSocial') {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newTelefones = [...formData.telefones];
    newTelefones[index] = { ...newTelefones[index], [name]: value };
    setFormData(prev => ({ ...prev, telefones: newTelefones }));
  };

  const addPhone = () => {
    setFormData(prev => ({ ...prev, telefones: [...prev.telefones, { numero: '', ddd: '' }] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      nome: '',
      nomeSocial: '',
      endereco: {
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        informacoesAdicionais: '',
      },
      telefones: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm mb-4">
      <h2 className="mb-3">{client ? 'Editar Cliente' : 'Novo Cliente'}</h2>
      <div className="mb-3">
        <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required className="form-control" />
      </div>
      <div className="mb-3">
        <input name="nomeSocial" value={formData.nomeSocial} onChange={handleChange} placeholder="Nome Social" className="form-control" />
      </div>
      <h3 className="mt-4 mb-3">Endereço</h3>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input name="endereco.estado" value={formData.endereco.estado} onChange={handleChange} placeholder="Estado" required className="form-control" />
        </div>
        <div className="col-md-6 mb-3">
          <input name="endereco.cidade" value={formData.endereco.cidade} onChange={handleChange} placeholder="Cidade" required className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input name="endereco.bairro" value={formData.endereco.bairro} onChange={handleChange} placeholder="Bairro" required className="form-control" />
        </div>
        <div className="col-md-6 mb-3">
          <input name="endereco.rua" value={formData.endereco.rua} onChange={handleChange} placeholder="Rua" required className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input name="endereco.numero" value={formData.endereco.numero} onChange={handleChange} placeholder="Número" required className="form-control" />
        </div>
        <div className="col-md-6 mb-3">
          <input name="endereco.codigoPostal" value={formData.endereco.codigoPostal} onChange={handleChange} placeholder="CEP" required className="form-control" />
        </div>
      </div>
      <div className="mb-3">
        <input name="endereco.informacoesAdicionais" value={formData.endereco.informacoesAdicionais} onChange={handleChange} placeholder="Info Adicionais" className="form-control" />
      </div>
      <h3 className="mt-4 mb-3">Telefones</h3>
      {formData.telefones.map((telefone, index) => (
        <div key={index} className="row mb-3">
          <div className="col-md-4">
            <input name="ddd" value={telefone.ddd} onChange={(e) => handlePhoneChange(index, e)} placeholder="DDD" className="form-control" />
          </div>
          <div className="col-md-8">
            <input name="numero" value={telefone.numero} onChange={(e) => handlePhoneChange(index, e)} placeholder="Número" className="form-control" />
          </div>
        </div>
      ))}
      <button type="button" onClick={addPhone} className="btn btn-secondary me-2">Adicionar Telefone</button>
      <button type="submit" className="btn btn-primary">Salvar</button>
    </form>
  );
};

export default ClientForm;
