import Image from 'next/image'

const Landing = () => {
	return (
		<main className='absolute inset-0 bg-gray-900 w-screen h-[80%]'>
			<h3 className='relative mt-12 ml-12 text-white text-4xl'>sara.gray</h3>
			<div className='absolute top-0 right-0 w-[60%] h-full'>
				<div className='relative w-full h-full'>
					<Image
						src='/assets/logo.png'
						alt='sara gray logo'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>
			<div className='absolute bottom-[30%] right-[1%] text-white uppercase text-xs transform rotate-90'>
				simply built and enjoyed
			</div>
			<p className='absolute z-10 bottom-14 bg-logo-kharki w-32 h-8'></p>
			<h1 className='relative z-20 mt-24 ml-12 w-[30%] h-full text-gray-500 text-2xl'>
				Dedicated, intuitive, somewhat determined{' '}
				<span className='text-white'>expert</span>
			</h1>
		</main>
	)
}

export default Landing
