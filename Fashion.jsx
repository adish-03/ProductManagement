import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FashionComponent from './FashionComponents';
import Typography from '@mui/material/Typography';



const cardsData = [
  {
    image: 'https://m.media-amazon.com/images/I/91Tpo6qwKEL._SY879_.jpg',
    title: "Levi's Men's 512 Slim Tapered Fit Mid Rise Jeans",
    description: <ul>
        <p1><b>Brand: </b>Levi's</p1>
        <br></br>
        <p1><b>Material type: </b>Cotton</p1>
        <br></br>
        <p1><b>Length: </b>Regular</p1>
        <br></br>
        <p1><b>Closure type: </b>Button</p1>
        <br></br>
        <p1><b>Country of origin: </b>India</p1>
        <br></br>
    </ul>,
    link: 'https://www.amazon.in/Levis-Mens-Tapered-Jeans-A7086-0099_Blue/dp/B0C6QWBZ76/ref=sr_1_7?dib=eyJ2IjoiMSJ9.iIAxAdPcULj0R7-JOpAca4R0NbUdRQuAwGgJeCTRHO051_1xSjRgKG0pF9I2vaQ-AaUCZjoGXSsBci1ZbgeMVZ3aOyGcZ17tYbM3uuY64HZ710bo4IWXN8MeB_cWiS6SqVT0ABQl3dWE-tTrsJhkwHvwzItLq4weoQHCFwEf1xN09RtK12xaUh_-KSzLl5LN2VX0K0AJ7AGSQbAzrWMg-MyUL6FEXUi1mWt3W_6vgEopCxJ0s9j1Lchp0xRextUGao26X7e3x8vSZv6GggEVUBuAWkS222f61lP1qjD9Sa0.YdJjIx-XSWEcyvSXKgoYDxBS7QamhaZ_9a8Vx877pEw&dib_tag=se&pf_rd_i=1968024031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=89ccad60-f48d-4357-addf-0cb86e2ceb79&pf_rd_r=Q0NN79GZ7SRH1CSNBPZB&pf_rd_s=merchandised-search-13&qid=1720892623&refinements=p_85%3A10440599031%2Cp_89%3ALevi%27s%2Cp_n_pct-off-with-tax%3A2665401031&rnid=2665398031&rps=1&s=apparel&sr=1-7'
  },
  {
    image: 'https://m.media-amazon.com/images/I/61JbJcPZdAL._SY879_.jpg',
    title: 'rangita Rayon Knee length printed kurta',
    description: <ul>
    <p1><b>Brand: </b>Rangita</p1>
    <br></br>
    <p1><b>Sleeve type: </b>3/4 sleeve</p1>
    <br></br>
    <p1><b>Length: </b>Knee length</p1>
    <br></br>
    <p1><b>Neck style: </b>Round neck</p1>
    <br></br>
    <p1><b>Country of origin: </b>India</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/rangita-Geometric-Printed-Straight-Contrast/dp/B0BFLP9HWS/ref=sr_1_2?dib=eyJ2IjoiMSJ9.weRFaFP6aQCErkruQCeXFVIebhX-RuQRsi9zvz_NlMLzHxuZUcf_sJUyKBq4VGXvkKsvbh58CywUl5vIj1GRYnSwBpWWgwGD6FvBCjAT329JOEVsyTIk67FYJxQ0gHypQRPCzvFqoxvrTfrcgdo3x0-s4wMaCi0nVui5Ded30VTnrxXOfhUpUik7QAFJhzbBMIEJfzc3SVM-Qj37JDXpvAcrfNMXzxk2sZu9UmXn_iHfWItDKpS6BN9iQnC1d0PUvTBoXYyEW4eXUpMUYJ3xC0XfB-G7iXxINTdZ8NXHEa0.6NcwOOTjC7q6O8HZ_icNBV_SM_hYp1_xdAHJQ9JtF7c&dib_tag=se&pf_rd_i=1968253031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=0e25d106-7154-4a11-94ba-ff772e51f433&pf_rd_r=T438DAYTSPTF0QDJR86V&pf_rd_s=merchandised-search-3&qid=1720892832&refinements=p_85%3A10440599031%2Cp_n_pct-off-with-tax%3A2665401031%2Cp_72%3A1318476031%2Cp_89%3AAarke+Ritu+Kumar%7CAda%7CAurelia%7CBIBA%7CFabindia%7CGlobus%7CGoSriKi%7CINDO+ERA%7CIndya%7CJanasya%7CMEERA+FAB%7CMax%7CRitu+Kumar%7CSoch%7CW+for+Woman%7Crangita&rnid=3837712031&rps=1&s=apparel&sr=1-2'
  },
  {
    image: 'https://m.media-amazon.com/images/I/51JIjh8YcvL._SY675_.jpg',
    title: "Adidas Aerobolt Running shoe",
    description: <ul>
    <p1><b>Brand: </b>Adidas</p1>
    <br></br>
    <p1><b>Material: </b>Textile, Rubber</p1>
    <br></br>
    <p1><b>Closure type: </b>Lace-up</p1>
    <br></br>
    <p1><b>Sole material: </b>Rubber</p1>
    <br></br>
    <p1><b>Country of origin: </b>India</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/adidas-AEROBOLT-CBLACK-GRESIX-Running/dp/B0CPVMSPD7/ref=sr_1_2?crid=3IJZ1FPQWLQWJ&dib=eyJ2IjoiMSJ9.xSS_XEmRFbmJQzyyBtcSIeUv6YuPqOkZ1vpstEPGelwKM0s_ybO6P2f9z6Hm6JTCESLtD9cMWvjN1KG9_070RkU1bTn2fPFfNZPEIrtWi98G1sj6x1WDfci9yaO9-CT7CP6xRB-Tem-CwuEmN1fcasLarIV67sGmaQz2heinjL7LPAE_ZwSe5kcB23rXl0DqGnqIGP2PhEr56nq2639-HCT0na5t7XIXpGzkZs6cXbRTrxVd4xjRzySRx-KOUMlyAJ1NPORsn8nVwZkTtOJ1xj5YzcEX8Kk4HUtdfGfMl-M.i0oG943x_w6Q8DXO17W6GTu1FCY4geXqymyZu92n3Z8&dib_tag=se&keywords=shoes+adidas&qid=1720892802&sprefix=shoes+adid%2Caps%2C246&sr=8-2'
  }
];

const Fashion = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom
      sx = {{textAlign : 'left', mb: 2, fontWeight: 700,}}>
        Fashion
      </Typography>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FashionComponent
              image={card.image} 
              title={card.title} 
              description={card.description} 
              link = {card.link}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Fashion;