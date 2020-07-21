//  require('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js')
// const axios = require('axios')
import axios from 'axios'

function getData() {
  console.log('hello');

  axios.get('http://localhost:3000/api/device_footprint')
    .then(response => {
      console.log('response: ', response)
    })
  .catch(err=>{
    console.log('err: ', err)
  })
}
