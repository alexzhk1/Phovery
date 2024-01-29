import './footer.css'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Footer = () => {

	const root = window.document.body;

	const ref = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState(0);
  	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
		setWidth(ref.current.clientWidth);
		setHeight(ref.current.clientHeight);

		root.style.setProperty('--footer-size', height + "px");
	}, [ref.current?.clientHeight]);
	
	useEffect(() => {
		function handleWindowResize() {
		  setWidth(ref.current.clientWidth);
		  setHeight(ref.current.clientHeight);
		  
		}

		window.addEventListener('resize', handleWindowResize);
	
		return () => {
		  	window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

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
				<div className="section second">
					<a className="text-footer-center" href="tel:55 XXXX XXXX"><p> tel:55 XXXX XXXX</p></a>
				</div>

				
				<div className="section third">
					<a>
						<p>Consulta nuestro aviso de privacidad</p>
					</a>
				</div>
				
			</footer>
		</>
	)
}



export default Footer;
