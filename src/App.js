import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Submenu } from './components'
import { Home, Cart, Products, SingleProduct, About, Error, Checkout, Private, Category, AuthWrapper } from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Submenu />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/category/:text'>
            <Category />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />} />

          <Private exact path='/checkout'>
            <Checkout />
          </Private>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
