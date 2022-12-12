import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios'
import { useState} from "react";
import Example from './Example'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom'
const theme = createTheme();
export default function Crud() {
   const[fn,setfn]=useState("");
   const[cn,setcn]=useState("");
   const[en,seten]=useState("");
   const navigate = useNavigate()
   const[FieldName,setFieldName]=useState("");
   const[DataType,setDataType]=useState("");
   const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5050/template/codegenerator",
    {
      "action": "crud",
      "generator": "springboot",
      "subgenerator": "springboot-crud",
      "path": fn,
      "options": {
          "com_name": cn,
          "entities": [
              {
                  "name": en,
                  "fields": [

                  ],
                  "relations": [
                      {
                          "name": "student",
                          "fields": [
                              {
                                  "name": "name",
                                  "datatype": "string"
                              },
                              {
                                  "name": "email",
                                  "datatype": "string"
                              }
                          ]
                      }
                  ]
              }
          ]
      }
    }).then((response) => {
      const { status } = response;
      console.log(status);
      if (status === 200 || 201) {
          alert("Crud Generated Successfully")
          navigate("/");
      }
      else
      {
        alert("Crud Generation Failed")    
      }
    })
    console.log(cn);
    console.log("fn",fn);
    console.log("dt",DataType);
    console.log("efn",FieldName);
    console.log("en",en);
  
  };
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const nexx =()=>
  {
     navigate("/ex");
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              type="string"
              label="Component Name"
              name="Component Name"
              value={cn}
              onChange={(e) => setcn(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="Folder Name"
              label="Folder Name"
              type="string"
              value={fn}
              onChange={(e) => setfn(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="Entity Name"
              label="Entity Name"
              type="string"
              value={en}
              onChange={(e) => seten(e.target.value)}
            />
            <Button variant="contained" onClick={nexx}>Add Field </Button>
             <Dialog fullWidth={fullWidth}
        maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogTitle>Add Field</DialogTitle>
        <DialogContent sx={{ mb: 3, width: '100%' }}>
          <TextField
          sx={{ mb: 3, width: '100%' }}
            autoFocus
            margin="normal"
            fullWidth
            label="Field Name"
            type="string"
            variant="standard"
            value={FieldName}
            onChange={(e) => setFieldName(e.target.value)}
          />
          <InputLabel id="demo-simple-select-label">Data Type</InputLabel>
          <Select
             sx={{ mb: 3, width: '100%' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={DataType}
            label="Data Type"
            name="Data Type"
            onChange={(e) => setDataType(e.target.value)}
           >
            <MenuItem value="string">String</MenuItem>
            <MenuItem value="boolean">Boolean</MenuItem>
            <MenuItem value="int">Integer</MenuItem>
            <MenuItem value="array">Array</MenuItem>
            <MenuItem value="float">Float</MenuItem>
            <MenuItem value="DateTime">DateTime</MenuItem>
            
  </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Field</Button>
        </DialogActions>
      </Dialog> 
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={handleSubmit}>
              Generate
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
