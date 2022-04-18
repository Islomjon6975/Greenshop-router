import React from 'react'
import { Container, Main } from './style'
import main2 from '../../assets/images/home/main2.png'
import main1 from '../../assets/images/home/main1.png'

export const Home = () => {
  return (
    <Container>
      <Main>
        <Main.Welcome>Welcome to GreenShop</Main.Welcome>
        <Main.Title>Let’s Make a Better <Main.Planet> Planet</Main.Planet></Main.Title>
        <Main.Desctiption>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Main.Desctiption>
        <Main.Btn>Show Now</Main.Btn>
      </Main>
      <Main.Img1 src={main1} />
      <Main.Img2 src={main2} />
    </Container>
  )
}
