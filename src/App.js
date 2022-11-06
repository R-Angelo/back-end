  import React, {useState, useEffect, useTheme} from 'react';
  import { collection, addDoc, getDocs, doc } from 'firebase/firestore'
  import {auth, db} from './firebase-config'

  import PropTypes from 'prop-types';
  import Navbar from "./components/Navbar";
  import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
  import "./styles/index.css";
  import TextField from '@mui/material/TextField';
  import { Avatar, Button, Divider, Grid, IconButton, Paper, TableFooter, Typography } from '@mui/material';
  import { DataGrid } from '@mui/x-data-grid';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import EditIcon from '@mui/icons-material/Edit';
  import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
  import DeleteIcon from '@mui/icons-material/Delete';
  import { border, borderRadius, Container } from '@mui/system';
  import FirstPageIcon from '@mui/icons-material/FirstPage';
  import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
  import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
  import LastPageIcon from '@mui/icons-material/LastPage';
  import TablePagination from '@mui/material/TablePagination';
  import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
  import Box from '@mui/material/Box';
  import Input from '@mui/material/Input';
  import { InputOutlined, Upload } from '@mui/icons-material';
  import Radio from '@mui/material/Radio';
  import RadioGroup from '@mui/material/RadioGroup';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import FormControl from '@mui/material/FormControl';
  import FormLabel from '@mui/material/FormLabel';
  import AddBoxIcon from '@mui/icons-material/AddBox';
  import Modal from '@mui/material/Modal';
  // edit admin
  const containerStyle = {
    
    height: '70vh',
    margin: '100px auto',
  }

  // for Request order
  const columns = [
    { field: 'id', headerName: 'Order ID', width: 80 },
    { field: 'status', headerName: 'Order Status', width: 305 }
  ];

  const rowss = [
    { id: 1, status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing'},
    { id: 2, status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing', status: 'Ongoing'}
  ];

  // for APPROVE order
  const approvedColumnss = [
    { field: 'id', headerName: 'Order ID', width: 80 },
    { field: 'customerName', headerName: 'Customer name', width: 220 },
    { field: 'itemName', headerName: 'Item name', width: 250 },
    { field: 'contactNumber', headerName: 'Contact number', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'totalAmount', headerName: 'Total amount', width: 130 },
    { field: 'transactionType', headerName: 'Transaction type', width: 200 },
    { field: 'approvedDate', headerName: 'Approved date', width: 200 }
  ];

  const approvedRowss = [
    { id: 1, customerName: 'Ongoing', itemName: 'Ongoing', contactNumber: 'Ongoing', quantity: 'Ongoing', totalAmount: 'Ongoing', transactionType: 'Ongoing', approvedDate: 'Ongoing'},
    { id: 2, customerName: 'Ongoing', itemName: 'Ongoing', contactNumber: 'Ongoing', quantity: 'Ongoing', totalAmount: 'Ongoing', transactionType: 'Ongoing', approvedDate: 'Ongoing'},
    { id: 3, customerName: 'Ongoing', itemName: 'Ongoing', contactNumber: 'Ongoing', quantity: 'Ongoing', totalAmount: 'Ongoing', transactionType: 'Ongoing', approvedDate: 'Ongoing'},
    { id: 4, customerName: 'Ongoing', itemName: 'Ongoing', contactNumber: 'Ongoing', quantity: 'Ongoing', totalAmount: 'Ongoing', transactionType: 'Ongoing', approvedDate: 'Ongoing'},
    { id: 5, customerName: 'Ongoing', itemName: 'Ongoing', contactNumber: 'Ongoing', quantity: 'Ongoing', totalAmount: 'Ongoing', transactionType: 'Ongoing', approvedDate: 'Ongoing'},
    { id: 6, customerName: 'Ongoing', itemName: 'Ongoing', contactNumber: 'Ongoing', quantity: 'Ongoing', totalAmount: 'Ongoing', transactionType: 'Ongoing', approvedDate: 'Ongoing'},
    { id: 7, customerName: 'Ongoing', itemName: 'Ongoing', contactNumber: 'Ongoing', quantity: 'Ongoing', totalAmount: 'Ongoing', transactionType: 'Ongoing', approvedDate: 'Ongoing'},
  ];

  // for supplies for supplies for supplies for supplies for supplies for supplies for supplies 

  const editStyle = {
    bgcolor: 'green',
    color: 'white',
    fontSize: 16,
    borderRadius: 8,
    marginRight: 1,
    '&:hover': {
      bgcolor: 'white',
      color: 'green',
    }
  }
  const hideStyle = {
    bgcolor: 'gray',
    color: 'white',
    fontSize: 16,
    borderRadius: 8,
    '&:hover': {
      bgcolor: 'white',
      color: 'gray',
    }
  }
  const deleteStyle = {
    bgcolor: 'red',
    color: 'white',
    fontSize: 16,
    borderRadius: 8,
    '&:hover': {
      bgcolor: 'white',
      color: 'red',
    }
    
  }

  function createData(id, itemName, description, price, quantity, image) {
    return {id, itemName, description, price, quantity, image };
  }

  const data = [
    { id: 1, itemName: 'name', description: 'Ongoing', price: 'Ongoing', quantity: 'Ongoing', image: 'image'},
    { id: 2, itemName: 'Ongoing', description: 'Ongoing', price: 'Ongoing', quantity: 'Ongoing', image: 'image'},
    { id: 3, itemName: 'Ongoing', description: 'Ongoing', price: 'Ongoing', quantity: 'Ongoing', image: 'Ongoing'},
    { id: 4, itemName: 'Ongoing', description: 'Ongoing', price: 'Ongoing', quantity: 'Ongoing', image: 'Ongoing'},
    { id: 5, itemName: 'Ongoing', description: 'Ongoing', price: 'Ongoing', quantity: 'Ongoing', image: 'Ongoing'},
    { id: 6, itemName: 'Ongoing', description: 'Ongoing', price: 'Ongoing', quantity: 'Ongoing', image: 'Ongoing'},
    { id: 7 , itemName: 'Ongoing', description: 'Ongoing', price: 'Ongoing', quantity: 'Ongoing', image: 'Ongoing'},
  ]

  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  function App() {

  // For pet history For pet history For pet history For pet history
// For pet history For pet history For pet history For pet history

const phModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [petName, setPetName] = useState('');
  const [remarks, setRemarks] = useState('');
  const [species, setSpecies] = useState('');
  const [healthHistory, setHealthHistory] = useState('');

  const [history, setHistory] = useState([]);

  const petHistoryCollectionRef = collection(db, "petHistory");

  
  useEffect(() => {
    const getHistory = async () => {
      const data = await getDocs(petHistoryCollectionRef);
      setHistory(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getHistory();
  }, []);

  const addPetHistory = async () => {
      try {
          const petHistory = await addDoc(petHistoryCollectionRef, {age: age, breed: breed, date: date, gender: gender, ownerName: ownerName, petName: petName, remarks: remarks, species: species, healthHistory: healthHistory});
      } catch (e) {
          console.log(e.message);
      }
  }

    const [navVisible, showNavbar] = useState(false);
    
    const orderStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <BrowserRouter >
        <div className="App">
          <Navbar visible={ navVisible } show={ showNavbar } />
          <Routes>
            <Route path="/" element={<Navigate to="/editAdmin" />} />
            <Route path='/editAdmin' element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Paper elevation={3} sx={{width: '80%', height: '95vh', margin: 'auto'}}>
                  <Typography variant='h4' sx={{textAlign: 'center', margin: 2}}>My account</Typography>
                  <form style={{width: '80%', margin: 'auto'}}>
                    <TextField m={{width:'100%'}}
                        variant="outlined" 
                        label='First Name' 
                        id="firstName" 
                        sx={{width: '48%', marginBottom:'10px', marginRight: '4%'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Last Name' 
                        id="lastName" 
                        sx={{width: '48%', marginBottom:'10px'}}      
                        required 
                    />
            
                    <TextField m={{width:'100%'}}
                        variant="outlined" 
                        label='Username' 
                        id="username" 
                        sx={{width: '48%', marginBottom:'10px', marginRight: '4%'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Email Address' 
                        id="email" 
                        sx={{width: '48%', marginBottom:'10px'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Address' 
                        id="address"
                        multiline rows={3} 
                        sx={{width: '100%', marginBottom:'10px'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Current Password' 
                        id="currentPassword" 
                        sx={{width: '48%', marginBottom:'10px', display:'flex'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='New Password' 
                        id="newPassword" 
                        sx={{width: '48%', marginBottom:'10px', display:'flex'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Confirm New Password' 
                        id="confirmPassword" 
                        sx={{width: '48%', marginBottom:'10px', display:'flex'}}      
                        required 
                      />
                    <Button variant="contained"
                    className='save-btn'
                    >
                      Save Changes
                    </Button>  	      
                  </form>
                </Paper>
              </div>
            } />

            {/* ORDERS */}
            {/* ORDERS */}
            {/* ORDERS */}
            <Route path='/orders' element={ 
              <div className={!navVisible ? "page" : "page page-with-navbar"}
                    style={orderStyle}>
                <Paper elevation={3} sx={{width: '90%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{ height: '30%', width: '30%'}}>
                    <Typography variant='h5'>Order status</Typography>
                    <DataGrid
                      rows={rowss}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[2]}
                  />
                  </div>
                  <div style={{ height: '42%', width: '70%', marginTop: '50px'}}>
                    <Typography variant='h5'>Approved orders</Typography>
                    <DataGrid
                      rows={approvedRowss}
                      columns={approvedColumnss}
                      pageSize={5}
                      rowsPerPageOptions={[2]}
                  />
                  </div>
                </Paper>
              </div>
            }/>

            {/* SUPPLIES */}
            {/* SUPPLIES */}
            {/* SUPPLIES */}
            <Route path='/supplies' element={
              <div className={!navVisible ? "page" : "page page-with-navbar"} style={orderStyle}>
                <Paper sx={{textAlign: 'center'}}>
                  <Typography variant='h4' sx={{textAlign: 'center' }}>List of product</Typography>
                  <TableContainer sx={{display: 'flex', justifyContent: 'center'}} >
                    <Table sx={{ minWidth: 700, width: '100%' }} aria-label="customized table">
                      <TableHead sx={{bgcolor: 'black'}}>
                        <TableRow>
                          <TableCell sx={{color: 'white'}}>Item ID</TableCell>
                          <TableCell align="right" sx={{color: 'white'}}>Item name</TableCell>
                          <TableCell align="right" sx={{color: 'white'}}>Description</TableCell>
                          <TableCell align="right" sx={{color: 'white'}}>Price</TableCell>
                          <TableCell align="right" sx={{color: 'white'}}>Quantity</TableCell>
                          <TableCell align="right" sx={{color: 'white'}}>Image</TableCell>
                          <TableCell align="right" sx={{color: 'white'}}>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>{(rowsPerPage > 0
                            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data
                          ).map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell align="right">{row.itemName}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.image}</TableCell>
                            <TableCell align="right">
                              <IconButton sx={editStyle}>Edit<EditIcon fontSize='small'/></IconButton> 
                              <IconButton sx={hideStyle}>Hide<VisibilityOffIcon fontSize='small'/></IconButton> 
                              <IconButton sx={deleteStyle}>Delete<DeleteIcon fontSize='small'/></IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                            <TablePagination
                              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                              colSpan={7}
                              count={data.length}
                              rowsPerPage={rowsPerPage}
                              page={page}
                              SelectProps={{
                                inputProps: {
                                  'aria-label': 'rows per page',
                                },
                                native: true,
                              }}
                              onPageChange={handleChangePage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                          </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                
                  <form style={{width: '80%', margin: '10px auto', border: '1px lightgray solid', padding: 15, borderRadius: 9}}>
                      <Typography variant='h4' sx={{textAlign: 'left' }}>Add new item</Typography>
                      <TextField m={{width:'100%'}}
                          variant="outlined" 
                          label='Item name' 
                          id="itemName" 
                          sx={{width: '50%', marginBottom:'10px', marginRight: '2%'}}      
                          required 
                      />
                      <TextField m={{width:'100%'}}
                          variant="outlined" 
                          label='Price' 
                          id="price" 
                          sx={{width: '23%', marginBottom:'10px', marginRight: '2%'}}      
                          required 
                      />
                      <TextField 
                          variant="outlined" 
                          label='Quantity' 
                          id="quantity" 
                          sx={{width: '23%', marginBottom:'10px'}}      
                          required 
                      />
                      <TextField 
                          variant="outlined" 
                          label='Description' 
                          id="description" 
                          sx={{width: '100%', marginBottom:'10px'}} 
                          multiline rows={4}  
                          required 
                      />
                      <input
                        accept="image/*"
                        style={{display: 'none'}}
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <label htmlFor="contained-button-file">
                        Select an image to upload
                        <Button variant="contained" component="span" sx={{margin: '0 10px'}}>
                          Upload
                        </Button>
                      </label>
                      <Button variant="contained"
                      className='save-btn'
                      >
                        ADD NEW ITEM
                      </Button>  	      
                  </form>
                </Paper>
              </div>
            } />

            {/* TRANSACTION */}
            {/* TRANSACTION */}
            {/* TRANSACTION */}
            <Route path='/transactions' element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <div>
                  <h1>Transactions</h1>
                </div>
              </div>
            } />
            <Route path='/pethistory' element={  //PET HISTORY
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Paper elevation={3} sx={{width: '90%', margin: 'auto'}}>
                    <Typography variant='h4' sx={{marginLeft: '1%',}}>Pet History</Typography>
                      
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                      >
                        <Box sx={{ ...phModal, width: '80%' }}>
                          <h2 id="parent-modal-title">Add new pet history</h2>
                          <Paper sx={{marginTop: 3, width: '100%', padding: 4}}>
                      <form>
                        <TextField m={{width:'100%'}}
                                  variant="outlined" 
                                  label='Owners Name' 
                                  id="ownerName"
                                  onChange={(e) => setOwnerName(e.target.value)} 
                                  sx={{width: '40%', marginBottom:'10px', marginRight:'2%', marginLeft:'1%'}}      
                                  required 
                                />
                        <TextField m={{width:'100%'}}
                                  variant="outlined" 
                                  label='Pet Name' 
                                  id="petName"
                                  onChange={(e) => setPetName(e.target.value)}  
                                  sx={{width: '26%', marginBottom:'10px', marginRight:'2%'}}      
                                  required 
                                />
                        <TextField m={{width:'100%'}}
                                  variant="outlined" 
                                  label='Pet Species' 
                                  id="species" 
                                  onChange={(e) => setSpecies(e.target.value)} 
                                  sx={{width: '28%', marginBottom:'10px',}}      
                                  required 
                                />
                        <TextField m={{width:'100%'}}
                                  variant="outlined" 
                                  label='Pet Breed' 
                                  id="breed" 
                                  onChange={(e) => setBreed(e.target.value)} 
                                  sx={{width: '30%', marginBottom:'10px', marginRight:'2%', marginLeft:'1%'}}      
                                  required 
                                />
                        <TextField m={{width:'100%'}}
                                  variant="outlined" 
                                  label='Age' 
                                  id="age" 
                                  onChange={(e) => setAge(e.target.value)} 
                                  sx={{width: '30%', marginBottom:'10px', marginRight:'2%'}}      
                                  required 
                                />
                        <FormControl className='frmctrl'>
                          <FormLabel >Gender</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            id="gender"
                            onChange={(e) => setGender(e.target.value)} 
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Male" />
                            <FormControlLabel value="male" control={<Radio />} label="Female" />
                          </RadioGroup>
                        </FormControl> 
                        <TextField m={{width:'100%'}}
                                  variant="outlined" 
                                  label='Remarks' 
                                  onChange={(e) => {setRemarks(e.target.value)}}
                                  id="remarks" 
                                  sx={{width: '30%', marginBottom:'10px', marginRight:'2%', marginLeft:'1%'}}
                                  required 
                                />
                        <TextField m={{width:'100%'}}
                                  type='datetime-local'
                                  variant="outlined" 
                                  id="date" 
                                  onChange={(e) => {setDate(e.target.value)}}
                                  sx={{width: '30%', marginBottom:'10px', marginRight:'2%'}}      
                                  required 
                                />       
                        <TextField 
                                  variant="outlined" 
                                  label='Pet health history' 
                                  id="healthHistory" 
                                  onChange={(e) => {setHealthHistory(e.target.value)}}
                                  multiline rows={6}
                                  sx={{width: '98%', marginBottom:'10px', marginLeft:'1%'}}      
                                  required 
                                />

                        <Button variant='contained' color='success' onClick={addPetHistory} startIcon={<AddBoxIcon />} >Add pet history</Button>
                        <Button variant='contained' type='reset' >Clear</Button>
                      </form>
                    </Paper>
                        </Box>
                      </Modal>
                    <TableContainer sx={{display: 'flex', justifyContent: 'center'}} >
                    <Table sx={{ minWidth: 700, width: '100%' }} aria-label="customized table">
                      <TableHead sx={{bgcolor: 'black'}}>
                        <TableRow>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Owner's Name</TableCell>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Pet Name</TableCell>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Pet Species</TableCell>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Pet Breed</TableCell>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Age</TableCell>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Gender</TableCell>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Remarks</TableCell>
                          {/* <TableCell align="right" sx={{color: 'white'}}>Date</TableCell> */}
                          <TableCell align="center" sx={{color: 'white', fontSize: '17px'}}>History</TableCell>
                          <TableCell align="left" sx={{color: 'white', fontSize: '17px'}}>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>{(rowsPerPage > 0
                            ? history.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : history
                          ).map((pet) => (
                          <TableRow key={pet.name}>
                            <TableCell align="left">{pet.ownerName}</TableCell>
                            <TableCell align="left">{pet.petName}</TableCell>
                            <TableCell align="left">{pet.species}</TableCell>
                            <TableCell align="left">{pet.breed}</TableCell>
                            <TableCell align="left">{pet.age}</TableCell>
                            <TableCell align="left">{pet.gender}</TableCell>
                            <TableCell align="left">{pet.remarks}</TableCell>
                            {/* may error kay date kaya naka comment muna ayaw mag display */}
                            {/* <TableCell align="right">{pet.date}</TableCell>  */}
                            <TableCell align="center" width='35%'>{pet.healthHistory}</TableCell>
                            <TableCell align="left">
                              <IconButton sx={editStyle}>Edit<EditIcon fontSize='small'/></IconButton> 
                              <IconButton sx={deleteStyle}>Delete<DeleteIcon fontSize='small'/></IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                            <TablePagination
                              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                              colSpan={10}
                              count={history.length}
                              rowsPerPage={rowsPerPage}
                              page={page}
                              SelectProps={{
                                inputProps: {
                                  'aria-label': 'rows per page',
                                },
                                native: true,
                              }}
                              onPageChange={handleChangePage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                          </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                  <Button variant='contained' color='success' onClick={handleOpen} startIcon={<AddBoxIcon />} sx={{float: 'right', margin: 3}}>Add pet history</Button>
                    {/* <div style={{ height: '40%', width: '80%'}}>
                      <DataGrid
                        rows={petRows}
                        columns={petColumns}
                        pageSize={5}
                        rowsPerPageOptions={[2]}
                    />
                    </div> */}
                    
                </Paper>
              </div>
            } />
            <Route path='/addnewemployee' element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Container sx={containerStyle} elevation={1}>
                <Grid align='center'>
                  <Avatar >
                      <PersonAddAltIcon />
                  </Avatar>
                  <h2 style={{textAlign: 'center'}}>Add new employee</h2>
                  <Typography variant="caption">
                  Please fill up this form to add new employee.
                  </Typography>
              </Grid>
                  <form style={{width: '80%', margin: '75px auto'}}>
                    <TextField m={{width:'100%'}}
                        variant="outlined" 
                        label='First Name' 
                        id="firstName" 
                        sx={{width: '48%', marginBottom:'10px', marginRight: '4%'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Last Name' 
                        id="lastName" 
                        sx={{width: '48%', marginBottom:'10px'}}      
                        required 
                    />
            
                    <TextField m={{width:'100%'}}
                        variant="outlined" 
                        label='Username' 
                        id="username" 
                        sx={{width: '48%', marginBottom:'10px', marginRight: '4%'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Email Address' 
                        id="email" 
                        sx={{width: '48%', marginBottom:'10px'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Address' 
                        id="address"
                        multiline rows={3}
                        sx={{width: '100%', marginBottom:'10px'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Password' 
                        id="password" 
                        sx={{width: '48%', marginBottom:'10px', marginRight: '4%'}}      
                        required 
                    />
                    <TextField 
                        variant="outlined" 
                        label='Confirm password' 
                        id="confirmPassword" 
                        sx={{width: '48%', marginBottom:'10px'}}      
                        required 
                      />
                    <Button variant="contained"
                    className='save-btn'
                    >
                      Add new employee
                    </Button>  	      
                  </form>
                </Container>
              </div>
            } />
            <Route path='/inquiries' element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <div>
                  <h1>Inquiries and messages</h1>
                </div>
              </div>
            } />
            <Route path='/analytics' element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <h1>Analystics</h1>
              </div>
            }/>
            <Route path='/Sign-out' element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <h1>Logout</h1>
              </div>
            }/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
