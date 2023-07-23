import React, { useState } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
const AlertDialog = ({ setInvalid }) => {
    const [open, setOpen] = React.useState(true);



    const handleClose = () => {
        setOpen(false);
        setInvalid(false)
    };

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Enter the details."}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You must enter all the details in the form before accessing further.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
const Form = () => {
    const paperStyle = { padding: 20, height: '70vh', width: "auto", margin: "20px auto" }
    const btnstyle = { margin: '8px 0' }
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [invalid, setInvalid] = useState(false)
    const onChangeName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const onChangePhone = (event) => {
        console.log(event.target.value);
        setPhone(event.target.value);
    }
    const onChangeEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    }
    const onSubmit = () => {
        if (!name || !phone || !email) {
            setInvalid(true)
        }
        else {
            localStorage.setItem("name", name);
            localStorage.setItem("phone", phone);
            localStorage.setItem("email", email);
            handleClick()
        }
    }
    return (
        <>
            {invalid && <AlertDialog setInvalid={setInvalid}></AlertDialog>}
            {!invalid && <Grid style={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={9} sm={6} md={3}>
                    <Paper elevation={10} style={paperStyle}  >
                        <TextField onChange={onChangeName} required fullWidth label="Name" placeholder='Enter Name' />
                        <TextField onChange={onChangePhone} required fullWidth label="Phone number" placeholder='Enter Phone number' />
                        <TextField onChange={onChangeEmail} required fullWidth label="Email" placeholder='Enter Email' />
                        <Button onClick={onSubmit} style={btnstyle} fullWidth variant='contained' color="primary" type="submit">Submit</Button>
                    </Paper>
                </Grid>
            </Grid>}
        </>
    )
}

export default Form