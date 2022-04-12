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
		<div className='absolute bottom-0 w-screen h-2/3 portrait:h-5/6 flex justify-center items-center z-10 overflow-hidden'>
			<div
				className='card rounded-lg bg-black text-white'
				style={{
					color:
						!showIcons && hoverNow
							? 'rgba(88, 199, 250, 0.8)'
							: showIcons
							? 'rgb(79, 70, 229)'
							: 'transparent',
					transition: 'color 1s',
				}}
				onMouseEnter={() => setHoverNow(true)}
				onMouseLeave={() => setHoverNow(false)}
				onClick={() => setShowIcons(!showIcons)}>
				<div className='card-dimensions'>
					{!hoverNow && (
						<div className='text-2xl text-white/50 transition-opacity delay-1000 duration-1000 opacity-80 ease-in-out flex justify-center items-center w-full h-full portrait:hidden'>
							Tools I use...
						</div>
					)}
					<FaReact className='absolute left-[10rem] top-[5rem] w-16 h-16 lg:w-24 lg:h-24 hover-1 hover:animate-bounce' />
					<SiTailwindcss className='absolute right-64 top-32 w-16 h-16 lg:w-24 lg:h-24 hover-2 hover:animate-bounce' />
					<SiVercel className='absolute left-52 bottom-12 w-16 h-16 lg:w-24 lg:h-24 hover-3 hover:animate-pulse' />
					<SiFirebase className='absolute left-16 bottom-[160px] w-16 h-16 lg:w-24 lg:h-24 hover:animate-bounce hover-4' />
					<SiJavascript className='absolute right-[10%] top-4 w-16 h-16 lg:w-24 lg:h-24  rounded-lg hover-5 hover:animate-pulse' />
					<FaCcStripe className='absolute right-[15%] bottom-[20%] w-16 h-16 lg:w-24 lg:h-24  rounded-lg hover-6 hover:animate-bounce' />
					<img
						src={'/sanity.svg'}
						className='absolute right-[50%] top-56 w-24 h-8 lg:w-32 lg:h-16 hover:animate-pulse rounded-lg'
						onMouseEnter={() => setHoverImageNow(true)}
						onMouseLeave={() => setHoverImageNow(false)}
						style={{
							opacity:
								showIcons || hoverImageNow ? '1' : hoverNow ? '0.8' : '0',
							transition: 'opacity 1s',
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Centre
