const Skill = (skill) => {
	return <div>one skill</div>
}

const Skills = ({ skills }) => {
	console.log(skills)
	return (
		<main className='text-stone-500 py-24 px-36'>
			<h1 className='text-5xl'>Skills</h1>
			<section className='grid-cols-2 gap-4'>
				<Skill skill={''} />
			</section>
		</main>
	)
}

export default Skills
