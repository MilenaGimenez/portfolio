import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'

import './Contact.sass';

const Contact = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center'}}  className="bg-contact" >    
        <Card style={{ width: '100%', height: '500px', margin: '2%'}}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            image="https://s1.eestatic.com/2020/10/26/como/flores-hogar-decoracion_531208808_163604389_1706x1280.jpg"
            title="Contemplative Reptile"
          />
        </Card>

        <Card style={{ width: '100%', height: '100px', margin: '2%'}}>
          <CardContent> 
            <Typography gutterBottom variant="h5" component="h2">
                ¡Hola! Por aquí me puedes contactar.
            </Typography>    
            <Typography variant="body3" color="textSecondary" component="p">
              Desarrolladora Web Front-end y Diseñadora Gráfica
            </Typography>   
          </CardContent>          
        </Card>
      </div>
    );
};

export default Contact;