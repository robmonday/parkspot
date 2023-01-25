import axios from 'axios'
const baseUrl = '/api/sites'

const getAll = async () => {
  const req = await axios.get(baseUrl)
  return req.data
}

const getOne = async (id) => {
  const req = await axios.get(`${baseUrl}/${id}`)
  return req.data
}

export default { getAll, getOne }
