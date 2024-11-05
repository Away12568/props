import React from 'react'
import "./Header.scss"
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'


const Header = () => {
  return (
    <>
      <Footer> транспорт </Footer> 
      <div className="wrap">
          <Hero name="парашок" img="/card-1.jpg"/>
          <Hero name="кокаин"  img="https://imgtest.mir24.tv/uploaded/images/crops/2022/November/870x489_0x101_detail_crop_20221119170534_276b1bde_86eaa1c967ffae1b09b91eaebc4e6e3f3f8ced1f02ea2c08b5d9952bb93595d6.jpg"  />

          <Hero name="белая полоса"
          img="https://ugodie.ru/upload/medialibrary/6c3/6c334fbdc1bb4f11a7072f14a7b5f509.jpg" />

          <Hero name="soon"
           />
      </div>
    </>
  )
}

export default Header
