import DateFnsUtils from "@date-io/date-fns";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useState } from "react";
import './Style.css'

const Add = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newCompany, setNewCompany] = useState(false);
  const [company, setCompany] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = () => {
    setNewCompany(!newCompany);
  };

  const handleCompany = () => {
    setCompany(!company);
  };
  return (
    <Paper style={{ width: "100%", height: "100%" }} className="typo">
      <Grid container justify="center">
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography variant="subtitle1" className="title"  align="center">
            Mã số thẻ bảo hiểm
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="dense"
            variant="outlined"
            fullWidth
            // onChange={}
          />
        </Grid>
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography variant="subtitle1" align="center">
            Họ và tên
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="dense"
            variant="outlined"
            fullWidth
            // onChange={}
          />
        </Grid>
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography variant="subtitle1" align="center">
            Giới tính
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="dense"
            variant="outlined"
            fullWidth
            select
            // onChange={}
          />
        </Grid>
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography variant="subtitle1" align="center">
            Ngày sinh
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography variant="subtitle1" align="center">
            Công ty
          </Typography>
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={company}
                  onChange={handleCompany}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Công ty đã có"
            />
          </Grid>
          {company && (
            <Grid item xs={12}>
              <TextField
                margin="dense"
                variant="outlined"
                fullWidth
                select
                // onChange={}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={newCompany}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Đăng ký theo công ty mới"
            />
          </Grid>
          {newCompany && (
            <>
            <Grid item xs={3}>
              <Typography align="center" style={{marginTop:'auto', marginBottom:'auto'}}>
                Tên công ty
              </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  // onChange={}
                />
              </Grid>
              <Grid item xs={3} style={{marginTop:'auto', marginBottom:'auto'}}>
                <Typography align="center">
                  Địa chỉ
                </Typography>
              </Grid>
              <Grid item xs={9} style={{marginTop:'auto', marginBottom:'auto'}}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  // onChange={}
                />
              </Grid>
              <Grid item xs={3} style={{marginTop:'auto', marginBottom:'auto'}}>
                <Typography align="center">
                  Email
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  // onChange={}
                />
              </Grid>
              <Grid item xs={3} style={{marginTop:'auto', marginBottom:'auto'}}>
                <Typography align="center">
                  Số điện thoại
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  // onChange={}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography align="center">
            Nơi đăng ký KCB
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <TextField
            margin="dense"
            variant="outlined"
            fullWidth
            // onChange={}
          />
        </Grid>
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography align="center" >
            Ngày bắt đầu thẻ BH
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={4} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Typography align="center" >
            Ngày kết thúc thẻ BH
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Add;
