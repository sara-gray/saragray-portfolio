import Image from 'next/image'
import GoHome from './GoHome'

const Header = ({ image, title }) => {
	return (
		<main className='w-screen h-1/2'>
			<div className='absolute inset-0 w-full h-1/2 bg-stone-900 shadow-lg'>
				{image && (
					<Image
						src={image}
						alt={`Image for ${title} post`}
						layout='fill'
						objectFit='contain'
					/>
				)}
				<div className="absolute top-[5%] left-[10%] group">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
					<button className='relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-stone-600'>
						<span className="flex items-center space-x-5">
							<svg xmlns="http://www.w3.org/2000/svg" clasNames="h-8 w-8 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
							<span className='text-stone-100 pr-6 text-5xl'>{title}</span>
						</span>
						<span className='text-purple-600 pl-6 italic group-hover:text-stone-600 transition duration-200'> read on &rarr;</span>
					</button>
				</div>
				<GoHome />
			</div>
		</main>
	)
}

export default Header
