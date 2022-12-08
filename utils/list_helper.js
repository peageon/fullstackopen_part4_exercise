const { max, _ } = require("lodash")
const { count } = require("../models/blog")

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

const mostBlogs = (posts) => {
  const countedByAuthor = _.countBy(posts, 'author')
  const mostPost = max(Object.values(countedByAuthor))
  const mostPoster = Object.keys(countedByAuthor).find(key => countedByAuthor[key] === mostPost)

  return {
    "author": mostPoster,
    "blogs": mostPost
  }
}


module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs
}