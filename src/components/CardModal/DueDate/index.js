
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../../store'; 
 
import format from 'date-fns/format';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { addDueDate, getAllCard } from '../../../features/CardSlice';
 
const DueDate = ({ card }) => {
  const dispatch = useAppDispatch() 
  const cardId = card.id


  const handleChange = (newValue) => {
    const selectedDueDate = {
      "duedate": format(newValue, 'yyyy-MM-dd')
    }

    dispatch(addDueDate({
      selectedDueDate,
      cardId
    }))
    dispatch(getAllCard())
    dispatch(getAllCard())

  };



  return (
    <Box sx={{ p: 3 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DesktopDatePicker
          label="Due Date"
          inputFormat="MM/dd/yyyy"
          value={card.duedate}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default DueDate 