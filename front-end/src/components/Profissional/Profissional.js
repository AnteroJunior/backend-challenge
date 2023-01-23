import React, { useState, useContext, useEffect, useRef } from 'react';
import moment from 'moment';
import { AppContext } from '../../context';
import { Header } from '../Header/Header';


const Profissional = () => {

    const { user } = useContext(AppContext);
    const [listaAtendimentos, setListaAtendimentos] = useState([]);

    const totalClienteRef = useRef();
    const totalProfissionalRef = useRef();

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

    const calculaTotal = (diferenca, tempoServico, valorServico, tempo_extra) => {
        let total = 0;
        if (diferenca <= tempoServico) {
            total = valorServico;
        } else {
            total = valorServico + ((diferenca - tempoServico) * ((tempo_extra / 100) * valorServico));
        }
        return total;
    }

    const calculaComissao = (porcentagem_comissao, valorTotalCliente) => {
        const total = valorTotalCliente * (porcentagem_comissao / 100);
        return total;
    }

    const calculaValoresTotais = async (item) => {
        const servico = await fetch(`http://127.0.0.1:3000/servicos/${item.servico_id}`);
        const servico_json = await servico.json();
        const diferenca = getDifference(item.inicio, item.fim);

        const totalCliente = calculaTotal(diferenca, servico_json.tempo, servico_json.valor, servico_json.tempo_extra_porc);
        const totalProfissional = calculaComissao(servico_json.comissao_total, totalCliente);

        await fetch(`http://127.0.0.1:3000/atendimentos/checkout/${item.id}-${diferenca}-${totalCliente}-${totalProfissional}`, { method: 'PUT' });
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
                                    <th scope='col'>Tempo total (minutos)</th>
                                    <th scope='col'>Valor total</th>
                                    <th scope='col'>Comissão</th>
                                    <th scope="col">Status</th>
                                    <th >Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaAtendimentos.map(item => {
                                    if (item.status === 'Finalizado') {
                                        calculaValoresTotais(item);
                                    }
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.cliente_id}</td>
                                            <td>{item.servico_id}</td>
                                            <td>{`${new Date(item.inicio).getHours()}:${new Date(item.inicio).getMinutes()}:${new Date(item.inicio).getSeconds()}`} </td>
                                            <td>{`${new Date(item.fim).getHours()}:${new Date(item.fim).getMinutes()}:${new Date(item.fim).getSeconds()}`}</td>
                                            <td>{getDifference(item.inicio, item.fim)}</td>
                                            <td>{item.valor_atendimento && `R$ ${(item.valor_atendimento).toFixed(2)}`}</td>
                                            <td>{item.comissao_atendente && `R$ ${(item.comissao_atendente).toFixed(2)}`}</td>
                                            <td>{item.status}</td>
                                            <td>{item.status === 'Aguardando' ? <p className='btn btn-success' onClick={() => handleAceitarDemanda(item)}>Aceitar</p> : item.status === 'Em atendimento' ? <p className='btn btn-danger' onClick={() => handleFinalizarDemanda(item)}>Finalizar demanda</p> : <p className='btn btn-secondary'>Finalizado</p>}
                                            </td>
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