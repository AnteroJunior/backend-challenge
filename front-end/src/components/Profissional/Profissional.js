import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import { AppContext } from '../../context';
import { Header } from '../Header/Header';

const Profissional = () => {

    const { user } = useContext(AppContext);
    const [listaAtendimentos, setListaAtendimentos] = useState([]);

    const handleAceitarDemanda = async (item) => {
        alert('Atendimento iniciado');
        const res = await fetch(`http://127.0.0.1:3000/atendimentos/${user.id}-${item.id}`, {
            method: 'PUT'
        });
        const json = await res.json();
        setListaAtendimentos(json);
    }

    const handleFinalizarDemanda = async (item) => {
        alert('Atendimento finalizado!')
        const res = await fetch(`http://127.0.0.1:3000/atendimentos/finalizar/${user.id}-${item.id}`, {
            method: 'PUT'
        });
        const json = await res.json();
        setListaAtendimentos(json);
    }

    const getDifference = (inicio, fim) => {
        const inicioMoment = moment(inicio);
        const fimMoment = moment(fim);
        return fimMoment.diff(inicio, 'minutes');
    }

    useEffect(() => {
        fetch('http://127.0.0.1:3000/atendimentos')
            .then(res => res.json())
            .then(res => setListaAtendimentos(res));
    }, []);

    return (
        <>
            <Header nome={user.nome} email={user.email} total={user.total_comissao} />
            <div className='atendimentos'>
                {
                    listaAtendimentos.length > 0 ? (
                        <table className='table align-middle text-center mx-auto w-75'>
                            <thead>
                                <tr>
                                    <th scope="col">ID cliente</th>
                                    <th scope='col'>ID serviço</th>
                                    <th scope="col">Início</th>
                                    <th scope="col">Final</th>
                                    <th scope='col'>Tempo total</th>
                                    <th scope='col'>Valor total</th>
                                    <th scope='col'>Comissão</th>
                                    <th scope="col">Status</th>
                                    <th >Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaAtendimentos.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.cliente_id}</td>
                                            <td>{item.servico_id}</td>
                                            <td>{`${new Date(item.inicio).getHours()}:${new Date(item.inicio).getMinutes()}:${new Date(item.inicio).getSeconds()}`} </td>
                                            <td>{`${new Date(item.fim).getHours()}:${new Date(item.fim).getMinutes()}:${new Date(item.fim).getSeconds()}`}</td>
                                            <td>{getDifference(item.inicio, item.fim)}</td>
                                            <td></td>
                                            <td>{item.status}</td>
                                            <td>{item.status === 'Aguardando' ? <button className='btn btn-success' onClick={() => handleAceitarDemanda(item)}>Aceitar demanda</button> : <button onClick={() => handleFinalizarDemanda(item)} className='btn btn-danger'>Finalizar demanda</button>}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    ) : <p>Ops! Sem atendimentos.</p>
                }

            </div>
        </>
    )
}

export { Profissional };