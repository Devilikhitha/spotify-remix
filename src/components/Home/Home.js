// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
// import './Home.css'
// import SideBar from '../Sidebar/Sidebar'

// const Home = () => {
//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }
//   return (
//     <div className="bg">
//       <SideBar />
//       <h1>Welcome to the Home Page! lorium</h1>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'
import './Home.css'
import SideBar from '../Sidebar/Sidebar'
import PlaylistsList from '../featuredPlaylistsApiUrl/EditorsPick'
import CategoriesList from '../categoriesApiUrl/CategoryList'
import NewReleasesList from '../newReleasesApiUrl/newreleases'

class Home extends React.Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    const {location} = this.props

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    if (location.pathname === '/login') {
      return (
        <div className="bg">
          <h1>Editor</h1>
        </div>
      )
    }

    return (
      <div className="bg">
        <SideBar />
        <h1>Editors Picks</h1>
        <PlaylistsList />
        <h1>Genres & Moods</h1>
        <CategoriesList />
        <h1>New Releases</h1>
        <NewReleasesList />
      </div>
    )
  }
}

export default withRouter(Home)
