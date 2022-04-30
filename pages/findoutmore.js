import Footer from '@/components/Footer'
import GoHome from '@/components/GoHome'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { getSkills } from '@/lib/api'

const findoutmore = ({ skills }) => {
	return (
		<main className='bg-stone-900 w-screen h-screen'>
			<Layout title={'About our work'}>
				<GoHome />
				<Skills skills={skills} />
				<Footer />
			</Layout>
		</main>
	)
}

export default findoutmore

export async function getStaticProps() {
	const skills = await getSkills()
	return {
		props: {
			skills: skills ? skills : null,
		},
	}
}
