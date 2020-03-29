import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Rgister() {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [whatsapp, SetWhatsapp] = useState('');
  const [city, SetCity] = useState('');
  const [uf, SetUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.')
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos de sua ONG.</p>
          <Link className='back-link' to="/">
            <FiArrowLeft size={16} color="#E02041" />
                    Não teho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nomeda ONG"
            name={name}
            onChange={e => SetName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            name={email}
            onChange={e => SetEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            name={whatsapp}
            onChange={e => SetWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              name={city}
              onChange={e => SetCity(e.target.value)}
            />
            <input 
              maxLength='2'
              placeholder="UF"
              style={{ width: 80 }}
              name={uf}
              onChange={e => SetUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}