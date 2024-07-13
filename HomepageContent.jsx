import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HomepageComponent from './HomepageComponent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; 


const cardsData = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93rjWliQj-CTpEqWNBDtAqmpHXccA9gHGxHROWXvWQBx8EkmLrAGN9xC_ojdgkQegspM&usqp=CAU',
    title: 'Mobile, Laptops and more',
    description: 'Upgrade your tech with our latest mobile phones, laptops, PCs, headphones, and more! Discover unbeatable deals on top brands and cutting-edge gadgets. Shop now for the best prices!',
    link: '/Mobile'
  },
  {
    image: 'data:image/jpeg;base64,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',
    title: 'Home Appliances',
    description: 'Upgrade your home with our top-quality appliances! Explore our latest models and special offers today. Bring innovation and style to your home with unbeatable prices.',
    link: '/HomeAppliances'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcD9Y6Fg38pc6PFj4yqHHp8pW-X2vxXXTqA&s',
    title: "Fashion",
    description: "Elevate your style with our latest fashion collection! Discover trendy clothing, shoes, and accessories at unbeatable prices. Shop now and redefine your wardrobe!",
    link : '/Fashion'
  }
];

const HomepageContent = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom
      sx = {{textAlign : 'left', mb: 2, fontWeight: 700,}}>
        Home
      </Typography>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to = {card.link} style = {{textDecoration : 'none', color : 'inherit'}}>
            <HomepageComponent
              image={card.image} 
              title={card.title} 
              description={card.description} 
            />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomepageContent;