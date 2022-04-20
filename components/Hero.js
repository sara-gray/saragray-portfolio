import Image from 'next/image'

const Hero = () => {
	return (
		<main className=''>
			<section className='text-primary-plum font-semibold capitalize  '>
				<p>simply built and enjoyed</p>
				<p>Trustworthy and reliable code</p>
			</section>
			{/* <section className='relative w-screen h-full mt-12 z-0 ring-2'>
				<div className='relative w-full h-full'>
					<Image src='/assets/laptop.jpg' alt='' width={2508} height={1672} />
				</div>
				<div className='absolute inset-0 w-screen h-full bg-black/60'></div>
			</section> */}
			{/* <h3 className='text-black text-2xl md:text-4xl'>say something else</h3> */}
		</main>
	)
}

export default Hero
