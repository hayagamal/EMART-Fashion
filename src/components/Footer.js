import React, {useState} from 'react'
import {BsPlusLg} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {GrTwitter, GrFacebookOption,GrLinkedin,GrGithub} from 'react-icons/gr'
function Footer() {
    const [showList1, setList1] = useState(true)
    const [showList2, setList2] = useState(true)
    const [showList3, setList3] = useState(true)
  return (
    <footer className='footer'>
        <div className='footer-section-1'>
        <div className='mini'>
        <h4>🌟SHOP</h4>
       
        <BsPlusLg className='plus' onClick={()=> setList1(!showList1)}/>
        </div>
           {showList1 &&
           <ul className='list'>
           
           <li>Women</li>
           <li>Men</li>
           <li>Accessories</li>
           <li>Sale</li>
       </ul>} 
        </div>
        <div className='footer-section-2'>
        <div className='mini'>
        <h4>🌟 INFO</h4>
        <BsPlusLg className='plus' onClick={()=> setList2(!showList2)}/>
        </div>
           {showList2 &&
           <ul className='list'>
           
           <li>Returns & Refund Policy</li>
           <li>Terms & Conditions</li>
           <li>Contact Us</li>
           <li>FAQS</li>
       </ul>} 
        </div>
        <div className='footer-section-3'>
        <div className='mini'>
        <h4>🌟CONTENT</h4>
        <BsPlusLg className='plus' onClick={()=> setList3(!showList3)}/>
        </div>
           {showList3 &&
           <ul className='list'>
           
           <li>Login/Signup</li>
           <li>Cart</li>
       </ul>} 
        </div>
        <div className='logo footer-section-4'>
        <motion.p className="log" style={{'font-size': '70px'}} whileHover={{scale: 1.3}} ><span>E</span>mart</motion.p>
        <div  className='media'>
                    <div><GrTwitter /></div>
                    <div><GrGithub/> </div>
                    <div><GrLinkedin/></div>
                    <div><GrFacebookOption/></div>
                </div>
      </div>
    </footer>
  )
}

export default Footer