import Image from 'next/image'

const Hero = () => {
	return (
		<main className=''>
			<section className='mx-6 md:mx-12 lg:mx-24 xl:mx-48 py-8 text-primary-plum'>
				<p className='text-2xl xl:text-4xl'>trustworthy reliable code</p>
			</section>
			<section className='relative w-screen h-56 lg:h-[70vh]'>
				<div className='relative w-full h-full'>
					<Image
						src='/assets/laptop.jpg'
						alt='a programmer at work'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='absolute inset-0 w-screen h-full bg-black/60'></div>
			</section>
			<h3 className='mx-6 md:mx-12 lg:mx-24 xl:mx-48 py-8 text-stone-800 text-2xl xl:text-4xl'>
				simply built and enjoyed
			</h3>
		</main>
	)
}

export default Hero
