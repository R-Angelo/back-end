import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/index.css";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 500 },
  { field: 'status', headerName: 'Order Status', width: 130 }
];

const rows = [
  { id: 1, status: 'Ongoing'},
  { id: 2, status: 'Ongoing'}
];


function App() {
	const [navVisible, showNavbar] = useState(false);
	

	return (
		<BrowserRouter >
			<div className="App">
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path="/" element={<Navigate to="/dashboard" />} />
					<Route path='/editAdmin' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							
							<form >
                    <TextField m={{width:'100%'}}
                        variant="outlined" 
                        label='First Name' 
                        id="name" 
                        sx={{width: '40%', marginBottom:'20px', marginRight:'50px'}}      
                        required 
                       />
					    <TextField 
                        variant="outlined" 
                        label='Last Name' 
                        id="name" 
                        sx={{width: '40%', marginBottom:'20px'}}      
                        required 
                       />
					  
                    <TextField m={{width:'100%'}}
                        variant="outlined" 
                        label='Username' 
                        id="name" 
                        sx={{width: '40%', marginBottom:'20px' , marginRight:'50px'}}      
                        required 
                       />
					    <TextField 
                        variant="outlined" 
                        label='Email Address' 
                        id="name" 
                        sx={{width: '40%', marginBottom:'20px'}}      
                        required 
                       />
					    <TextField 
                        variant="outlined" 
                        label='Address' 
                        id="name" 
                        sx={{width: '84.3%', marginBottom:'20px'}}      
                        required 
                       />
					    <TextField 
                        variant="outlined" 
                        label='Old Password' 
                        id="name" 
                        sx={{width: '40%', marginBottom:'20px', display:'flex'}}      
                        required 
                       />
					   <TextField 
                        variant="outlined" 
                        label='New Password' 
                        id="name" 
                        sx={{width: '40%', marginBottom:'20px', display:'flex'}}      
                        required 
                       />
					    <TextField 
                        variant="outlined" 
                        label='Confirm New Password' 
                        id="name" 
                        sx={{width: '40%', marginBottom:'20px', display:'flex'}}      
                        required 
                       />
					   <Button variant="contained"
					   className='save-btn'
					   
					   >
						Save Changes</Button>  	      
							</form>
						</div>
					} />
					<Route path='/orders' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
						 <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={2}
                rowsPerPageOptions={[2]}
                checkboxSelection
              />
            </div>
						</div>
					}/>
					<Route path='/dashboard' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<div>
								<h1>Dashboard</h1>
							</div>
						</div>
					} />
					<Route path='/analytics' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Analystics</h1>
						</div>
					}/>
					<Route path='/settings' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Settings</h1>
						</div>
					}/>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
