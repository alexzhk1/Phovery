import './footer.css'

import { useEffect, useRef, useState } from 'react'

export const Footer = () => {

	// Capturando el body
	const root = window.document.body;

	const [footerHeight, setHeigth] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {

		setHeigth(ref.current?.clientHeight || 0);
		
		root.style.setProperty('--footer-size', footerHeight + "px");

	}, [footerHeight]);

	return (

		<>
			
			<footer className="footer" ref={ref}>
				
				<div className={"section first"}>
					<p>Terminos y condiciones</p>
					<div className="icons">
						<a href="https://www.facebook.com/">
							{/* <i className={`${styles.fa-brands} ${styles.fa-facebook-f}`}></i> */}
							{/* <img src= { icon_facebook } alt ='Facebook2' className={ styles.iconxd }/> */}
						</a>
						<a href="https://twitter.com/">
							{/* <i className="fa-brands fa-twitter"></i> */}
							{/* <img src= { icon_twitter } alt ='Facebook' className={ styles.iconxd }/> */}
						</a>
						<a href="https://www.youtube.com/">
							{/* <i className={fa-brands fa-youtube}></i> */}
							{/* <img src= { icon_youTube } alt ='Facebook' className={ styles.iconxd}/> */}
						</a>
					</div>
				</div>
				<div className="sectionsecond">
					<a className="styles.text-footer-center" href="tel:55 XXXX XXXX"><p> tel:55 XXXX XXXX</p></a>
				</div>

				
				<div className="section third">
					<a
						
					>
						<p>Consulta nuestro aviso de privacidad</p>
					</a>
				</div>
				
			</footer>
		</>
	)
}



export default Footer;
