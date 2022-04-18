import React from 'react'
import { Container } from './style'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { data } from '../utils/navbar'
import { NotFound } from '../pages/NotFound'

export const Root = () => {
  return (
    <Router>
        <Container>
            <Routes>
                <Route element={<Navbar />}>
                    {data.map((item) => (
                        <Route key={item.id} path={item.path} element={item.element} />
                    ))}
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Container>
    </Router>
  )
}
