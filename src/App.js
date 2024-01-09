import React from 'react'
import About from './About'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import TodoList2 from './TodoList2'
import { Button } from 'semantic-ui-react'
import NewsAPI2 from './NewsAPI2'

export default function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainmenu />}>
          <Route element={<About />} path='' />
          <Route element={<About />} path="about" />
          <Route element={<Contact />} path="contact" />
          <Route element={<TodoList2 />} path="TodoList2" />
          <Route element={<NewsAPI2 />} path="NewsAPI2" />




        </Route>

      </Routes>
    </BrowserRouter>
  </>

  )
}



function Mainmenu() {
  return (<>
    <div>
      <Link to='/'><Button color='blue'>Home</Button></Link>
      <Link to='/about'><Button color='blue'>About</Button></Link>
      <Link to='/contact'><Button color='blue'>Contact</Button></Link>
      <Link to='/TodoList2'><Button color='blue'>TodoList2</Button></Link>
      <Link to='/NewsAPI2'><Button color='blue'>NewsAPI2</Button></Link>
    </div>
    <hr />
    <Outlet />
  </>
  )
}
