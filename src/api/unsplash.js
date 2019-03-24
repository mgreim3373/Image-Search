import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 313fc178b66712746730c3177fc62526a08dab14162618d6f973cb3503eedabf'
  }
})
