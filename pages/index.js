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

			<header className='fixed inset-0 flex flex-row justify-between items-start w-screen h-32 p-4 text-violet-600 bg-transparent text-3xl z-20'>
				<div className='bg-black bg-opacity-50 text-center p-2 rounded-lg hover:bg-opacity-100'>
					Sara Gray
					<p className='text-base text-opacity-50'>
						react - jamstack - development
					</p>
				</div>
				<ul className='flex flex-row gap-4 lg:gap-24 px-12'>
					<li className='hover:text-[#58c7fa] p-2 hover:ring-2 ring-sky-400 hover:rounded-lg'>
						Portfolio
					</li>
					<li className='hover:text-[#58c7fa] p-2 hover:ring-2 ring-sky-400 hover:rounded-lg'>
						Blog
						<li style={{ listStyle: 'outside' }}>post 1</li>
						<li>post 2</li>
					</li>
				</ul>
			</header>
			<Centre />
		</main>
	)
}
