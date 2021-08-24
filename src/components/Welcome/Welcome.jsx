
import {Card, CardContent, CardMedia} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

const Welcome = () => {
    return (
        <div style={{ backgroundColor: '#368acf', display: 'flex', height: '100vh', alignItems: 'center'}} >    
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
                ¡Hola! soy Milena Gimenez
            </Typography>    
            <Typography variant="body3" color="textSecondary" component="p">
              Desarrolladora Web Front-end y Diseñadora Gráfica
            </Typography>   
          </CardContent>          
        </Card>
      </div>
    );
};

export default Welcome;