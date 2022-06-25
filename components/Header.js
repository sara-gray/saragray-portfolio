import Image from 'next/image'
import Link from 'next/link'
import GoHome from './GoHome'

const Header = ({ image, title }) => {
	return (
		<main className='absolute inset-0 w-screen h-1/2'>
			<div className='relative w-full h-full bg-stone-900 shadow-lg'>
				{image && (
					<Image
						src={image}
						alt={`Image for ${title} post`}
						layout='fill'
						objectFit='contain'
					/>
				)}
			</div>
			<h1 className='absolute bottom-[5%] left-[30%] text-5xl text-stone-900 bg-white rounded-xl p-4'>
				{title}
			</h1>
			<GoHome />
		</main>
	)
}

export default Header
