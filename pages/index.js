import Head from 'next/head'
import Centre from '../components/Centre'
import ParticleFieldEffect from '../components/ParticleFieldEffect'

export default function Home() {
	return (
		<main className='bg-gray-900 w-screen h-screen overflow-hidden'>
			<Head>
				<title>Sara Gray Portfolio Website</title>
				<meta name='description' content='Software development portfolio' />
			</Head>

			<div className='w-screen h-screen'>
				<ParticleFieldEffect />
			</div>

			<header className='fixed inset-0 flex flex-row justify-between items-start w-screen h-32 p-4 text-violet-600 bg-transparent text-3xl'>
				<div className='bg-black bg-opacity-50 text-center p-2 rounded-lg hover:bg-opacity-100'>
					Sara Gray
					<p className='text-base text-opacity-50'>
						react - jamstack - development
					</p>
				</div>
				<ul className='flex flex-row gap-8'>
					<li>Portfolio</li>
					<li>Blog</li>
				</ul>
			</header>
			<Centre />
		</main>
	)
}
