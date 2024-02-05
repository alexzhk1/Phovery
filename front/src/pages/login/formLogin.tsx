import { useState, useEffect } from "react";
import "./formLogin.css"
import Button from 'react-bootstrap/Button'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
    let navigate = useNavigate();

    const resgisterUsers = [
        {"alex": "pass123"},
        {"diane": "pass456"},
        {"wero": "pass789"}
    ]
    const [user, setUser] = useState("");
    const [pass,setPass] = useState("");
    
    
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
    }, [user,pass,verifyUser])
    return (
        <>
            <div className="login-container">
                <div className='icon-container'>
                    <FaUserCircle />
                </div>
                <div className='title'>
                    <p style={{ color: "var(--bronw)" }}>Bienvenido a&nbsp;</p>
                    <p style={{ fontFamily: "petite-formal-script", fontSize: "2rem", color: "var(--bronw)" }}>
                        Phovery
                    </p>
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder='Usuario'
                        value={user}
                        onChange={e => setUser(e.target.value)}
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
                    style={{ margin: "2%", paddingLeft: "25px", paddingRight: "25px" }}
                    variant="outline-primary btn-lg"
                    onClick={() => {
                        verifyUser(user, pass)
                    }}
                >
                    Ingresar
                </Button>
            </div>
            
        </>
    )
}