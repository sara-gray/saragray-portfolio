import { getAllPostsForHome } from '@/lib/api'
import Layout from '@/components/Layout'
import Landing from '@/components/Landing'
import Hero from '@/components/Hero'

export default function Home({ allPosts }) {
	const getBlogList = (posts) => {
		if (!posts) return []
		let blogList = posts.map((post) => {
			return { _id: post._id, text: post.title, slug: `/posts/${post.slug}` }
		})
		return blogList
	}

	return (
		<Layout>
			<Landing />
			<Hero />
		</Layout>
	)
}

export async function getStaticProps() {
	const allPosts = await getAllPostsForHome()
	return {
		props: { allPosts },
	}
}
