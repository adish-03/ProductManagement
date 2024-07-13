import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const currencies = [
    {
      value: 'MLE',
      label: 'Mobile, laptops or electronics',
    },
    {
      value: 'HA',
      label: 'Home appliances',
    },
    {
      value: 'F',
      label: 'Fashion',
    },
  ];

const Add = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 2, fontWeight: 700, color: 'white' }}>
        Add new products here
      </Typography>
      <div style={{ border: '2px solid #0096FF', padding: '20px', borderRadius: '10px', width: '100%', maxWidth: '600px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <TextField
            required
            id="standard-required"
            label="Product Name"
            variant="standard"
            InputLabelProps={{ style: { color: 'gray' } }}
            InputProps={{ style: { color: 'gray' } }}
            style={{ flex: 1, marginRight: '10px' }}
          />
          <TextField
            required
            id="standard-required"
            label="Product Link"
            variant="standard"
            InputLabelProps={{ style: { color: 'gray' } }}
            InputProps={{ style: { color: 'gray' } }}
            style={{ flex: 1, marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            id="standard-multiline-static"
            label="Product Description"
            multiline
            rows={4}
            variant="standard"
            InputLabelProps={{ style: { color: 'gray' } }}
            InputProps={{ style: { color: 'gray' } }}
            style={{ width: '100%' }}
          />
        </div>
        <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label" sx = {{color : 'gray'}}>Type of product</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Type of product"
          sx={{
            color: 'gray', // Set Select text color to gray
            '& .MuiSelect-icon': {
              color: 'gray', // Set Select icon color to gray
            },
            '& .MuiSelect-outlined': {
              color: 'gray', // Set Select outlined text color to gray
            },
            '& .MuiSelect-select': {
              color: 'gray', // Set Select input text color to gray
            },
          }}
        >
          <MenuItem >Mobile, Laptops and Electronics</MenuItem>
          <MenuItem >Home appliances</MenuItem>
          <MenuItem >Fashion</MenuItem>
        </Select>
      </FormControl>
      </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Add product</Button>
          </Stack>
          </div>
      </div>
    </div>
  )
}

export default Add