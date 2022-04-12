import { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItems'

const DropMenu = ({ title = '', tagline = '', listItems = [] }) => {
	return (
		<motion.div
			variants={menuVariants}
			initial={'short'}
			whileHover={'long'}
			className='bg-black bg-opacity-50 p-2 rounded-lg hover:bg-opacity-100 hover:ring-2 hover:ring-blue-400 overflow-clip w-72'>
			<h1 className='capitalize text-center'>{title}</h1>
			<p className='text-base text-opacity-50 border-b-2 border-blue-400 text-center'>
				{tagline}
			</p>

			<motion.ul
				className='flex flex-col justify-start mt-8 mx-4'
				variants={listItemVariants}>
				{listItems.map((item, index) => (
					<MenuItem index={index} item={item} key={index} />
				))}
			</motion.ul>
		</motion.div>
	)
}

export default DropMenu
const menuVariants = {
	short: { height: '80px' },
	long: { height: '400px' },
}

const listItemVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}
