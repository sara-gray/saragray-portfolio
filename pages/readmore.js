import Footer from '@/components/Footer'
import GoHome from '@/components/GoHome'
import Layout from '@/components/Layout'

const readmore = () => {
	return (
		<main className='bg-stone-900 w-screen h-screen'>
			<Layout title={'About our work'}>
				<GoHome />
				<h1 className='text-4xl text-gray-600 w-screen h-screen flex justify-center items-center'>
					Coming soon...
				</h1>
				<Footer />
			</Layout>
		</main>
	)
}

export default readmore
