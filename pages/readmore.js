import GoHome from '@/components/GoHome'
import Layout from '@/components/Layout'

const readmore = () => {
	return (
		<main className='bg-stone-900 w-screen h-screen overflow-x-hidden'>
			<Layout title={'Thought and ideas'}>
				<GoHome />
				<h1 className='text-4xl text-gray-600 w-screen h-screen flex justify-center items-center'>
					Coming soon...
				</h1>
			</Layout>
		</main>
	)
}

export default readmore
