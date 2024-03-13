import {Link} from 'react-router-dom'
import './NotFound.css'

const NotFound = () => (
  <div className="NotFound-bg">
    <Link to="/">
      <button type="submit">Home Page</button>
    </Link>
    <img
      src="https://res.cloudinary.com/db8vtnzr6/image/upload/v1710076936/igb0v9hsox9bnbywtqmg.png"
      alt="page not found"
      className="notfound-image"
    />
    <h1 className="heading">PAGE NOT FOUND</h1>
  </div>
)

export default NotFound
