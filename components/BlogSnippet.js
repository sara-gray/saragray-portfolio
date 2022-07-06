
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'

export const BlogSnippet = ({ post }) => {

  const { slug, title, mainImage } = post

  const image = mainImage
    ? urlFor(mainImage).width(600).height(600).url()
    : null

  return (
    <Link href={`/posts/${slug}`} replace>
      <div className="relative hover:scale-105 transition duration-200 rounded-lg h-auto max-h-80 square flex justify-center items-center text-white text-2xl">
        {
          image && (
            <Image
              src={image}
              alt={`Image for ${title} post`}
              layout='fill'
              objectFit='contain'
              className='rounded-lg'
            />
          )
        }
        <div className='absolute inset-0 bg-stone-900/70 text-primary-kharki w-full h-full z-50'>
          <span className='rounded-lg px-4 pb- bg-primary-plum text-primary-kharki'>
            {title}
          </span>
        </div>
      </div>
    </Link>
  )
}

