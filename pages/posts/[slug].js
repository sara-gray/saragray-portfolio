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

	const components = {
		marks: {
			em: ({ children }) => <em className="text-primary-plum font-semibold">{children}</em>,
			link: ({ value, children }) => {
				const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
				return (
					<a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className="text-primary-plum font-bold hover:text-primary-kharki">
						{children}
					</a>
				)
			},
		},
		block: {
			h1: ({ children }) => <h1 className="text-2xl lg:text-4xl font-semibold mt-12 mb-4">{children}</h1>,
			h3: ({ children }) => <h3 className="text-xl lg:text-2xl font-semibold mt-8 mb-4">{children}</h3>,
			p: ({ children }) => <p className="text-lg lg:textxl leading-loose my-4">{children}</p>,
			blockquote: ({ children }) => <blockquote className="border-l-primary-plum border-transparent border-4 rounded italic px-4 m-4">{children}</blockquote>,
		},
		list: {
			bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
			number: ({ children }) => <ol className="mt-lg">{children}</ol>,
		},
	}

	return (
		<Layout>
			<Header image={image} title={title} />
			<aside className='absolute top-1/2'>

				<section className='relative my-12 w-5/6 lg:w-2/3 mx-auto text-black'>
					<div>
						<PortableText
							value={body}
							components={components}
						/>
					</div>

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

