import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

const Skill = ({ skill }) => {
	const { _id, name, image, confidence } = skill

	return (
		<div
			key={_id}
			className='w-[6rem] h-32 flex flex-col justify-center items-center'>
			<p>{name}</p>
			{image && (
				<Image
					src={urlFor(image).size(60).url()}
					alt={`${name} icon`}
					width={60}
					height={60}
				/>
			)}
			<div className='mt-4 border-b-4 border-stone-800 flex flex-row'>
				<div
					className='border-b-4 border-primary-pink'
					style={{ width: `${confidence}rem` }}></div>
				<div
					className='border-b-4 border-stone-700'
					style={{ width: `${5 - confidence}rem` }}></div>
			</div>
		</div>
	)
}

const Skills = ({ skills }) => {
	return (
		<main className='text-stone-500 py-4 lg:py-24 px-8 lg:px-36 w-screen'>
			<h1 className='text-5xl'>Skills</h1>
			<section className='flex flex-wrap justify-start items-center gap-4 mt-12'>
				{skills.map((skill) => {
					return <Skill key={skill._id} skill={skill} />
				})}
			</section>
		</main>
	)
}

export default Skills
