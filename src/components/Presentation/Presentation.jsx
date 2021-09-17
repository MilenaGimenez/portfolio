import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import './Presentation.sass';

const Presentation = () => {
    return (
      <div id="presentation" style={{ display: 'flex', height: '100vh', alignItems: 'center', backgroundColor: '#ff9a28'}} >    
      <Card style={{ width: '100%', height: '500px', margin: '2%', boxShadow: 'none'}}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          image="https://media.istockphoto.com/vectors/photo-or-graphic-editor-on-computer-vector-illustration-flat-cartoon-vector-id1158180478?k=6&m=1158180478&s=612x612&w=0&h=9OTPMmYJthh7nendL0CX4k3OWnqB8V1XkPmdqXTlmB8="
          title="Contemplative Reptile"
        />
      </Card>

      <Card style={{ width: '100%', height: '100%', margin: '2%', boxShadow: 'none', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', padding: '0 1.5%'}}>
        <CardContent> 
          <Typography gutterBottom variant="h4" className="title-card-com">
              Sobre mí
          </Typography>    
          <Typography variant="h5" className="subtitle-card-com">
            <p>Tengo 23 años y soy de Córdoba, Argentina.</p>
            <p>Me encanta todo lo relacionado a lo digital y tecnológico.</p>
            <p>Estudié Diseño Gráfico Publicitario en la <a href="https://upc.edu.ar/"><strong>Universidad Provincial de Córdoba.</strong></a></p>
            <p>Continué mis estudios formandome como Desarrolladora Web Frontend en <a href="https://adaitw.org/"><strong>Ada ITW</strong></a>.</p>
            <p>Hoy en día sigo aprendiendo de manera autodidacta para enriquecer mis conocimientos y aprender nuevos saberes tecnológicos!</p>
            

          </Typography>   
        </CardContent>          
      </Card>
     </div>
    );
};

export default Presentation;