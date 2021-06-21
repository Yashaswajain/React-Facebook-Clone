import axios from 'axios'
const instance=axios.create({
    baseURL:"https://facebook-backen.herokuapp.com/"
})
export default instance