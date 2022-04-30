import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

const Example = ({ example }) => {
	if (!example) return <></>
	const { name, image, link } = example

	return (
		<div
			className='relative hover:animate-pulse hover:cursor-pointer'
			data-tip={`Click to view ${name}`}
			data-background-color='#511f5a'
			data-delay-show={500}
			onClick={() => window.open(link, '_blank')}>
			<img
				alt='gallery'
				className='block object-cover object-center w-full h-full rounded-lg'
				src={urlFor(image).url()}
			/>
		</div>
	)
}

const ExampleGallery = ({ examples }) => {
	return (
		<section className='h-full'>
			<div className='px-5 py-2 mx-auto lg:pt-24 lg:px-32'>
				<div className='flex flex-wrap -m-1 md:-m-2'>
					<div className='flex flex-wrap w-1/2'>
						<div className='w-1/2 p-1 md:p-2'>
							<Example example={examples[0] ? examples[0] : null} />
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<Example example={examples[1] ? examples[1] : null} />
						</div>
						<div className='w-full p-1 md:p-2'>
							<Example example={examples[2] ? examples[2] : null} />
						</div>
					</div>
					<div className='flex flex-wrap w-1/2'>
						<div className='w-full p-1 md:p-2'>
							<Example example={examples[3] ? examples[3] : null} />
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<Example example={examples[4] ? examples[4] : null} />
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<Example example={examples[5] ? examples[5] : null} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const Exemplar = ({ examples }) => {
	return (
		<main className='text-stone-500 py-4 lg:py-24 px-8 lg:px-36 w-screen'>
			<h1 className='text-5xl'>Examples of our work</h1>
			<section className='flex flex-wrap justify-start items-center gap-4 mt-12'>
				<ExampleGallery examples={examples} />
			</section>
		</main>
	)
}

export default Exemplar
