import './login.css'
import { useState } from 'react';
import { ResgisterForm } from './form';
import { FormLogin } from './formLogin';

export const Login = () => {

    const [showForm, setShowForm] = useState(false);

    return (
        <div className="main-container">
            {showForm ?
                <ResgisterForm />
                :
                <>
                    <FormLogin />
                    <div className='register-form-container'>
                        <p>
                            ¿No tienes una cuenta? Registrate
                            <a
                                style={{ color: "var(--blue)" }}
                                onClick={() => {
                                    setShowForm(true);
                                }}
                            >
                                aqui
                            </a>
                        </p>
                    </div>
                </>
            }
        </div>
    )
}
