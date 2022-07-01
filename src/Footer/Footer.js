import '../../src/Footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return(
        <div className="container-fluid">
            <h2 className='tit_pie'>Visitanos en nuestro Local o en nuestras redes:</h2>
                    
            <div>
                <p>Azcuenaga 1200 - CABA</p>
                <FacebookIcon />
                <p> gaema.saludable</p>
          
                <InstagramIcon />
                <p> @gaema.ok</p>
            </div>
           
        </div>
    )
}

export default Footer