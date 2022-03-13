import { motion } from 'framer-motion'

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
	const { _id, text } = item
	return (
		<motion.li
			initial='open'
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}>
			<div
				className='rounded-lg m-2 px-4 border-2 flex flex-row justify-start'
				style={{ border: `2px solid ${colors[_id]}` }}>
				{text}
			</div>
		</motion.li>
	)
}
