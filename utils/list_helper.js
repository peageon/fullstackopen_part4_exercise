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

module.exports = {
  dummy,
  totalLikes,
}