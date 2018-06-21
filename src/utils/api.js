import axios from 'axios'

const baseUrl = 'http://sh.jskou.com/api'
const addDiary = (data) => {
    const url = `${baseUrl}/addDiary`
    return axios.post(url, data)
}

const getAllDiary = () => {
    const url = `${baseUrl}/getAllDiary`
    return axios.get(url)
}

export default {
    addDiary,
    getAllDiary
}