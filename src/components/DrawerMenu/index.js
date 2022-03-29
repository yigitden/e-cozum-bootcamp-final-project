import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import {  blueGrey,grey } from '@mui/material/colors';
import { Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deleteBoard, fetchBoard } from '../../features/boardSlice';
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store';
import { getAllUsers } from '../../features/UserSlice';
import { Api } from '../../service/Api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { getBoardInfoFromId } from '../../features/BoardSliceFromId';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';




export default function DrawerMenu() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // Delete Board Function
  const navigate = useNavigate()
  const { id } = useParams()       // GET BOARD ID
  const dispatch = useAppDispatch()

  const handleDeleteBoard = () => {       //DELETE BOARD FUNCTION
    dispatch(deleteBoard(id))
    dispatch(fetchBoard())
    navigate('/')
}

 //GET ALL MEMBERS FROM SLICE START
 React.useEffect(()=>{
    dispatch(getAllUsers())
    dispatch(getBoardInfoFromId(id))
    
 },[dispatch])

 const users = useAppSelector((state) => state.user.data);
 const boardInfo = useAppSelector((state) => state.BoardSliceFromId.data);
 
 //GET ALL MEMBERS FROM SLICE END

 const [selectedUser, setSelectedUser] = React.useState(''); 
//ADD MEMBER TO BOARD

const addMemberToBoard = () => {
    const memberDetails = {
        "username": selectedUser,
        "boardId": Number(id),
    }
    
    Api
      .post('board-member',memberDetails)
      .then(() => {
        dispatch(getBoardInfoFromId(id)) 
      })
      .catch((error) => {
        console.log(error);
      });
  };
//DELETE MEMBER FROM BOARD
const deleteMemberFromBoard = (memberId) => {  
    Api
      .delete(`board-member/${memberId}`)
      .then(() => dispatch(getBoardInfoFromId(id)))
      .catch((error) => {
        console.log(error);
      });
  };


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

   

  const handleChange = (event) => {
     setSelectedUser(event.target.value)

  };

  const list = (anchor) => (
   

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
 
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',my:2 }}>
            <List>
           
        <ListItemText primary='SETTINGS' />
     
  </List>
  </Box>
      
      <Divider />
      <Box>
      <List>
         
          <ListItem button onClick={() => handleDeleteBoard()} >
            <DeleteOutlineOutlinedIcon sx={{ mr: 3}}/>
            <ListItemText primary='Delete Board' />
          </ListItem>
       
      </List>
    </Box>
      <Divider />
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',my:2 }}>
            <List>
           
        <ListItemText primary='MEMBERS' />
     
  </List>
  </Box>
  <Box sx={{ display:'flex',flexDirection:'column', alignItems:'center' }}>
  {users !== 0 && (
    <>
     <ListItemText sx={{my:2}} primary='ADD A MEMBER TO THIS BOARD' />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Members</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={selectedUser} 
          label="Members"
          onChange={(event) => setSelectedUser(event.target.value)} 
        >

            {users.map((user) => (
                <MenuItem value={user.username}>{user.username}</MenuItem>
            ))}
         
          
        </Select>
      </FormControl>
      </>
    )}
    <Button sx={{my:1}} 
    variant="contained"
    onClick={() => {
        if (selectedUser === boardInfo.owner.username) {
          alert('You are owner this board already.');
          return;
        } else if (boardInfo.members.some((member) => member.username === selectedUser)) {
          alert('This user is already a member of this board');
        } else {
          addMemberToBoard();
        }
      }}
    >ADD</Button>
    </Box>
    
    
    {boardInfo.members && boardInfo.members.length !== 0  &&  (
    <Box sx={{ display:'flex',flexDirection:'column', alignItems:'center' }}>
     
     <ListItemText sx={{my:2}} primary='ADDED MEMBERS' />
     {boardInfo.members && boardInfo.members.map((member) => (
            
            <ListItem button >
            <PersonOutlineOutlinedIcon sx={{ mr: 3}}/>
            <ListItemText primary={member.username} />
            
            <DeleteOutlinedIcon onClick={() => deleteMemberFromBoard(`${member.id}`)}/>
          </ListItem>
     ))}



</Box>
     ) }
    
   
      


      
      


   </Box> 
  );

  return (
     
 
        <Box>
          <Button onClick={toggleDrawer('right', true)}><SettingsIcon  sx={{ fontSize:25,
          borderRadius: 8,
          padding: 1,
          transition: '0.5s',
          color:blueGrey[100],
          '&:hover': {
              cursor:'pointer',
              backgroundColor: grey[100],
              color:blueGrey[400],
   }}}  fontSize="large"  color="primary"/></Button>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </Box>
     
  );
}