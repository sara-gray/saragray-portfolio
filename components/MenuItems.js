import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const variants = {
	initial: { scale: 1 },
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuItem = ({ item }) => {
	const router = useRouter()
	const { _id, text, slug } = item
	return (
		<motion.li
			initial='open'
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}>
			<div
				className='rounded-lg my-2 py-2 px-4 border-2 flex flex-row justify-start w-full text-lg'
				style={{ border: `2px solid ${colors[_id]}` }}
				onClick={() => router.push(slug)}>
				{text}
			</div>
		</motion.li>
	)
}
