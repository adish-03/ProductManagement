import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MobileComponent = ({image, title, description, link}) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'white' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        link = {link}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button size="small" onClick = {()=>window.open(link, '_blank')}>Go to site</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default MobileComponent;
