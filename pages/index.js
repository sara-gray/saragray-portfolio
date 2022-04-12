import { getAllPostsForHome } from '@/lib/api'
import Layout from '@/components/Layout'
import Landing from '@/components/Landing'

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
			<section>
				<h3 className='text-black text-4xl'>sara.gray</h3>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPosts = await getAllPostsForHome()
	return {
		props: { allPosts },
	}
}
