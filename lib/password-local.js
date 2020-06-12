import Local from 'passport-local'
import { findUser } from './user'

export const localStrategy = new Local.Strategy(function (
  username,
  password,
  done
) {
  console.log('Local.Strategy', username, password)
  findUser({ username, password })
    .then((user) => {
      console.log('user=', user)
      done(null, user)
    })
    .catch((error) => {
      done(error)
    })
})
