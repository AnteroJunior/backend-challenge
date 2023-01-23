import React, { useState, useContext } from 'react';
import { AppContext } from '../../context';

const Login = () => {

    const { setUser, userType, setUserType, setLogged } = useContext(AppContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:3000/${userType}/login/${formData.email}-${formData.password}`)
            .then(res => res.json())
            .then(res => { setUser(res); setLogged(true) });
    }

    const handleFormChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    }

    return (
        <main className='main-login'>
            <form onSubmit={handleFormSubmit} className='shadow shadow-lg px-5 py-3 rounded'>
                <h1 className='text-center pb-4'>Clínica Maceió</h1>
                <div>
                    <label className='form-label'>Email</label>
                    <input className='form-control' type='email' name='email' value={formData.email} onChange={handleFormChange} />
                </div>
                <div className='pb-3'>
                    <label className='form-label'>Senha</label>
                    <input type='password' name='password' className='form-control' value={formData.password} onChange={handleFormChange} />
                </div>
                <button className='btn btn-primary mb-3'>Login</button>
                {userType === 'profissionais' ?
                    <p style={{ cursor: 'pointer' }} className='text-primary text-decoration-underline' onClick={() => setUserType('clientes')}>Sou cliente</p> :
                    <p style={{ cursor: 'pointer' }} className='text-primary text-decoration-underline' onClick={() => setUserType('profissionais')}>Sou profissional</p>}
            </form>
        </main>
    )
}

export { Login };