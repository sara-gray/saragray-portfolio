import { useRouter } from 'next/router'

import { getAllPostsWithSlug, getPost } from '@/lib/api'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

import ErrorPage from '@/components/ErrorPage'
import Layout from '@/components/Layout'
import Header from '@/components/Header'

/**
 * * Post React Componant
 * * Dispays a post
 * @param {post}  - the selected post to display
 * @returns - componant
 */
const Post = ({ post }) => {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />
	if (!post) return <ErrorPage statusCode={500} />

	console.log(post)

	const { title, mainImage, body, author, updatedAt } = post
	const image = mainImage
		? urlFor(mainImage).width(1240).height(540).url()
		: null

	// `components` object you'll pass to PortableText
	const components = {
		block: {
			h1: ({ children }) => <h1 className="text-2xl lg:text-4xl font-semibold mb-4">{children}</h1>,
			h4: ({ children }) => <h1 className="text-xl lg:text-2xl font-semibold">{children}</h1>,
			blockquote: ({ children }) => <blockquote className="border-l-primary-plum">{children}</blockquote>,

			customHeading: ({ children }) => <h2 className="text-lg text-primary text-purple-700">{children}</h2>,
		},
		list: {
			// Ex. 1: customizing common list types
			bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
			number: ({ children }) => <ol className="mt-lg">{children}</ol>,

			// Ex. 2: rendering custom lists
			checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
		},
	}

	return (
		<Layout>
			<Header image={image} title={title} />
			<aside className='absolute top-1/2'>

				<section className='relative my-12 w-5/6 lg:w-2/3 mx-auto text-black'>

					<PortableText
						value={body}
						components={components}
					/>

				</section>
			</aside>
		</Layout>
	)
}

export default Post

export async function getStaticProps({ params }) {
	const post = await getPost(params.slug)
	return {
		props: {
			post: post ? post[0] : null,
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

