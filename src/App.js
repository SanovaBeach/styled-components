import {Navbar, Footer} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './GlobalStyles.style'

import Home from './pages/HomePage/Home'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import Signup from './pages/SignUp/Signup'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
      <Router>
        <GlobalStyle />
        <ScrollToTop/>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={Signup} />
        </Switch>
        <Footer />
      </Router>
    );
}

export default App;
