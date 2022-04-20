import Image from 'next/image'

const Landing = () => {
	return (
		<main className='relative inset-0 bg-white'>
			<section className='bg-gray-900 w-full flex flex-row '>
				<div className='w-1/2 flex-none'>
					<h3 className='mx-6 md:mx-12 lg:mx-24 pt-12 text-white font-semibold text-2xl md:text-4xl'>
						saragray.dev
					</h3>
					<h1 className='mx-6 md:mx-12 lg:mx-24 py-12 md:pt-36 lg:pt-52 w-[25%] text-gray-500 text-2xl'>
						Dedicated, intuitive, <span className='text-white'>expert</span>
					</h1>
					<p className='relative bottom-[15%] z-10 bg-primary-plum/50 w-[50%] h-7 block'></p>
				</div>
				<div className='relative w-full flex-1'>
					<Image
						src='/assets/logo.png'
						alt='sara gray logo'
						layout='fill'
						objectFit='cover'
					/>
					<div className='absolute bottom-4 right-8 md:right-12 text-white uppercase text-[0.6rem] origin-bottom-right rotate-90'>
						simply built and enjoyed
					</div>
				</div>
			</section>
			<h3 className='mx-6 md:mx-12 lg:mx-24 py-8 text-stone-800 font-semibold text-2xl md:text-4xl'>
				saragray.dev
			</h3>
		</main>
	)
}

export default Landing
