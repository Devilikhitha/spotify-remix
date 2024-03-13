import {Component} from 'react'
import './categories.css'

class CategoriesList extends Component {
  state = {
    categoriesData: [],
  }

  componentDidMount() {
    this.getCategoriesData()
  }

  getCategoriesData = async () => {
    try {
      const response = await fetch(
        'https://apis2.ccbp.in/spotify-clone/categories',
      )
      if (!response.ok) {
        throw new Error('Failed to fetch categories data')
      }
      const data = await response.json()
      const categories = data.categories.items.map(item => ({
        id: item.id,
        name: item.name,
        imageUrl: item.icons.length > 0 ? item.icons[0].url : null,
        externalUrl: item.href, // Use the category href as the external URL
      }))
      this.setState({categoriesData: categories})
    } catch (error) {
      console.error('Error fetching categories data:', error)
    }
  }

  render() {
    const {categoriesData} = this.state

    return (
      <div className="categories-list-container">
        {categoriesData.map(item => (
          <a
            href={item.externalUrl}
            key={item.id}
            className="category-item-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="category-item-container">
              <img
                className="category-item-image"
                src={item.imageUrl}
                alt={`category-${item.id}`}
              />
              <p className="category-item-title">{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    )
  }
}

export default CategoriesList
