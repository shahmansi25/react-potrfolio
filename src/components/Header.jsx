import React from 'react';
import { BsLinkedin , BsGithub , BsFillTelephoneFill } from 'react-icons/bs';


const Header = () => {
  return (
      <nav>
          <NavContent></NavContent>
    </nav>
  )
}

const NavContent = () => {
    return (
        <>
            <h2>Mansi</h2>
            <div>
            <a href="#home">Home</a>
            <a  href="#work">Work</a>
            <a  href="#experience">Experience</a>
            <a  href="#services">Services</a>
            <a  href="#testimonial">Testimonials</a>
            </div>
            <a href="mailto:mansishah1697@gmail.com">
                <button>Email</button>
            </a>
            <div> 
                <a target="_blank" href="https://www.linkedin.com/in/mansi-shah-489333148/"><BsLinkedin /> </a>   
                <a href="tel:0433216574"> <BsFillTelephoneFill /> </a>

            </div>
           
        </>
        
    )
}
export default Header