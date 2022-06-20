import Exemplar from '@/components/Exemplar'
import GoHome from '@/components/GoHome'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { getExamples, getSkills } from '@/lib/api'

const findoutmore = ({ skills, examples }) => {
	return (
		<Layout title={'About our work'}>
			<main className='bg-stone-900 w-full h-full min-h-screen overflow-y-auto overflow-x-hidden'>
				<GoHome />
				<Skills skills={skills} />
				<Exemplar examples={examples} />
			</main>
		</Layout>
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
