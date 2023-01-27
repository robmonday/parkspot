import axios from 'axios'
const baseUrl = '/api/users'

const getAll = async () => {
  const req = await axios.get(baseUrl)
  return req.data
}

const getOne = async (id) => {
  const req = await axios.get(`${baseUrl}/${id}`)
  return req.data
}

const createUser = async (credentials) => {
  const req = await axios.post(baseUrl, credentials)
  console.log(credentials)
  return req.data
}

export { getAll, getOne, createUser }
