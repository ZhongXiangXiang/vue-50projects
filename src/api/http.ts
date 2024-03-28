import request from './request'

export function getJoke() {
  return request({
    method: 'GET',
    url: 'https://icanhazdadjoke.com'
  })
}

export interface MovieParams {
  sort_by?: string // sort_by=popularity.desc
  page?: number
  query?: string
}
interface MovieResult {
  page: number
  results: []
  total_pages: number
  total_results: number
}
export function getMovies(params: MovieParams): AxiosResponse<MovieResult> {
  return request({
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c',
    method: 'GET',
    params
  })
}

export function getMoviesByKeyword(params: MovieParams): AxiosResponse<MovieResult> {
  return request({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c',
    method: 'GET',
    params
  })
}