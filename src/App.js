// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import LoginForm from './components/Login/Login'
// import Home from './components/Home/Home'
// import NotFound from './components/NotFound/NotFound'
// import PlaylistDetails from './components/PlaylistDetails/PlaylistDetails'
// import './App.css'

// const App = () => (
//   <Router>
//     <Route path="/" exact component={Home} />
//     <Route path="/playlists/:id" exact component={PlaylistDetails} />
//     <Route path="/login" exact component={LoginForm} />
//     <Route component={NotFound} />
//   </Router>
// )

// export default App

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import LoginForm from './components/Login/Login'
import PlaylistDetails from './components/PlaylistDetails/PlaylistDetails'
import NotFound from './components/NotFound/NotFound'
import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={LoginForm} />
      <Route path="/playlists/:id" component={PlaylistDetails} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
