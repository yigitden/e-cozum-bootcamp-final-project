import * as React from 'react';
import {Box,Button,TextField} from '@mui/material';
import MainMenu from '../MainMenu';
import ChipLink from '../Chip';
import Label from '../Label';
import AddListButton from '../AddListButton';
import Editable from'../Editable';
import ProfileAvatar from '../ProfileAvatar';
import AddBoard from '../AddBoard';
import List from '../List';
import RemoveCard from '../RemoveCard';
import CardModal from '../CardModal';
import ButtonRadius from '../ButtonRadius';



const Header = () => {

 const [name,setName] = React.useState('')
  return (
    <> 



<ProfileAvatar/>

   
  


 <ButtonRadius/>
  <MainMenu/>
  <ChipLink
  text='Boards'
  link="/home" />


<Label
text="aba"
color="secondary"
onDelete="handleDelete"/>
<AddListButton/>

<Editable/>
<CardModal/>
<List/>

<AddBoard/>
<RemoveCard/>


<div>
<TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=""
          onChange={(event) => setName(event.target.value)}
        />

{name ? <Button>Primary</Button> : <Button disabled>Primary</Button>}

  
  </div>
 </>

  )
}

export default Header

