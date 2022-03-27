import React, { useState } from 'react'
import { Checkbox } from '@mui/material';
import { Api } from '../../../../service/Api';
import { useAppDispatch } from '../../../../store';
import { getAllCard } from '../../../../features/CardSlice';
 
const CheckBoxItem = ({id,isChecked}) => {

const [checked, setChecked] =  useState(isChecked)
const dispatch = useAppDispatch()

const handleChangeCheckBox = (checked) => {
  const checkBoxEdit = {
    "isChecked":checked
  } 
  Api.put(`checklist-item/${id}`,checkBoxEdit)
  .then()
  dispatch(getAllCard())
  setChecked(checked); 
}

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => handleChangeCheckBox(event.target.checked)} 
      />   
  )
}

export default CheckBoxItem