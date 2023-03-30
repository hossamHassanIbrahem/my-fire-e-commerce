import React, { Fragment } from 'react'
import Slider from '../../Components/Slider/Slider'
import InternalNav from '../InternalNav/InternalNav'
import ProjectNav from '../Nav/ProjectNav'

function Header() {
  return (  <Fragment>
    <ProjectNav />
    <InternalNav />
    <Slider />
    </Fragment>
  )   
}

export default Header