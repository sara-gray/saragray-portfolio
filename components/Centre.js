import { FaReact, FaCcStripe } from 'react-icons/fa'
import {
	SiTailwindcss,
	SiVercel,
	SiFirebase,
	SiJavascript,
} from 'react-icons/si'
import { useState } from 'react'

const Centre = () => {
	const [hoverNow, setHoverNow] = useState(false)
	const [hoverImageNow, setHoverImageNow] = useState(false)
	const [showIcons, setShowIcons] = useState(false)

	return (
		<div className='absolute inset-0 w-screen h-screen flex justify-center items-center z-10'>
			<div
				className='relative w-full mx-8 md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-2/3 rounded-lg bg-black card px-4'
				style={{
					color:
						!showIcons && hoverNow
							? 'rgba(88, 199, 250, 0.1)'
							: showIcons
							? 'rgb(79, 70, 229)'
							: 'transparent',
					transition: 'color 1s',
				}}
				onMouseEnter={() => setHoverNow(true)}
				onMouseLeave={() => setHoverNow(false)}
				onClick={() => setShowIcons(!showIcons)}>
				<FaReact className='absolute left-[10rem] top-[5rem] w-16 h-16 lg:w-24 lg:h-24 hover-1 hover:animate-bounce' />
				<SiTailwindcss className='absolute right-28 top-56 w-16 h-16 lg:w-24 lg:h-24 hover-2 hover:animate-bounce' />
				<SiVercel className='absolute left-52 bottom-12 w-16 h-16 lg:w-24 lg:h-24 hover-3 hover:animate-pulse' />
				<SiFirebase className='absolute left-16 bottom-[160px] w-16 h-16 lg:w-24 lg:h-24 hover:animate-bounce hover-4' />
				<SiJavascript className='absolute right-8 top-4 w-16 h-16 lg:w-24 lg:h-24  rounded-lg hover-5 hover:animate-pulse' />
				<FaCcStripe className='absolute right-16 bottom-40 w-16 h-16 lg:w-24 lg:h-24  rounded-lg hover-6 hover:animate-bounce' />
				<img
					src={'/sanity.png'}
					className='absolute left-5 top-48 w-16 h-16 lg:w-24 lg:h-24 hover:animate-pulse rounded-lg'
					onMouseEnter={() => setHoverImageNow(true)}
					onMouseLeave={() => setHoverImageNow(false)}
					style={{
						opacity: showIcons || hoverImageNow ? '1' : hoverNow ? '0.1' : '0',
						transition: 'opacity 1s',
					}}
				/>
			</div>
		</div>
	)
}

export default Centre
