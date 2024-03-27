import request from './request'

export function getJoke() {
  return request({
    method: 'GET',
    url: 'https://icanhazdadjoke.com'
  })
}