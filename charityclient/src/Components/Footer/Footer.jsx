import React from 'react'
import './Footer.css';
import logoimg from '../../Asserts/footer logo.png'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer>
      <div className='footerbox'>
        <img src={logoimg} alt="logo" />

         <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/about"}>About</Link></li>
                  <li><Link  to={"/charity"}>Charity</Link></li>
                  <li><Link to={"/contact"}>Contact</Link></li>
                  </ul>

        
        

        <div className="socialicons">
          <ul>
            <li><link to={"/"}><span><i class="bi bi-facebook"></i></span></link></li>
            <li><link to={"/"}><span><i class="bi bi-instagram"></i></span></link></li>
            <li><link to={"/"}><span><i class="bi bi-twitter"></i></span></link></li>
            <li><link to={"/"}><span><i class="bi bi-youtube"></i></span></link></li>
            <li><link to={"/"}><span><i class="bi bi-pinterest"></i></span></link></li>
          </ul>
        </div>
        <p>© 2026 Gowthaman Foundation. All Rights Reserved. Design by Gowthaman</p>

      </div>
    </footer>
  )
};
