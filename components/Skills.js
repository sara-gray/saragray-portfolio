const Skill = (skill) => {}

const Skills = () => {
	return (
		<main className='text-stone-500 py-24 px-36'>
			<h1 className='text-5xl'>Skills</h1>
			<section className='grid-cols-2 gap-4'>
				<Skill />
			</section>
		</main>
	)
}

export default Skills

export async function getStaticProps() {
	const skills = await getPost(params.slug)
	return {
		props: {
			skills: skills ? skills : null,
		},
	}
}
