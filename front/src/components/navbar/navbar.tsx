import "./navbar.css"



export const Navbar = () => {

    

    return (
        <div className="Navbar">
            
            

            <header className="header">

                <div className="Phovery">
                    <div className="Name">
                        <p style={{fontFamily: "petite-formal-script", fontSize: "2.4rem"}}>
                            Phovery
                        </p>
                    </div>
                    <div className="Version">
                        <p>0.0.1</p>
                    </div>
                </div>
                <div className="btsContainer" >
                   
                    
                    
                    <div
                        className="button"
                        style={{padding: "0 15px 0 15px"}}
                        onClick={async () => {
                            
                        }}
                    >
                        Inicio
                    </div>
                
                
                    <div className="button" >
                        Cerrar sesión
                    </div>
                    
                </div>
            </header>
        
        </div>
    )

}