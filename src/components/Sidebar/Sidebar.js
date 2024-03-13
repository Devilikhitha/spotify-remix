// import './Sidebar.css' // Import CSS file for styling

// const SideBar = () => (
//   <div className="sidebar-container">
//     <div className="music">
//       <img
//         src="https://res.cloudinary.com/db8vtnzr6/image/upload/v1709903637/music_pqdcmp.png"
//         alt="website logo"
//         className="music-image"
//       />
//     </div>
//     <div className="logout">
//       <img
//         src="https://res.cloudinary.com/db8vtnzr6/image/upload/v1710261821/log-out-04_hskjkq.png"
//         alt="logout"
//       />
//       <button type="submit" className="logout-btn">
//         Logout
//       </button>
//     </div>
//   </div>
// )

// export default SideBar

import './Sidebar.css'

const SideBar = () => (
  <div className="sidebar-container">
    <div className="music">
      <img
        src="https://res.cloudinary.com/db8vtnzr6/image/upload/v1709903637/music_pqdcmp.png"
        alt="website logo"
        className="music-image"
      />
    </div>
    <div className="logout">
      <img
        src="https://res.cloudinary.com/db8vtnzr6/image/upload/v1710261821/log-out-04_hskjkq.png"
        alt="logout"
        className="logout-image"
      />
      <button type="submit" className="logout-btn">
        Logout
      </button>
    </div>
  </div>
)

export default SideBar
