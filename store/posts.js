const createdTime = () => {
  let date = new Date()
  const [ fullDate, ] = date.toString().split('GMT')
  return fullDate + `'${new Date().getSeconds()}`
}
const posts = [
  { title: 'Post 1', date: createdTime(), views: 834, comments: [1, 2], _id: '123' },
  { title: 'Post 2', date: createdTime(), views: 274, comments: [1, 2], _id: '322' },
  { title: 'Post 3', date: createdTime(), views: 564, comments: [1, 2], _id: '122' },
  { title: 'Post 4', date: createdTime(), views: 143, comments: [1, 2], _id: '311' }
]
export const actions = {
  async fetchAdminPosts ({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 500)
    })
  },
  async fetchAdminPostById ({}, { id }) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(item => item._id === id))
      }, 500)
    })
  },
  async createPost ({ dispatch }, data ) {
    const { title, text, image} = data
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image)
    } catch (e) {
      dispatch('openNotification', e, { root: true })
      throw e
    }
  }
}
