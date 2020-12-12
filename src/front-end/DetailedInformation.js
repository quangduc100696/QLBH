import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";
import React from "react";
import FullDialog from "../customDialog/FullDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailedInformation = (props) => {
  const { opendialog, handleClose } = props;
  return (
    <Dialog
      keepMounted
      TransitionComponent={Transition}
      open={opendialog}
      onClose={handleClose}
    >
      <DialogTitle>
        <Typography variant="h5" align="center">
          CHI TIẾT THÔNG TIN BẢO HIỂM
        </Typography>
      </DialogTitle>
      <Table style={{ padding: 10 }}>
        <TableBody>
          <TableRow>
            <TableCell> Mã số thẻ bảo hiểm</TableCell>
            <TableCell align="center"> 123456789</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Họ và tên</TableCell>
            <TableCell align="center"> Nguyễn Văn A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Giới tính</TableCell>
            <TableCell align="center"> Nam</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ngày sinh</TableCell>
            <TableCell align="center"> 07/02/2001</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tên công ty</TableCell>
            <TableCell align="center">Cty CP Phần Mềm Luvina</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nơi đăng ký KCB</TableCell>
            <TableCell align="center">Bệnh Viên E</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Kỳ hạn thẻ bảo hiểm</TableCell>
            <TableCell align="center">01/01/2016 đến 31/12/2016</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Grid container justify="space-around">
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Quay lại
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Cập Nhật
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Xóa
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default DetailedInformation;
