import Image from 'next/image'

import { getAllPostsForHome } from '@/lib/api'
import Layout from '@/components/Layout'

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
			<main className='absolute inset-0 bg-gray-900 w-screen h-[80%]'>
				<h3 className='relative mt-12 ml-12 text-white text-4xl'>sara.gray</h3>
				<div className='absolute top-0 right-0 w-[60%] h-full'>
					<div className='relative w-full h-full'>
						<Image
							src='/assets/logo.png'
							alt='sara gray logo'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
				<div className='absolute bottom-[20%] right-[1%] text-white uppercase text-xs transform rotate-90'>
					simply built and enjoyed
				</div>
				<p className='absolute z-10 bottom-14 bg-logo-kharki w-32 h-8'></p>
				<h1 className='relative z-20 mt-24 ml-12 w-[30%] h-full text-gray-500 text-2xl'>
					Dedicated, intuitive, somewhat determined{' '}
					<spa className='text-gray-900'>expert</spa>
				</h1>
			</main>
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
