import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Milena Gimenez
                </Typography>
                <Button color="inherit"><a href="#prueba">Sobre mí</a></Button> {/* que salga estudios y descargar cv */}
                <Button color="inherit">Diseño Gráfico</Button>
                <Button color="inherit">Frontend</Button>
                <Button color="inherit">Contacto</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;