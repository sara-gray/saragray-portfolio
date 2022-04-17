import Image from 'next/image'

const Hero = () => {
	return (
		<main className='bg-white w-screen '>
			<section className='bg-primary-pink w-screen h-[5%] md:h-[20%]'>
				say something
			</section>
			<section className='bg-black w-screen h-[20%] md:h-[60%] z-0'></section>
			<h3 className='text-black text-2xl md:text-4xl'>say something else</h3>
		</main>
	)
}

export default Hero
