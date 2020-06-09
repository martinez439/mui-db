import React from 'react';
import Button from '@material-ui/core/Button';
import ClippedDrawer from './components/sidebar'
import DashBoard from './components/dashboard';
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <Navbar />
    <ClippedDrawer />
    <DashBoard />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </>
  );
}

export default App;
