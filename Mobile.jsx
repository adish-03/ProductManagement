import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MobileComponent from './MobileComponent';
import Typography from '@mui/material/Typography';



const cardsData = [
  {
    image: 'https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg',
    title: 'iPhone 15 Pro Max',
    description: <ul>
        <p1><b>Brand: </b>Apple</p1>
        <br></br>
        <p1><b>Operating system: </b>iOS</p1>
        <br></br>
        <p1><b>Memory Storage Capacity: </b>256GB</p1>
        <br></br>
        <p1><b>Screen Size: </b>6.7inches</p1>
        <br></br>
        <p1><b>Model Name: </b>iPhone 15 Pro Max</p1>
        <br></br>
    </ul>,
    link: 'https://www.amazon.in/Apple-iPhone-Pro-Max-256/dp/B0CHWV2WYK/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.HriFLm_DHEZzxI2LxlyjcJwz7KsVDUdWt5TXN6VZn977AVZBfTe9ksAPxtoRih0GFRjZxlC_AYyt0T_9m-wtYLzEYM0j7RrQzQbzRYVgumMN57p6VjVjFmiIZpnWnMG3JOYqmf-CR35ecVb8TGYzKJYHzIfgomBuDwndXi-isnu_kww2lHwTSHbhO38325YrIwlhz7pT2PeOBKZV0piZYQFdKsHOaCKueY4zEphdUOvl8evDwB8uHKCJAE-lyRrVW0B4zcQZUlsU_XYeu3mZCxgPZ61AbOMxG4ijM07A7yg.qiam5eB7kjcmIlZHrJf4GJVhQB1WaCa1ozuGbHXqtv8&dib_tag=se&keywords=iphone+15+p%5Bro+max&qid=1720877925&s=electronics&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  },
  {
    image: 'https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg',
    title: 'Samsung Galaxy S24 Ultra',
    description: <ul>
    <p1><b>Brand: </b>Samsung</p1>
    <br></br>
    <p1><b>Operating system: </b>Android 14</p1>
    <br></br>
    <p1><b>Memory Storage Capacity: </b>512GB</p1>
    <br></br>
    <p1><b>Screen Size: </b>6.8inches</p1>
    <br></br>
    <p1><b>Model Name: </b>Galaxy S24 Ultra 5G AI Smartphone</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/Samsung-Galaxy-Smartphone-Titanium-Storage/dp/B0CQYGF1QY/ref=sr_1_1?dib=eyJ2IjoiMSJ9.lgE_Nl_Lsk7Q19or97qbxkK9eRMT2jNvCvIutiMca4azIGh9N4w9GfMTwNFh6AMieFQ9SndgpqCpJIdH4sQ_i2-HGOKrmLlerIUPl0SZtuuir8KeFBpLUzyh5Q4HbLMfNV0ensRm4xcF2B4ohZamLsnfHxhjhzXSdYoh7dGQGzn1zQuZRa211BMrjP2XFm5bJ7eGVa1B-P8t8huQMV2ScXsqVHqxOHV2WuSwdYfgkFyqHMxY5jBIf74nbzPXf-JYdBEGjz5DutRR7gD88dLcWLkROf4AgSeoyk9fLnaYl64.zpjcikM9BdgwvpXhcFmRBplHdZ9VMjIsLhBa5aHoTac&dib_tag=se&keywords=samsung%2Bgalaxy%2Bs24ultra&qid=1720878473&s=electronics&sr=1-1&th=1'
  },
  {
    image: 'https://m.media-amazon.com/images/I/51S-A7DAI3L._SX679_.jpg',
    title: "Asus Rog Strix G15",
    description: <ul>
    <p1><b>Brand: </b>Asus</p1>
    <br></br>
    <p1><b>Operating system: </b>Windows</p1>
    <br></br>
    <p1><b>Memory Storage Capacity: </b>1TB</p1>
    <br></br>
    <p1><b>Screen Size: </b>39.62cm</p1>
    <br></br>
    <p1><b>Model Name: </b>ROG Strix G15 (2022)</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/ASUS-Strix-Ryzen-6800H-Included/dp/B0BMVSKSJ6/ref=sr_1_4?crid=23ZFSFOUYEJM9&dib=eyJ2IjoiMSJ9.6BO8jBpnWtyy4gHd79ATt_71_l2j76Ppo1OQ7o0ZU9CMKI2DP8OK54caFlLwqrXdGdQ3hmi4ZjBv8fltClgE6jjwk6unqIqC4jwBuKlHNo6bLBliyEJ_OCy37hxXoWUQ4R8bO03Jol8gZMujSkbAHU75cS7CbdRFuWan1Wc6A5hEG-fQYhuYg2P9zwJUGgJGW2-STNMuAoDPRaBJpNN-tWQvT8sJyWIBROdt0jmx4mRjkaaXsMWC5qeLYnrclf5O11nb5IupAZPGado2LsdwsgG69STciolAzkgbC6wut6s.u4ELw1QvnqiQvDJq3-5z-cLcy5dMwQv7w8uVkmWdNIU&dib_tag=se&keywords=asus+rog&qid=1720878677&s=computers&sprefix=asus+r%2Ccomputers%2C240&sr=1-4'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71-D1xCuVwL._SX679_.jpg',
    title: "Apple 2024 MacBook Air",
    description: <ul>
    <p1><b>Brand: </b>Apple</p1>
    <br></br>
    <p1><b>Operating system: </b>MacOS</p1>
    <br></br>
    <p1><b>Memory Storage Capacity: </b>512GB</p1>
    <br></br>
    <p1><b>Screen Size: </b>13.6 inches</p1>
    <br></br>
    <p1><b>Model Name: </b>MacBook Air 13"</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/Apple-2024-MacBook-Laptop-chip/dp/B0CX2264MM/ref=sr_1_1_sspa?crid=JD5071CDLFTS&dib=eyJ2IjoiMSJ9.lIRxEw1BIVqCOYnjYe9UnUz--qGtM--3zs__LQRVE9vSKPcEfKyoc9w4CQEeebU69NLvrFokYrpDzSZbNSSOMSOqrrEeCXmga7AqHECPUfiNNnVy7B8m4T3e1PVLrzZQ7puMQAWBNbnEU0bGoY7t2T3K24ZpEE3Ouuw2tES6bXVS6RxzOuFi4Ai5B7v-lEMlT5vl5xH_x2WYpHqOqqQDu_rN4eEMIppu1ZnWDD1XQ4wIsZ3wG1s3mmM4AZe8-RupsS0OGL342-eGzfEPLPldt5FzkxPvRwwmAFq-6ouMhCk.D9X7ZCcjStwMj1vM1AYWrrgjuB1cMDq--eqEyvsrcaA&dib_tag=se&keywords=macbook+air&qid=1720878814&s=computers&sprefix=macbook+ai%2Ccomputers%2C250&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  },
  {
    image: 'https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg',
    title: "Apple iPad Pro (4th gen)",
    description: <ul>
    <p1><b>Brand: </b>Apple</p1>
    <br></br>
    <p1><b>Operating system: </b>iPadOS</p1>
    <br></br>
    <p1><b>Memory Storage Capacity: </b>256GB</p1>
    <br></br>
    <p1><b>Screen Size: </b>11 inches</p1>
    <br></br>
    <p1><b>Model Name: </b>iPad Pro</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/Apple-11-inch-iPad-Pro-Wi-Fi-256GB/dp/B0BJMN52CS/ref=sr_1_1_sspa?crid=1CAS90Z3BA4Y9&dib=eyJ2IjoiMSJ9.w542BweQeOhcN8roeCcpYql-0eLyva0gNgRODsenZijnaRCH5JMcnLbiky8wWyYFjMYlwYNovgUe1oFibzBRlpSvlPAVtMcjFn7y5dPgZLIA8VuXZRqCC3H4qmWp07nIKnrjadDSqk0jIhjGLGB0URzDoq_xBR1WdM5nJp03KSYE4P1BwY1Gf6ZBlYjWQuY1m-KrugN4rbc-fgHY5FGY4vTkyju8xop4N7kAaa3ZFvmnQQVwOIottvBd4C2erq6E_tHcFS-kKs4ZkcGfeYO7cbkk_14P9DJdzT_OXbSzrro.NtDS6RM0m8DW4g57baXTh4m1Ns5Y46pUoLnY2XgpDDg&dib_tag=se&keywords=ipad&qid=1720878907&s=computers&sprefix=i%2Ccomputers%2C266&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  },
  {
    image: 'https://m.media-amazon.com/images/I/51NC9ErIQtL._SX522_.jpg',
    title: "Bose QuietComfort Ultra",
    description: <ul>
    <p1><b>Brand: </b>Bose</p1>
    <br></br>
    <p1><b>Colour: </b>Black</p1>
    <br></br>
    <p1><b>Form Factor: </b>Over Ear</p1>
    <br></br>
    <p1><b>Noise Control: </b>Active Noise Cancellation</p1>
    <br></br>
    <p1><b>Headphones jack: </b>Bluetooth</p1>
    <br></br>
</ul>,
    link : 'https://www.amazon.in/Bose-QuietComfort-Wireless-Cancelling-Headphones/dp/B0CCZ1L489/ref=sr_1_1_sspa?crid=86T8OVC9HOI8&dib=eyJ2IjoiMSJ9.elNLQDKkAuN7L6zpn2R7wuCLnaCu4jbOd-BDMzi_X3hrErDFmlujqAN2AJsxbicvdNsFUQb5Lgzzi64UH_BSptniWTZkva55Z6_quhZHJjGk_NC6omzCECnXOMob8HCYkHiHMUfRFCP3jr_hAP4rV555FvXjSpbEvqSadb-qhlG0-tURb5udctbeD7tOc0U5olsuGdJP7ui-JHAI1uT9ijfrBs0pjiSY8564BF1gOvs.BRl52bAKQ_CDkPRXfztw6bFECRa7UP7XoxIUfwJruIg&dib_tag=se&keywords=headphones+bose&qid=1720879026&sprefix=headphones+bo%2Caps%2C269&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  }
];

const Mobile = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom
      sx = {{textAlign : 'left', mb: 2, fontWeight: 700,}}>
        Mobile, Laptops and more
      </Typography>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MobileComponent
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

export default Mobile;