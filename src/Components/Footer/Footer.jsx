import React from 'react'
import "./footer.css";
import img from  '../../images/localisation-img.png';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";;
function Footer() {
  return (
    <div id="footer">
        <div className='social-media'>
            <h2>social media</h2>
            <ul>
                <li><a href="https://facebook.com/#"><FaFacebookF color='#4267B2' size='2rem'/></a></li>
                <li><a href="https://instagram.com/"><FaInstagram color='#E1306C' size='2rem'/></a></li>
                <li><a href="https://instagram.com/"><FaTwitter color='#1DA1F2' size='2rem'/></a></li>
                <li><a href="https://instagram.com/"><FaWhatsapp color='#25D366' size='2rem'/></a></li>
            </ul>
            <h2>localisation</h2>
            <a href="https://goo.gl/maps/yDQ6zprpz3yaLmHQ8">
                <img src={img} alt="coffe loaclisation"/>
            </a>

            <p>&copy;all copyright reserve to <a href="https://squadev.netlify.app/">squadev</a></p>
        </div>
    </div>
  )
}

export default Footer