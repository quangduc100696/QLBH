import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useState } from "react";
import FullDialog from "../components/customDialog/FullDialog";
import Add from "./Add";
import "./Style.css";

const Search = () => {
  const [compony, setCompony] = useState(0);
  const [name, setName] = useState();
  const [Code, setCode] = useState();
  const [Placeregister, setPlaceregister] = useState();
  const [opendialog, setOpendialog] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpend = () => {
    // setOpendialog(true)
    setOpenAdd(true);
  };

  const handleClose = () => {
    // setOpendialog(false);
    setOpenAdd(false);
  };

  return (
    <Paper style={{ padding: 15 }}>
      <Grid container>
        <Grid item style={{ marginTop: "7px", marginRight: 10 }}>
          <Typography variant="h6" align="left">
            Tên công ty
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            select
            margin="dense"
            value={compony}
            style={{ float: "left", width: 100 }}
            onChange={(e) => setCompony(e.target.value)}
          >
            <MenuItem value="0">Luvina</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Grid container xs={6} className="typo">
        <Grid item xs={4}>
          <Typography variant="h6" align="left">
            Thông tin tìm kiếm
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={6}>
        <Grid item xs={3}>
          <Typography variant="subtitle1" style={{ lineHeight: "52px" }}>
            Tên người sử dụng
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container xs={6}>
        <Grid item xs={3}>
          <Typography variant="subtitle1" style={{ lineHeight: "52px" }}>
            Mã số thẻ bảo hiểm
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            size="small"
            value={Code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container xs={6}>
        <Grid item xs={3}>
          <Typography variant="subtitle1" style={{ lineHeight: "52px" }}>
            Nơi đăng ký
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            size="small"
            value={Placeregister}
            onChange={(e) => setPlaceregister(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container justify="space-between" className="typo">
        <Grid item>
          <Button variant="contained" color="primary">
            Đăng ký
          </Button>
        </Grid>
        <Grid item>
          {" "}
          <Button onClick={handleOpend}>opend</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Export CSV
          </Button>
        </Grid>
      </Grid>
      <Table className="typo">
        <TableHead>
          <TableRow>
            <TableCell>Tên người sử dụng</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Ngày sinh</TableCell>
            <TableCell>Mã số thẻ bảo hiểm</TableCell>
            <TableCell>Kỳ hạn</TableCell>
            <TableCell>Nới đăng ký KCB</TableCell>
            <TableCell>Chi tiết</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Grid container justify="flex-end" className="typo">
        <Grid item>
          <Pagination count={10} defaultPage={1} siblingCount={0} />
        </Grid>
      </Grid>
      {/* <DetailedInformation opendialog = {opendialog} handleClose={handleClose}/> */}
      <FullDialog
        open={openAdd}
        onClose={handleClose}
        title="THÊM MỚI THÔNG TIN THẺ BẢO HIỂM"
      >
        <Add />
      </FullDialog>
    </Paper>
  );
};

export default Search;
