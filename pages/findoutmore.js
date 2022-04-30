import Exemplar from '@/components/Exemplar'
import Footer from '@/components/Footer'
import GoHome from '@/components/GoHome'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { getExamples, getSkills } from '@/lib/api'

const findoutmore = ({ skills, examples }) => {
	return (
		<main className='bg-stone-900 w-screen h-full'>
			<Layout title={'About our work'}>
				<GoHome />
				<Skills skills={skills} />
				<Exemplar examples={examples} />
				<Footer />
			</Layout>
		</main>
	)
}

export default findoutmore

export async function getStaticProps() {
	const skills = await getSkills()
	const examples = await getExamples()
	return {
		props: {
			skills: skills ? skills : null,
			examples: examples ? examples : null,
		},
	}
}
