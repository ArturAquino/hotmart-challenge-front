import axios from 'axios'

export const getHeaderData = () => {
    return axios.get('/api/header').then(response => {
        return response.data
    }).catch(error => { throw error })
}

export const getTimelineData = () => {
    return axios.get('/api/timeline').then(response => {
        return response.data
    }).catch(error => { throw error })
}

export const getSidebarData = () => {
    return axios.get('/api/sidebar').then(response => {
        return response.data
    }).catch(error => { throw error })
}

export const sendExpenseData = (body) => {
    return axios.put('/api/expense/add', body)
}