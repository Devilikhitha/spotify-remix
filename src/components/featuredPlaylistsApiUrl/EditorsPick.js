// import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import PlaylistItem from '../featuredplaylistItem/PlayListItem' // Import PlaylistItem component
// import './index.css'

// class PlaylistsList extends Component {
//   state = {isLoading: true, playlistsData: []}

//   componentDidMount() {
//     this.getPlaylistsData()
//   }

//   getPlaylistsData = async () => {
//     try {
//       const response = await fetch(
//         'https://apis2.ccbp.in/spotify-clone/featured-playlists',
//       )
//       if (!response.ok) {
//         throw new Error('Failed to fetch playlists data')
//       }
//       const data = await response.json()
//       const playlists = data.playlists.items.map(item => ({
//         id: item.id,
//         name: item.name,
//         description: item.description,
//         imageUrl: item.images.length > 0 ? item.images[0].url : null,
//         owner: item.owner.display_name,
//         totalTracks: item.tracks.total,
//       }))
//       this.setState({playlistsData: playlists, isLoading: false})
//     } catch (error) {
//       console.error('Error fetching playlists data:', error)
//     }
//   }

//   render() {
//     const {playlistsData, isLoading} = this.state

//     return (
//       <div className="playlists-list-container">
//         {isLoading ? (
//           <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
//         ) : (
//           playlistsData.map(item => (
//             <PlaylistItem playlistData={item} key={item.id} />
//           ))
//         )}
//       </div>
//     )
//   }
// }

// // export default PlaylistsList

// import {Component} from 'react'
// import {Link} from 'react-router-dom'
// import './index.css'

// class PlaylistsList extends Component {
//   state = {
//     playlistsData: [],
//   }

//   componentDidMount() {
//     this.getPlaylistsData()
//   }

//   getPlaylistsData = async () => {
//     try {
//       const response = await fetch(
//         'https://apis2.ccbp.in/spotify-clone/featured-playlists',
//       )
//       if (!response.ok) {
//         throw new Error('Failed to fetch playlists data')
//       }
//       const data = await response.json()
//       const playlists = data.playlists.items.map(item => ({
//         id: item.id,
//         name: item.name,
//         imageUrl: item.images.length > 0 ? item.images[0].url : null,
//       }))
//       this.setState({playlistsData: playlists})
//     } catch (error) {
//       console.error('Error fetching playlists data:', error)
//     }
//   }

//   render() {
//     const {playlistsData} = this.state

//     return (
//       <div className="playlists-list-container">
//         {playlistsData.map(item => (
//           <Link
//             to={`/playlists/${item.id}`}
//             key={item.id}
//             className="playlist-item-link"
//           >
//             <div className="playlist-item-container">
//               <img
//                 className="playlist-item-image"
//                 src={item.imageUrl}
//                 alt={`playlist${item.id}`}
//               />
//               <p className="playlist-item-title">{item.name}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     )
//   }
// }

// export default PlaylistsList

import {Component} from 'react'
import './index.css'

class PlaylistsList extends Component {
  state = {
    playlistsData: [],
  }

  componentDidMount() {
    this.getPlaylistsData()
  }

  getPlaylistsData = async () => {
    try {
      const response = await fetch(
        'https://apis2.ccbp.in/spotify-clone/featured-playlists',
      )
      if (!response.ok) {
        throw new Error('Failed to fetch playlists data')
      }
      const data = await response.json()
      const playlists = data.playlists.items.map(item => ({
        id: item.id,
        name: item.name,
        imageUrl: item.images.length > 0 ? item.images[0].url : null,
        externalUrl: item.external_urls.spotify, // Get the external URL
      }))
      this.setState({playlistsData: playlists})
    } catch (error) {
      console.error('Error fetching playlists data:', error)
    }
  }

  render() {
    const {playlistsData} = this.state

    return (
      <div className="playlists-list-container">
        {playlistsData.map(item => (
          <a
            href={item.externalUrl} // Use the external URL as href
            key={item.id}
            className="playlist-item-link"
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Add security attribute
          >
            <div className="playlist-item-container">
              <img
                className="playlist-item-image"
                src={item.imageUrl}
                alt={`playlist${item.id}`}
              />
              <p className="playlist-item-title">{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    )
  }
}

export default PlaylistsList
