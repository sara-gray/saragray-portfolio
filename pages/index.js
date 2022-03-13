import Head from 'next/head'
import Centre from '../components/Centre'
import DropMenu from '../components/DropMenu'
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
						listItems={[
							{ _id: 'b1', text: 'blog 1' },
							{ _id: 'b2', text: 'blog 2' },
						]}
					/>
				</ul>
			</header>
			<Centre />
		</main>
	)
}
