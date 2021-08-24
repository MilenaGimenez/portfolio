import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Card, CardContent, CardMedia} from '@material-ui/core'

import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>            
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
