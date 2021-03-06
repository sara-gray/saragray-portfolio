import Image from 'next/image'

const Landing = () => {
	return (
		<main className='relative inset-0 bg-white'>
			<section className='bg-gray-900 w-full flex flex-row '>
				<div className='w-1/2 flex-none'>
					<h3 className='mx-6 md:mx-12 lg:mx-24 xl:mx-48 pt-12 xl:pt-24 text-white font-semibold text-2xl md:text-4xl xl:text-7xl'>
						saragray.dev
					</h3>
					<h1 className='mx-6 md:mx-12 lg:mx-24 xl:mx-48 py-12 md:pt-30 lg:pt-40 xl:pt-72 w-[25%] text-gray-500 text-2xl xl:text-5xl'>
						Dedicated, intuitive, <span className='text-white'>expert</span>
					</h1>
					<p className='relative bottom-[15%] lg:bottom-[18%] xl:bottom-[14%] z-10 bg-primary-plum/50 w-[50%] h-7 xl:h-12 block'></p>
				</div>
				<div className='relative w-full flex-1'>
					<Image
						src='/assets/logo.png'
						alt='sara gray logo'
						layout='fill'
						objectFit='cover'
					/>
					<div className='absolute bottom-4 right-8 md:right-12 xl:mr-24 text-white uppercase text-[0.6rem] xl:text-[1rem] origin-bottom-right rotate-90'>
						simply built and enjoyed
					</div>
				</div>
			</section>
			<h3 className='py-8 text-stone-800 font-semibold mx-6 md:mx-12 lg:mx-24 xl:mx-48 pt-12 xl:pt-24  text-2xl md:text-4xl xl:text-7xl'>
				saragray.dev
			</h3>
		</main>
	)
}

export default Landing
