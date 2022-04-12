import Head from 'next/head'
import Centre from '../components/Centre'
import DropMenu from '../components/DropMenu'
import ParticleFieldEffect from '../components/ParticleFieldEffect'
import { getAllPostsForHome } from '../lib/api'

export default function Home({ allPosts }) {
	const getBlogList = (posts) => {
		if (!posts) return []
		let blogList = posts.map((post) => {
			return { _id: post._id, text: post.title, slug: `/posts/${post.slug}` }
		})
		return blogList
	}

	return (
		<main className='bg-gray-900 w-screen h-full overflow-hidden'>
			<Head>
				<title>Sara Gray Portfolio Website</title>
				<meta name='description' content='Software development portfolio' />
			</Head>

			<div className='w-screen h-screen'>
				<ParticleFieldEffect />
			</div>

			<header className='fixed inset-0 flex flex-row justify-between items-start w-screen h-32 p-4 text-violet-600 bg-transparent text-lg z-20'>
				<DropMenu
					title='sara gray'
					tagline='react - jamstack - development'
					listItems={[
						{ _id: 'm1', text: '1' },
						{ _id: 'm2', text: '2' },
						{ _id: 'm3', text: '3' },
						{ _id: 'm4', text: '4' },
						{ _id: 'm5', text: '5' },
					]}
				/>
				<ul className='flex flex-row gap-4 lg:gap-24 px-12'>
					<DropMenu
						title='portfolio'
						listItems={[
							{ _id: 'p1', text: 'Panda&Me' },
							{ _id: 'p2', text: 'SavingPots' },
						]}
					/>
					<DropMenu
						title='sara gray'
						tagline='react - jamstack - development'
						listItems={getBlogList(allPosts)}
					/>
				</ul>
			</header>
			<Centre />
		</main>
	)
}

export async function getStaticProps() {
	const allPosts = await getAllPostsForHome()
	return {
		props: { allPosts },
	}
}
