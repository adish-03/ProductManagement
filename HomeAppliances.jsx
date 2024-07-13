import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HomeAppliancesComponents from './HomeAppliancesComponents';



const cardsData = [
  {
    image: 'https://m.media-amazon.com/images/I/61vJAXrE-VL._SY741_.jpg',
    title: 'Samsung 550L',
    description: <ul>
    <p1><b>Brand: </b>Samsung</p1>
    <br></br>
    <p1><b>Product Dimensions: </b>76.5D x 81.7W x 177.6H cm</p1>
    <br></br>
    <p1><b>Capacity: </b>550L</p1>
    <br></br>
    <p1><b>Configuration: </b>Full sized french door</p1>
    <br></br>
    <p1><b>Energy star: </b>4 stars</p1>
    <br></br>
</ul>,
    link: 'https://www.amazon.in/Samsung-Frost-Free-Refrigerator-RF57A5032S9-Convertible/dp/B093Q1SLL4/ref=sr_1_1_sspa?crid=21UIX1MX3T2MQ&dib=eyJ2IjoiMSJ9.-22sadFDS4xNx8aEIV9KlcPIs03tS7Vaw14Tc7ZpNbig3ay473cinmRztXV5u5ybtfMeVN3zjKWWeGuBxIbf2pIyABvZe3OaZqdf57SDehE0miO9X40agHQU_86n2ma8m9NV4n7JeLJFX7TObOyDwqhrQNpE49G0uWTmIKL2UB8INMqFM0xoSDU6XYPd9vJvWKZJNkqlMnxneSvcA4iC8ymY8NyOgGqonE_XhisWkN4.wLk4SWBaNHCMf807PT59WiR_mAO0p3q5W20jCt69wSs&dib_tag=se&keywords=frigde&qid=1720879390&sprefix=frig%2Caps%2C254&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71Zijeze7CL._SY450_.jpg',
    title: 'LG OLED TV',
    description: <ul>
    <p1><b>Brand: </b>LG</p1>
    <br></br>
    <p1><b>Screen size: </b>48 inches</p1>
    <br></br>
    <p1><b>Display technology: </b>OLED</p1>
    <br></br>
    <p1><b>Resolution: </b>4K</p1>
    <br></br>
    <p1><b>Refresh rate: </b>60Hz</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/LG-inches-Ultra-Smart-48A3PSA/dp/B0C8JSCGH9/ref=sr_1_4?crid=1U9FWO8XJW4OD&dib=eyJ2IjoiMSJ9.nQiDxS4rHIpeLGvenCTAlWPIuJ9-6g3SxukxiDzGiYvztYzDsT1UGaP-8iC_pPs4jrp0EcHU7dGMwuYObBLGjlgHUwtgnVF0IegDL5oI4savOV_NeIDWLJptscerOd62jiEZTLDJXsZI2JqDBjUhVTv0c3qaORiTiwPtsGEegbSLO_eDLCRhywjScJCCBww6UaeyLfZGyfDXpUWuCbImHVyiq5b7fn5LXZEmde9zb60.36GY1S_BgRK1JtMPBl0y_hCZdU1E8kjsMkQRFlj6V0o&dib_tag=se&keywords=lg+oled&qid=1720891324&sprefix=lg+old%2Caps%2C262&sr=8-4'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71PYcYMxj2L._SX679_.jpg',
    title: "Bosch Fully automatic front loading washing machine",
    description: <ul>
    <p1><b>Brand: </b>Bosch</p1>
    <br></br>
    <p1><b>Capacity: </b>8kgs</p1>
    <br></br>
    <p1><b>Color: </b>Silver</p1>
    <br></br>
    <p1><b>Product dimensions: </b>59D x 66W x 84.8H cm</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/Bosch-1400RPM-INVERTER-Automatic-WAJ28262IN/dp/B08J3KFLBT/ref=sr_1_3?crid=2RHFBDCJVKMCI&dib=eyJ2IjoiMSJ9.UyMaeIBENxdFitgzZe9Ct_-4FsYgYwKtayHQ5b_voh_sNj0LtcnS7rRF1b0UZp3uMk0BqR9mNLUiApYmE-Xhv1S1sLqvP2ou9C2KE8mn7RLcITpxoxZLlbGzPbwh4qTJ55dx8SGT8RFl7T2hYf85QPOnVadstJk8at9tW5JFBuVRcHZioqh5oz-LpZ3yebdDiGSFQCubfSZ7HjBKlhxAD2a-2g9xlpa3onK_9tcQWs4.TK0P9psuyAYawcEHO7Vvsso63QgOeXVAUUzBxUcCBn4&dib_tag=se&keywords=Washing%2Bmachine%2Bbosch&qid=1720891563&sprefix=washing%2Bmachine%2Bbos%2Caps%2C246&sr=8-3&th=1'
  },
];

const HomepageContent = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom
      sx = {{textAlign : 'left', mb: 2, fontWeight: 700,}}>
        Home Appliances
      </Typography>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HomeAppliancesComponents
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

export default HomepageContent;