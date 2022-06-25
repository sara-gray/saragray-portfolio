
import Layout from '@/components/Layout'
import Landing from '@/components/Landing'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getAllPostTitles } from '@/lib/api'

export default function Home({ posts }) {

	return (
		<Layout>
			<main className='absolute inset-0 bg-white w-screen overflow-y-auto overflow-x-hidden'>
				<Landing />
				<Hero />
				<Contact blogList={posts} />
				<Footer />
			</main>
		</Layout>
	)
}


export async function getStaticProps() {
	const posts = await getAllPostTitles()
	return {
		props: { posts },
	}
}