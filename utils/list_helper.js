const dummy = () => {
  return 1
}

const totalLikes = (posts) => {
  let total = 0
  posts.forEach(post => {
    total += post.likes
  })
  return total
}

const favouriteBlog = (posts) => {
  let mostLiked
  let likes = 0
  posts.forEach(post => {
    if (post.likes > likes) {
      likes = post.likes
      mostLiked = post
    }
  })
  return (({ title,author,likes }) => ({ title,author,likes }))(mostLiked)
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}