import React, { useContext } from 'react';
import { AppContext } from '../../context';
import './Header.css';

const Header = ({ nome, email, total }) => {

    const { setLogged, setUser } = useContext(AppContext);

    return (
        <div className='header'>
            <div className='container info'>
                <div className='nameAndEmail'>
                    <h3>{nome}</h3>
                    <h5>{email}</h5>
                    <p style={{cursor: 'pointer'}} onClick={() => {setLogged(false); setUser({})}}>Sair</p>
                </div>
                <div><strong>Total: R$ {(total).toFixed(2)}</strong></div>
            </div>
        </div>
    )
}

export { Header };