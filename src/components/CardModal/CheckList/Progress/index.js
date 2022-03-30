import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

const Progress = () => {


    const [progress, setProgress] = React.useState(20);



    return (
        <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
    )
}

export default Progress