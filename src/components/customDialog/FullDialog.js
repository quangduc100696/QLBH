import {
  AppBar,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const FullDialog = (props) => {
  const { title, children, onClose, open } = props;
  return (
    <div style={{ width: 500, backgroundColor: "green" }}>
      <Dialog
        open={open}
        fullScreen
        TransitionComponent={Transition}
        style={{ marginLeft: 260 }}
      >
        <AppBar position="fixed" style={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              tooltip="Đóng"
            >
              <Close fontSize="small" />
            </IconButton>
            <Typography variant="h5" style={{flexGrow:1, textAlign:"center"}}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default FullDialog;
