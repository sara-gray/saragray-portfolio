
import Link from 'next/link'

export const BlogSnippet = ({ post }) => {
  const { slug, title } = post
  return (
    <Link href={`/posts/${slug}`} replace>
      <div className="h-16 hover:scale-105 transition duration-200 bg-blue-500 rounded-lg xs:h-auto xs:square flex justify-center items-center text-white text-2xl">{title}</div>
    </Link>
  )
}