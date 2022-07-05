import { useRouter } from 'next/router'

import { gePreviousAndNextPost, getAllPostsWithSlug, getPost } from '@/lib/api'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

import ErrorPage from '@/components/ErrorPage'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FlashButton from '@/components/FlashButton'

/**
 * * Post React Componant
 * * Dispays a post
 * @param {post}  - the selected post to display
 * @returns - componant
 */
const Post = ({ post, previousPost, nextPost }) => {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />
	if (!post) return <ErrorPage statusCode={500} />

	const { title, mainImage, body, author, updatedAt } = post
	const image = mainImage
		? urlFor(mainImage).width(1240).height(540).url()
		: null

	const components = {
		marks: {
			em: ({ children }) => <em className="text-primary-pink font-semibold">{children}</em>,
			link: ({ value, children }) => {
				const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
				return (
					<a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className="text-primary-pink font-bold hover:text-primary-kharki">
						{children}
					</a>
				)
			},
		},
		block: {
			h1: ({ children }) => <h1 className="text-2xl lg:text-4xl font-semibold mt-12 mb-4">{children}</h1>,
			h3: ({ children }) => <h3 className="text-xl lg:text-2xl font-semibold mt-8 mb-4">{children}</h3>,
			p: ({ children }) => <p className="text-lg lg:textxl leading-loose my-4">{children}</p>,
			blockquote: ({ children }) => <blockquote className="border-l-primary-pink border-transparent border-4 rounded italic px-4 m-4">{children}</blockquote>,
		},
		list: {
			bullet: ({ children }) => <ul className="text-primary-pink font-semibold list-link mt-xl">{children}</ul>,
			number: ({ children }) => <ol className="list-decimal mt-lg">{children}</ol>,
		},
	}

	return (
		<Layout title={title}>

			<div className='absolute inset-0 w-full h-full overflow-x-hidden'>
				<Header image={image} title={title} />
				<nav className=' w-5/6 lg:w-1/2 mx-auto flex justify-between m-4'>
					<FlashButton buttonText='Previous' goTo={previousPost ? `/posts/${previousPost}` : null} />
					<FlashButton buttonText='All' goTo='/readmore' />
					<FlashButton buttonText='Next' goTo={nextPost ? `/posts/${nextPost}` : null} />
				</nav>
				<aside className='my-24 w-5/6 lg:w-1/2 mx-auto text-black'>
					<PortableText
						value={body}
						components={components}
					/>
				</aside >
				<Footer />
			</div >
		</Layout>
	)
}

export default Post

export async function getStaticProps({ params }) {
	const post = await getPost(params.slug)
	const data = await gePreviousAndNextPost(params.slug)
	return {
		props: {
			post: post ? post[0] : null,
			previousPost: data.previousPost ? data.previousPost : null,
			nextPost: data.nextPost ? data.nextPost : null,
		},
	}
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug()
	return {
		paths:
			allPosts?.map((post) => ({
				params: {
					slug: post.slug,
				},
			})) || [],
		fallback: true,
	}
}

