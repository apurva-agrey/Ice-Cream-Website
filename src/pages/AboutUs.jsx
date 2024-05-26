import React from 'react'
import { Layout } from '../components/layouts/Layout'
import { Box, Typography } from '@mui/material'
import about from '../images/ice.jpg'
import About from '../style/About.css'


export const AboutUs = () => {
  return (
    <Layout>
      <div className='about' style={{ backgroundImage: `url(${about})`}}>

      <Box 
        sx={{
          textAlign: "center",
          p: 2,
          mx:3,
          "& h6": {
            fontWeight: "bold",
            fontSize: "1.5rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h6">Welcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliqu  facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliqu
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatirendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </p>
      </Box>
      </div>
    </Layout>
  );
}
