import Image from 'next/image'
import Link from 'next/link'

const Header = ({ image, title }) => {
	return (
		<main className='absolute inset-0 w-screen h-1/2'>
			<div className='relative w-full h-full bg-white shadow-lg'>
				{image && (
					<Image
						src={image}
						alt={`Image for ${title} post`}
						layout='fill'
						objectFit='contain'
					/>
				)}
			</div>
			<h1 className='absolute bottom-[5%] left-[30%] text-5xl text-black bg-white/80 rounded-xl p-4'>
				{title}
			</h1>
			<Link href='/' passHref>
				<button className='absolute right-8 top-1 ring-2 px-2 rounded hover:bg-slate-200'>
					Home
				</button>
			</Link>
		</main>
	)
}

export default Header
