import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Car from './cars.png';  
import Magnifier from "react-magnifier";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (open) {
      document.getElementById('background').style.opacity = '0';;
    } else {
      document.getElementById('background').style.opacity = '1';
    }
  }, [open]);

  const styles = {
    width: "50vw",
    height: "auto",
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    zIndex: 1,
    borderRadius: 5,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: 3,
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className="App">
        <div id="background">
          <Button style={{ marginTop: "5rem" }} variant="contained" onClick={handleClickOpen}>
            View Details
          </Button>
        </div>
        {open ? (
          <Box sx={styles}>
            <h2 style={{ marginTop: 0 , textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',color: 'white'}}>Product Details</h2>
            <div style={{ width: '100%', height: '100%' , justifyContent: 'center', display: 'flex' ,alignItems: 'center'}}>
              <Magnifier
                style={{ height: '100%', width: '100%', justifyContent: 'center', display: 'flex' ,alignItems: 'center'}}
                src={Car}
              />
            </div>
          </Box>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}

export default App;
