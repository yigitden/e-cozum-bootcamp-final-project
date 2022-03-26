import React, { useEffect } from 'react'

import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import CardItem from '../CardItem';
import ListTitle from '../ListTitle';
import { useAppSelector, useAppDispatch } from "../../store"
import { getListAll } from '../../features/ListSlice';
import { useParams } from 'react-router-dom';
import { getAllCard } from '../../features/CardSlice'; 

const List = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getListAll(id))
    
  }, [dispatch])
 

  const allList  = useAppSelector(state => state.list.data)

  return (


    <>
      {allList && allList.map((list) =>
      
        <Paper
          sx={{
            width: '320px',
            maxHeight: '480px',
            backgroundColor: grey[100],
            borderRadius: 6,
            mr: 3,
            display: 'flex',
            flexDirection: 'column',

          }}>
          <ListTitle
            listTitle={list.title}
            listId={list.id}
          />
          <CardItem 
            listId={list.id}
            listTitle={list.title}
            list={list}
           
          />

        </Paper>







      )}

    </>
  )
}

export default List

