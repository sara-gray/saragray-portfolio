import { useState } from 'react'
import { useRouter } from 'next/router'

const BlogSelect = ({ posts }) => {
  const router = useRouter()
  const [currentPost, setCurrentPost] = useState(posts[0].title)

  const selectPost = () => {
    const post = posts.filter((search) => search.title === currentPost)[0]
    if (!post.slug) { router.push('/readmore') } else { router.push(`/posts/${post.slug}`) }
  }

  return (
    <section>
      <div className="inline-block relative w-52">
        <select onChange={(e) => setCurrentPost(e.target.value)} className="block appearance-none w-full bg-transparent text-stone-600 border border-stone-600 hover:border-stone-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {posts.map((post) => {
            return <option key={post._id}>{post.title} </option>
          })}

        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-600">
          <svg clasNames="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
      <button className='bg-stone-600 text-bg-stone-900 hover:bg-primary-pink/30 hover:text-stone-400 border-2 border-stone-700 px-4 py-2 rounded shadow leading-tight'
        onClick={() => selectPost()}
      >View</button>
    </section>
  )
}

export default BlogSelect
