import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../utils/navbar'
import { Container, Wrapper } from './style'

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Wrapper.Logo />
            <Wrapper.Greenshop  />
        </Wrapper>
        <Wrapper>
            {
                data.map((item) => (
                    <Link to={item.path} className='navitem'>{item.title}</Link>
                ))
            }
        </Wrapper>
        <Wrapper>
            <Wrapper.Search />
            <Wrapper.BasketWrapper>
                <Wrapper.Count>6</Wrapper.Count>
                <Wrapper.Basket />
            </Wrapper.BasketWrapper>
            <Wrapper.Login>
                <Wrapper.Logout />
                Login
            </Wrapper.Login>
            <Wrapper.Menu />
        </Wrapper>
    </Container>
  )
}
