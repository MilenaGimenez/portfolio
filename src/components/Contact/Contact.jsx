import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'

import './Contact.sass';

const Contact = () => {
  const onClick = e => {
    const form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
      }).then(
          response => response.json()
      ).then((html) => {
        // you can put any JS code here
        alert('success')
      });
    });
  }
    
    
    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center',  flexDirection:'column'}}  className="bg-contact" > 
        <h1 style={{textAlign: 'center', margin: '3%', paddingTop: '3rem', color: '#3F51B5'}}>¡Charlemos un rato!</h1>
        <h2 className="subtitle-contact">Completá el formulario y nos estaremos contactando en la brevedad.</h2>
        <Card style={{ width: '100%', margin: '2%'}} className="card-contact">
          <CardContent> 
            {/* <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center', color:'#808080'}}>
              Completá el formulario y nos estaremos contactando en la brevedad.
            </Typography>  */}
            
          <div className="form-box">
            <form action="https://sheetdb.io/api/v1/okeb769r2hlbe" method="POST" id="sheetdb-form" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',  width:'100%'}}>

                <div className="input-box">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="data[nombre]" id="name" required/>                 
                </div>

                <div className="input-box">
                  <label htmlFor="lastname">Apellido</label>
                  <input type="text" name="data[apellido]" id="lastname" required/>
                </div>

                <div className="input-box">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="data[email]" id="email" required/>
                </div>

                <div className="input-box">
                  <label htmlFor="motivo">Motivo</label>
                  <select name="data[motivo]" id="motivo" className="select-contact">
                    <option name="data[motivo]">Consulta</option>
                    <option name="data[motivo]">Diseño Web Frontend</option>
                    <option name="data[motivo]">Diseño Gráfico</option>
                    <option name="data[motivo]">Otros</option>
                  </select>
                </div>
              </div>

              <div className="textarea-box">
                <label htmlFor="message">Mensaje</label>
                <textarea name="data[mensaje]" id="message" placeholder="Escribe tu mensaje aquí" required>
                </textarea>
              </div>

              <button type="submit" onClick={onClick} className="submit-btn">Enviar</button>
            </form>    
          </div>  
          </CardContent>    
        </Card>        
      </div>
    );
};

export default Contact;