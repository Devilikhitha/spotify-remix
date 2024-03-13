import {Component} from 'react'
import './NewReleases.css'

class NewReleasesList extends Component {
  state = {
    newReleasesData: [],
  }

  componentDidMount() {
    this.getNewReleasesData()
  }

  getNewReleasesData = async () => {
    try {
      const response = await fetch(
        'https://apis2.ccbp.in/spotify-clone/new-releases',
      )
      if (!response.ok) {
        throw new Error('Failed to fetch new releases data')
      }
      const data = await response.json()
      const newReleases = data.albums.items.map(item => ({
        id: item.id,
        name: item.name,
        imageUrl: item.images.length > 0 ? item.images[0].url : null,
        externalUrl: item.external_urls.spotify, // Get the external URL
      }))
      this.setState({newReleasesData: newReleases})
    } catch (error) {
      console.error('Error fetching new releases data:', error)
    }
  }

  render() {
    const {newReleasesData} = this.state

    return (
      <div className="new-releases-list-container">
        {newReleasesData.map(item => (
          <a
            href={item.externalUrl}
            key={item.id}
            className="new-release-item-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="new-release-item-container">
              <img
                className="new-release-item-image"
                src={item.imageUrl}
                alt={`new-release-${item.id}`}
              />
              <p className="new-release-item-title">{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    )
  }
}

export default NewReleasesList
