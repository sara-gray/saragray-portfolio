import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

const Skill = ({ skill }) => {
	const { _id, name, image, confidence } = skill

	return (
		<div
			key={_id}
			className='w-[6rem] h-32 flex flex-col justify-center items-center'>
			{name}
			{image && (
				<Image
					src={urlFor(image).size(60).url()}
					alt={`${name} icon`}
					width={60}
					height={60}
				/>
			)}
			<div
				className='mt-4 px-2 border-b-4 border-primary-pink'
				style={{ width: `${confidence}rem` }}></div>
			<div
				className='mt-4 px-2 border-b-4 border-primary-pink'
				style={{ width: `${confidence}rem` }}></div>
		</div>
	)
}

const Skills = ({ skills }) => {
	return (
		<main className='text-stone-500 py-24 px-36'>
			<h1 className='text-5xl'>Skills</h1>
			<section className='flex flex-row justify-start items-center gap-4 mt-12'>
				{skills.map((skill) => {
					return <Skill skill={skill} />
				})}
			</section>
		</main>
	)
}

export default Skills
