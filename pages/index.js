import Head from 'next/head'
import Image from 'next/image'
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

			<header className='absolute inset-0 z-10 flex flex-row justify-between items-start w-screen h-32  mt-4 text-violet-600 text-3xl'>
				<div className='bg-black bg-opacity-90 text-center p-2 rounded-lg'>
					Sara Gray
					<p className='text-base text-opacity-50'>
						react - jamstack - development
					</p>
				</div>
				<div className='flex-row justify-end'>
					<div>Portfolio</div>
					<div>Blog</div>
				</div>
				<div></div>
			</header>
		</main>
	)
}
