// // import {Link} from 'react-router-dom'
// // // import './index.css'

// // const PlaylistItem = props => {
// //   const {playlistData} = props
// //   const {id, imageUrl, name, description, owner, totalTracks} = playlistData

// //   return (
// //     <Link to={`/playlists/${id}`} className="item-link">
// //       <div className="item-container">
// //         <img className="item-image" src={imageUrl} alt={`playlist${id}`} />
// //         <div className="item-info">
// //           <p className="item-title">{name}</p>
// //           <p className="item-description">{description}</p>
// //           <div className="owner-info">
// //             <p className="owner-name">Owner: {owner}</p>
// //             <p className="total-tracks">Total Tracks: {totalTracks}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </Link>
// //   )
// // }

// // export default PlaylistItem

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
//         <h1 style={{display: 'inline-block'}}>Editors Pick</h1>
//         <br /> {/* Add line break here */}
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

// import React, {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// // import './index.css'

// class PlaylistDetails extends Component {
//   state = {
//     playlistData: {},
//     isLoading: true,
//   }

//   componentDidMount() {
//     this.getPlaylistDetails()
//   }

//   getPlaylistDetails = async () => {
//     const {match} = this.props
//     const {params} = match
//     const {id} = params

//     try {
//       const response = await fetch(
//         `https://apis2.ccbp.in/spotify-clone/playlists-details/${id}`,
//       )
//       if (!response.ok) {
//         throw new Error('Failed to fetch playlist details')
//       }
//       const data = await response.json()
//       this.setState({playlistData: data, isLoading: false})
//     } catch (error) {
//       console.error('Error fetching playlist details:', error)
//       this.setState({isLoading: false})
//     }
//   }

//   renderPlaylistDetails = () => {
//     const {playlistData} = this.state
//     const {name, description, imageUrl, owner, totalTracks} = playlistData

//     return (
//       <div className="playlist-details-container">
//         <img className="playlist-image" src={imageUrl} alt={name} />
//         <div className="playlist-info">
//           <h2 className="playlist-title">{name}</h2>
//           <p className="playlist-description">{description}</p>
//           <p className="playlist-owner">Owner: {owner}</p>
//           <p className="playlist-total-tracks">Total Tracks: {totalTracks}</p>
//         </div>
//       </div>
//     )
//   }

//   render() {
//     const {isLoading} = this.state

//     return (
//       <div className="playlist-details">
//         {isLoading ? (
//           <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
//         ) : (
//           this.renderPlaylistDetails()
//         )}
//       </div>
//     )
//   }
// }

// export default PlaylistDetails

import {Component} from 'react'

class PlaylistDetails extends Component {
  state = {
    playlistData: {},
  }

  componentDidMount() {
    this.getPlaylistDetails()
  }

  getPlaylistDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    try {
      const response = await fetch(
        `https://apis2.ccbp.in/spotify-clone/playlists/${id}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch playlist details')
      }
      const data = await response.json()
      this.setState({playlistData: data})
    } catch (error) {
      console.error('Error fetching playlist details:', error)
    }
  }

  renderPlaylistDetails = () => {
    const {playlistData} = this.state
    const {name, description, imageUrl, owner, totalTracks} = playlistData

    return (
      <div className="playlist-details-container">
        <img className="playlist-image" src={imageUrl} alt={name} />
        <div className="playlist-info">
          <h2 className="playlist-title">{name}</h2>
          <p className="playlist-description">{description}</p>
          <p className="playlist-owner">Owner: {owner}</p>
          <p className="playlist-total-tracks">Total Tracks: {totalTracks}</p>
        </div>
      </div>
    )
  }

  render() {
    // const { isLoading } = this.state

    return (
      <div className="playlist-details">{this.renderPlaylistDetails()}</div>
    )
  }
}

export default PlaylistDetails
