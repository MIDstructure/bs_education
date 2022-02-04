import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className="text-center text-lg-start bg-light text-muted">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div>
				<Link to="/" className="me-4 text-reset">
						<i className="fab fa-facebook-f" />
				</Link>
				<Link to="/" className="me-4 text-reset">
						<i className="fab fa-twitter" />
				</Link>
				<Link to="/" className="me-4 text-reset">
						<i className="fab fa-google" />
				</Link>
				<Link to="/" className="me-4 text-reset">
						<i className="fab fa-instagram" />
				</Link>
				<Link to="/" className="me-4 text-reset">
						<i className="fab fa-linkedin" />
				</Link>
				<Link to="/" className="me-4 text-reset">
						<i className="fab fa-github" />
				</Link>
				</div>
			</section>
			<section>
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<i className="fas fa-gem me-3" />Company name
							</h6>
							<p>
								Here you can use rows and columns to organize your footer content. Lorem ipsum
								dolor sit amet, consectetur adipisicing elit.
							</p>
						</div>
						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold mb-4">
								Products
							</h6>
							<p>
								<a href="#!" className="text-reset">Angular</a>
							</p>
							<p>
								<a href="#!" className="text-reset">React</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Vue</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Laravel</a>
							</p>
						</div>
						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold mb-4">
								Useful links
							</h6>
							<p>
								<a href="#!" className="text-reset">Pricing</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Settings</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Orders</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Help</a>
							</p>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								Contact
							</h6>
							<p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
							<p>
								<i className="fas fa-envelope me-3" />
								info@example.com
							</p>
							<p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
							<p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
						</div>
					</div>
				</div>
			</section>
			<div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
				© 2021 Copyright:
				<a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
			</div>
		</footer>
	);
}

export default Footer;


// <div>
// <footer className="footer">
//     <div className="footer-container">
//         <div className="footer-row">
//             <div className="footer-column">
//                 <div className="col-md">
//                     <h2 className="col-md-head">Men</h2>
//                     <ul className="list-unstyled">
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Jeans
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Jumpers
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Leather
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Shorts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Boots
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Watches
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-md">
//                     <h2 className="col-md-head">Women</h2>
//                     <ul className="list-unstyled">
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Dresses
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Jumpsuits
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Shirts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 T-shirts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Swearshirts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Jackets
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Coats
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-md">
//                     <h2 className="col-md-head">Kids</h2>
//                     <ul className="list-unstyled">
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Shirts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 T-shirts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Polos
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Sweaters
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Sweatshirts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Jackets
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className=" md-block">
//                                 Watches
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="footer-column">
//                 <div className="col-md">
//                     <h2 className="col-md-head">Follow Us</h2>
//                     <ul className="footer-social">
//                         <li className="ftco-animate">
//                             <a
//                                 href="#"
//                                 data-toggle="tooltip"
//                                 data-placement="top"
//                                 title="Twitter"
//                             >
//                                 <span className="ion-logo">facebook</span>
//                             </a>
//                         </li>
//                         <li className="ftco-animate">
//                             <a
//                                 href="#"
//                                 data-toggle="tooltip"
//                                 data-placement="top"
//                                 title="Facebook"
//                             >
//                                 <span className="ion-logo">twitter</span>
//                             </a>
//                         </li>
//                         <li className="ftco-animate">
//                             <a
//                                 href="#"
//                                 data-toggle="tooltip"
//                                 data-placement="top"
//                                 title="Instagram"
//                             >
//                                 <span className="ion-logo">telegram</span>
//                             </a>
//                         </li>
//                         <li className="ftco-animate">
//                             <a
//                                 href="#"
//                                 data-toggle="tooltip"
//                                 data-placement="top"
//                                 title="Linkedin"
//                             >
//                                 <span className="ion-logo">whatsapp</span>
//                             </a>
//                         </li>
//                     </ul>

//                     <h2 className="col-md-head">
//                         Subscribe Us
//                     </h2>
//                     <input type="text" />
//                 </div>
//             </div>
//         </div>
//         <div className="footer-row">
//             <div className="footer-column">
//                 <p className="copyright">
//                     Copyright &copy; All rights reserved | This template is made with "mid" by
//                     <a href="https://colorlib.com">
//                         MIDstructure.com
//                     </a>
//                 </p>
//             </div>
//             <div className="footer-column">
//                 <p className="list-unstyled">
//                     <a className="ter-priv" href="#">
//                         Terms &amp; Conditions
//                     </a>
//                     <a className="ter-priv" href="#">
//                         Privacy
//                     </a>
//                 </p>
//             </div>
//         </div>
//     </div>
// </footer>
// </div>