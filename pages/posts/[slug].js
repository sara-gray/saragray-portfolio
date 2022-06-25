import { useRouter } from 'next/router'

import { getAllPostsWithSlug, getPost } from '@/lib/api'
import { urlFor } from '@/lib/sanity'
import BlockContent from '@sanity/block-content-to-react'

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

	// Displays bullets in BlockContent
	const bullet = (props) => {
		return (
			<li
				style={{
					listStyleType: 'disc',
					listStylePosition: 'inside',
					marginLeft: '20px',
				}}>
				{props.children}
			</li>
		)
	}

	return (
		<Layout>
			<Header image={image} title={title} />
			<section className='absolute top-1/2 max-w-xl mx-auto text-black ring-2 w-1/2'>

				<BlockContent
					blocks={body}
					serializers={{ listItem: bullet }}
				/>
			</section>
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

