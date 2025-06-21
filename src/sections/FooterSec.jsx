import autograph from '../assets/autograph.svg'
export default function FooterSec(){
    return(
        <div className='footer-cont'>
            <p className='footer-text'>All rights brewed & reserved by </p>
            <img className='footer-autograph' src={autograph} alt="" />
            <p className='footer-text' >Dhanush Gopi</p>
        </div>
    )
}