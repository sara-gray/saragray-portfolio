import GoHome from '@/components/GoHome'
import Layout from '@/components/Layout'
import { getAllPostTitles } from '@/lib/api'

const readmore = ({ posts }) => {
	return (
		<main className='bg-stone-900 w-screen h-screen overflow-x-hidden'>
			<Layout title={'Thought and ideas'}>
				<GoHome />
				<main className='grid place-items-center min-h-screen'>

					<div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4">
						<h1 className='text-4xl font-semibold text-stone-100 xs:grid xs:gap-4 xs:col-span-2 md:col-span-3 md:text-5xl md:grid-cols-3'>Posts</h1>
						<p className='text-stone-300 xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg'><span className='md:col-span-2'>
							Here are some of my thought which are hopefully useful posts for you also. More will appear over time, as I tend to blog about the recent things I have been learning about.
						</span>
						</p>
						<div className="h-16 hover:scale-105 transition duration-200 bg-blue-500 rounded-lg xs:h-auto xs:square flex justify-center items-center text-white text-2xl">{posts[0].title}</div>
						<div className="h-16 hover:scale-105 transition duration-200 bg-pink-500 rounded-lg xs:h-auto xs:square"></div>
						<div className="h-16 hover:scale-105 transition duration-200 bg-blue-500 rounded-lg xs:h-auto xs:square"></div>
						<div className="h-16 hover:scale-105 transition duration-200 md:col-start-2 bg-pink-500 rounded-lg xs:h-auto xs:square"></div>
						<div className="h-16 hover:scale-105 transition duration-200 bg-blue-500 rounded-lg xs:h-auto xs:square"></div>
						<div className="h-16 hover:scale-105 transition duration-200 bg-pink-500 rounded-lg xs:h-auto xs:square"></div>
						<div className="h-16 hover:scale-105 transition duration-200 bg-blue-500 rounded-lg xs:h-auto xs:square"></div>
						<div className="h-16 hover:scale-105 transition duration-200 bg-pink-500 rounded-lg xs:h-auto xs:square"></div>
						<p className='text-stone-300 self-center  md:text-lg md:col-span-2 px-4'>... this page is not complete but will be soon.</p>
					</div>
				</main>
			</Layout >
		</main >
	)
}

export default readmore



export async function getStaticProps() {
	const posts = await getAllPostTitles()
	return {
		props: { posts },
	}
}
