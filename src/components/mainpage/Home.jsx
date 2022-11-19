import React from 'react'

import Categories from './Categories'
import Slider from './Slider'
import './Home.scss'


const Home = () => {
  return (
    <section className='Home'>
        <div className='container c_flex'>
            <Categories/>
            <Slider/>
        </div>
    </section>
  )
}

export default Home