import axios from 'axios'
import Cookies from 'js-cookie'


export const login = e => {

}

export const logout = e => {

}

export const loggedIn = e => {
  return !! Cookies.get('logged_in')
}

export const user = async e => {
  const user = await axios('api/user')
  .then(e => {return e})
  return user
}

