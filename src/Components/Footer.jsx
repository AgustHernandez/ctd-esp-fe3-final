import "../App.css";

const Footer = () => {
  return (
    <footer className= 'footer'>
        <div>
          <div className= 'icons'>
            <a href="/#"> <img className= 'iconsFooter' src="./images/ico-facebook.png" alt="Facebook"/> </a>
            <a href="/#"> <img className= 'iconsFooter' src="./images/ico-instagram.png" alt="Facebook"/> </a>
            <a href="/#"> <img className= 'iconsFooter' src="./images/ico-tiktok.png" alt="Facebook"/> </a>
            <a href="/#"> <img className= 'iconsFooter' src="./images/ico-whatsapp.png" alt="Facebook"/> </a>
          </div>
          <h3 className='footerTitle'>Desarrollado por Agustina Hernandez</h3>
        </div>
    </footer>
  )
}

export default Footer
