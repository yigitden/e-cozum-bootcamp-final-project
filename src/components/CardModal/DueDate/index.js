/*



import React from 'react'
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker'; 
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const DueDate = () => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
      };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

   <DateTimePicker
    
    value={value}
    onChange={handleChange}
    renderInput={(params) => <TextField {...params} />}
  />
    </LocalizationProvider>
  )
}

export default DueDate */