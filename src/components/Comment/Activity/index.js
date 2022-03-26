import React from 'react'
import ActivityComment from './ActivityComment'
import ActivityTitle from './ActivityTitle'
const Activity = ({comments}) => {
  return (
    <>
    <ActivityTitle/>
    <ActivityComment comments={comments}/>
    
    </>

  )
}

export default Activity