import { getAllPostsForHome } from '@/lib/api'
import Layout from '@/components/Layout'
import Landing from '@/components/Landing'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
			<main className='absolute inset-0 bg-white w-screen'>
				<Landing />
				<Hero />
				<Contact />
				<Footer />
			</main>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPosts = await getAllPostsForHome()
	return {
		props: { allPosts },
	}
}
