
import {Card, CardContent, CardMedia} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import './Welcome.sass';

const Welcome = () => {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center'}} className="bg" >    
        <Card style={{ width: '100%', height: '500px', margin: '2%', boxShadow: 'none'}}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            image="https://freedesignfile.com/upload/2019/08/Business-woman-at-the-desk-is-working-on-the-laptop-computer-vector.jpg"
            title="Contemplative Reptile"
          />
        </Card>

        <Card style={{ width: '100%', height: '20%', margin: '2%', boxShadow: 'none', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', padding: '0 1.5%'}}>
          <CardContent> 
            <Typography gutterBottom variant="h4" className="title-card">
                ¡Hola! soy Milena Gimenez
            </Typography>    
            <Typography variant="h5" className="subtitle-card">
              Desarrolladora Web Front-end y Diseñadora Gráfica
            </Typography>   
          </CardContent>          
        </Card>
      </div>
    );
};

export default Welcome;