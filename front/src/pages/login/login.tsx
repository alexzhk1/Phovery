import './login.css'
import Button from 'react-bootstrap/Button'
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResgisterForm } from './form';

export const Login = () => {

    let navigate = useNavigate();

    const resgisterUsers = [
        {"alex": "pass123"},
        {"diane": "pass456"},
        {"wero": "pass789"}
    ]
    const [user, setUser] = useState("");
    const [pass,setPass] = useState("");
    const [showForm, setShowForm] = useState(false);
    
    function verifyUser (user, pass) {
        if (user != "" && pass != "") {
            let r = resgisterUsers.map(item => 
                Object.entries(item).flat()
            )
            r.forEach(item => {
                console.log(item, user, pass)
                if (item[0] == user && item[1] == pass) {
                    navigate("/storage")
                } else{
                    alert("Usuario no encontrado")
                }
            })
        } else {
            alert("Por favor ingresa un usuario valido!");
        }
    }

    useEffect(() => {
        verifyUser
    }, [user,pass,verifyUser, showForm])

    return(
        <div className="main-container">

            { showForm ?
                <ResgisterForm/>
            :
                <>
                    <div className="login-container">
                        <div className='icon-container'>
                            <FaUserCircle/>
                        </div>
                        <div className='title'>
                            <p style={{color: "var(--bronw)"}}>Bienvenido a&nbsp;</p>
                            <p style={{fontFamily: "petite-formal-script", fontSize: "2rem", color: "var(--bronw)"}}>
                                Phovery
                            </p>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder='Usuario'
                                value={user}
                                onChange={ e => setUser(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <input 
                                type="password"
                                placeholder='Contraseña'
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                            />
                        </div>
                        <Button
                            style={{margin: "2%", paddingLeft: "25px", paddingRight: "25px"}}
                            variant="outline-primary btn-lg"
                            onClick={() => {
                                verifyUser(user,pass)
                            }}
                            
                        >
                            Ingresar
                        </Button>
                        
                    </div>
                    <div className='register-form-container'>
                        <p>
                            ¿No tienes una cuenta? Registrate 
                            <a 
                                style={{color: "var(--blue)"}} 
                                onClick={() =>{
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