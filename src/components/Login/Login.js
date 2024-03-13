import {Redirect, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './Login.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  handleUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={this.handlePasswordChange}
          required
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={this.handleUsernameChange}
          required
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.submitForm}>
          <div className="music">
            <img
              src="https://res.cloudinary.com/db8vtnzr6/image/upload/v1709903637/music_pqdcmp.png"
              alt="login website logo"
              className="music-image"
            />
            <h1 className="heading">Spotify Remix</h1>
          </div>

          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit">LOGIN</button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
