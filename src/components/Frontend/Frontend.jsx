import {Card, CardContent, CardMedia, Typography, CardActionArea, Button, CardActions} from '@material-ui/core'

const Frontend = () => {  
  return (
    <div id="frontend">
      <h1 style={{textAlign: 'center', backgroundColor: '#b036cf', margin: 0, paddingTop: '3rem', color: 'white'}}>Mis trabajos de desarrollo web</h1>
      <div style={{ backgroundColor: '#b036cf', alignItems: 'center', display: 'flex', alignItems: 'center',  flexWrap: 'wrap'}} > 
      <Button href="https://milenagimenez.github.io/movies-project/" target="blank">  
        <Card style={{maxWidth: 345, margin: '3rem'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Display de Movie Finder"
              height="200"
              image="https://raw.githubusercontent.com/MilenaGimenez/movies-project/master/src/assets/screencapture.png"
              title="Movie Finder"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              🎬 Movie Finder
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Busca películas y encuentra un listado con las más recientes y populares. Podrás obtener toda la info sobre la peli y ver el trailer.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Button> 
      <Button href="https://milenagimenez.github.io/to-do-list/" target="blank"> 
        <Card style={{maxWidth: 345, margin: '3rem'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Display de Todo List"
              height="200"
              image="https://github.com/MilenaGimenez/to-do-list/blob/master/public/assets/screen-animated.gif?raw=true"
              title="Todo List"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ✅ Todo List
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            ¡Organiza tus tareas con Todo List App! Guarda todas las tareas que tengas que hacer. Puedes marcarlas como realizadas y eliminarlas.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Button>
      <Button href="https://milenagimenez.github.io/ahorradas/" target="blank">
        <Card style={{maxWidth: 345, margin: '3rem'}}>      
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Display de Ahorradas"
              height="200"
              image="https://github.com/MilenaGimenez/ahorradas/blob/master/img/screen.png?raw=true"
              title="Ahorradas"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              💰 Ahorradas
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Organiza tu dinero y comienza a ahorrar. Ingresa tus gastos y ganancias y visualiza tus balances y registros totales.
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
      </Button>
      <Button href="https://milenagimenez.github.io/generador-de-memes/" target="blank">
        <Card style={{maxWidth: 345, margin: '3rem'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Display del generador de memes"
              height="200"
              image="https://raw.githubusercontent.com/MilenaGimenez/generador-de-memes/master/assets/img/screen.png"
              title="Generador de memes"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                🤣 Generador de memes
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Crea y personaliza memes de manera sencilla, intuitiva y online. Basta con poner la url de la imagen que quieras editar y... ¡a divertirse!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Button>
      <Button href="https://milenagimenez.github.io/buscador-de-comics/" target="blank">
        <Card style={{maxWidth: 345, margin: '3rem'}}>      
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Display de Buscador de comics"
              height="200"
              image="https://github.com/MilenaGimenez/buscador-de-comics/blob/master/assets/screen-all-page.png?raw=true"
              title="Buscador de comics"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              🦸‍♀️ Buscador de comics
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            ¡Busca tus cómics favoritos de Marvel! Conocé más acerca de los cómics y los personajes que participen en él.
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
      </Button>
      <Button href="https://milenagimenez.github.io/dress-up-belle-game/" target="blank">
        <Card style={{maxWidth: 345, margin: '3rem'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Display del juego Dress up Belle"
              height="200"
              image="https://raw.githubusercontent.com/MilenaGimenez/dress-up-belle-game/master/assets/screen-belle.png"
              title="Dress up Belle game"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              🎮 Dress up Belle game
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Entra en el mundo de Bella y ayudala a vestir eligiendo entre diversos atuendos y peinados. ¡Solo arrastra y listo!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Button> 
      
      </div>
    </div>
      
  );
};

export default Frontend;
//image="/static/images/cards/contemplative-reptile.jpg"

{/* <div style={{border: '2px solid orange', display: 'flex', margin: '30px', alignItems: 'center', width: '100%', flexWrap: 'wrap'}}> */}