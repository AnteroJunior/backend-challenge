import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context';
import { Header } from '../Header/Header';
import './Cliente.css';

const Cliente = () => {

    const { user } = useContext(AppContext);
    console.log(user)
    const [listaServicos, setListaServicos] = useState([]);
    const [selectedService, setSelectedService] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Serviço solicitado.');
        await fetch(`http://127.0.0.1:3000/atendimentos/${user.id}-${selectedService}`, {
            method: 'POST',
        });

    }

    useEffect(() => {
        fetch('http://127.0.0.1:3000/servicos')
            .then(res => res.json())
            .then(res => setListaServicos(res));
    }, []);

    return (
        <main>
            <Header nome={user.nome} email={user.email} total={user.total_gasto} />
            <form className='mt-5' onSubmit={handleSubmit}>
                {listaServicos && listaServicos.map(servico => (
                        <div className="form-check border-top servico__div py-3" key={servico.id}>
                            <div>
                                <input className="form-check-input" value={servico.id} type="radio" name="servico" id={`servico${servico.id}`} onChange={() => setSelectedService(servico.id)} />
                                <label className="form-check-label" htmlFor={`servico${servico.id}`}>{servico.nome}</label>
                            </div>
                            <div>{servico.tempo} minutos</div>
                            <div>R$ {(servico.valor).toFixed(2)}</div>
                        </div>
                    ))
                }
                <button className='btn btn-primary mt-3'>Solicitar atendimento</button>
            </form>
        </main>
    )
}

export { Cliente };