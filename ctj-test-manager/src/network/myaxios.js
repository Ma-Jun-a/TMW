
import axios from 'axios'
axios.defaults.baseURL = ''
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'json'


axios({
  url: 'http://127.0.0.1:5000/api/list',
  method: 'post',
  params: {
    name: '',
    pas: '  '
  }
}).then((response) => {
  console.log(response)
})

axios.all([axios({
  url:''
}),axios.post('',{

})]).then(
  (response) => {
    console.log(response[0])
    console.log(response[1])
  }
)

const instance = axios.create({
  
})
