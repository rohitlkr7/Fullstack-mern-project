import React from 'react'
import HeroFirstSection from '../components/heroFirstSection'
import HeroSlider from '../components/HeroSlider'
import Cardcategory from '../components/Cardcategory'
import NewArrivel from '../components/NewArrivel'
import Recomended from '../components/Recomended'

const Home = () => {
  return (
    <div>
      <HeroFirstSection/>
      <HeroSlider/>
      <Cardcategory/>
      <NewArrivel/>
      <Recomended/>
    </div>
  )
}

export default Home
