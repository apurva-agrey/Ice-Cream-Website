import React from 'react'
import { Layout } from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import a from '../images/a.jpg'
import '../style/Home.css'
import { IconButton } from '@mui/material'
import IcecreamIcon from '@mui/icons-material/Icecream';


const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${a})`}}>
        <div className='headerContainer'>
          <h1>YOU HOT PEOPLE !</h1>
          <p>Lets explore the wide variety of Ice creams </p>
          <p>Induge with the best authentic yet modern taste.</p>
          <Link to='/menu'>
            <button>
              Order Now <IcecreamIcon />
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home