import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'

const findoutmore = () => {
	return (
		<main className='bg-stone-900 w-screen h-screen'>
			<Layout title={'About our work'}>
				<Skills />
				<Footer />
			</Layout>
		</main>
	)
}

export default findoutmore
