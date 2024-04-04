import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { BsCart3 } from "react-icons/bs";
import Login from "./login";
import Modal from "@mui/material/Modal";
import "./navbar.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 260,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed">
        <Toolbar id="nav">
          <div id="links">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link color="inherit" to="./cart">
                <BsCart3></BsCart3>
              </Link>
            </IconButton>

            <Typography style={{fontSize:'larger'}} component="div" sx={{ flexGrow: 1 }}>
              <Link
                component={Link}
                style={{ color: "white" }}
                onClick={handleOpen}
              >
                Login as manager
              </Link>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Login />
                </Box>
              </Modal>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link color="inherit" component={Button} to="./products">
                Products
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link color="inherit" component={Button} to="./checkout">
                Checkout
              </Link>
            </Typography>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              id="logo"
              style={{ textAlign: "center", marginTop: "0.5em" }}
              src="/images/log.png"
            ></img>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
