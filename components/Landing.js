import Image from 'next/image'

const Landing = () => {
	return (
		<main className='bg-white w-screen h-screen overflow-hidden'>
			<section className='absolute inset-0 bg-gray-900 w-screen h-[30%] md:h-[80%] z-0'>
				<h3 className='absolute top-[10%] left-[10%] text-white text-2xl md:text-4xl z-10'>
					saragray.dev
				</h3>
				<h1 className='absolute bottom-[20%] left-[10%] w-[20%] text-gray-500 text-2xl z-20'>
					Dedicated, intuitive, <span className='text-white'>expert</span>
				</h1>
				<div className='absolute top-0 right-0 w-[50%] h-full bg-gray-900 z-10'>
					<div className='relative w-full h-full'>
						<Image
							src='/assets/logo.png'
							alt='sara gray logo'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
				<div className='absolute bottom-[5%] right-[10%] md:right-[5%] text-white uppercase text-xs transform origin-bottom-right rotate-90 z-30'>
					simply built and enjoyed
				</div>
				<p className='absolute bottom-[20%] left-0 bg-primary-plum w-[18%] h-7 block z-`0'></p>
			</section>
			<h3 className='absolute bottom-[65%] md:bottom-[5%] left-[10%] text-black font-semibold text-2xl md:text-4xl'>
				saragray.dev
			</h3>
		</main>
	)
}

export default Landing
