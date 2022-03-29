import React, { useEffect }  from 'react'
import { CardContent, Card, Box, Divider, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardFooter from '../CardFooter';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CardItemComment from '../CardItemComment'; 
import CardModal from '../CardModal';
import { useAppDispatch, useAppSelector } from '../../store'; 
import { getAllCard } from '../../features/CardSlice'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CardItem = ({ listId,  list }) => {
 
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllCard())
    
  }, [dispatch])
  const cardarr   = useAppSelector(state => state.card.data)
  const cardsAll = Object.keys(cardarr).map( key => cardarr[key])
  const card = cardsAll.filter((item)=> item.listId == listId)

 

      
  return (


    <>
      <Box component="div" sx={{ overflow: 'auto', minHeight: '310px', p: 2 }} >

        {card  && card.map((card) => (
          <>
            <CardModal card={card}   list={list}   />

            <Card sx={{ maxWidth: 280, borderRadius: 6, mb: 2, cursor: 'pointer' }} key={card.id} >
            
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {card.labels && card.labels.map((i)=>(

                    <Chip sx={{mr:1,width:35,height:8,borderRadius:10 }}
                    
                    color={`${i.title}` == 'Önemli' ? 'error' : 'default'}
                    
                  /> ))} 
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'medium', mb: 1 }} component="div">
                  {card.title}
                </Typography>

                <Typography variant="body2">
                  Tarih
                  <br /> 
                  Checklist<Chip icon={<CheckCircleOutlineIcon sx={{ mr:1 }} />} color="default" label="With Icon" />

                </Typography>
              </CardContent>
              <Divider />
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1.2,
                alignItems: 'center'

              }}>
                

              {card.description && card.description ? <DescriptionOutlinedIcon sx={{fontSize:'medium',mr:22}}/> : <></>}
             
                <CardItemComment   card={card}/>
 
              </Box>

            </Card>

          </>


        ))} 
      </Box>

      <CardFooter listId={listId} />




    </>


  )
}

export default CardItem


