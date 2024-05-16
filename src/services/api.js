import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchUsers = async () => {
    try {
        const { data } = await axios.get('users?limit=150')
        return data.users

    } catch (err) {
        confirm.log(err.message)
    }
}

export const fetchUserById = async (id) => {
    try {
        const { data } = await axios.get(`users/${id}`)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchPostsById = async (id) => {
    try {
        const { data } = await axios.get(`users/${id}/posts`)
        return data.posts
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchPostById = async (id) => {
    try{
        const {data} = await axios.get(`posts/${id}`)
        return data
    }catch(error) {
        console.log(error.message)
    }

}