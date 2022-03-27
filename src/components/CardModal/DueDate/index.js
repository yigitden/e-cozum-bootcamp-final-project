 
import React from 'react'
import TextField from '@mui/material/TextField'; 
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Box } from '@mui/material'; 
import { useAppDispatch } from '../../../store';
import { Api } from '@mui/icons-material';
import { getAllCard } from '../../../features/CardSlice';


const DueDate = ({card}) => {
  const dispatch = useAppDispatch()
    const [value, setValue] = React.useState(new Date());

    const handleChange = (newValue) => {
        setValue(newValue)
        const newDueDate = {
          "duedate":value
        }
        Api.put(`card/${card.id}`,newDueDate)
        .then()  
    
        dispatch(getAllCard())


      };
      
    

  return (
    <Box sx={{p:3}}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>

   <DateTimePicker
    
    value={value}
    onChange={handleChange}
    renderInput={(params) => <TextField {...params} />}
  />
    </LocalizationProvider>
    </Box>
  )
}

export default DueDate 