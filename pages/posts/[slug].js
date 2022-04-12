import { useRouter } from 'next/router'

import { getAllPostsWithSlug, getPost } from '@/lib/api'
import { urlFor } from '@/lib/sanity'

import ErrorPage from '@/components/ErrorPage'
import Layout from '@/components/Layout'
import Header from '@/components/Header'

const Post = ({ post }) => {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	if (!post) return <ErrorPage statusCode={500} />

	console.log(post)
	const { title, mainImage } = post
	const image = mainImage
		? urlFor(mainImage).width(1240).height(540).url()
		: null

	return (
		<Layout>
			<Header image={image} title={title} />
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
