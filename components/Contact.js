
import Link from 'next/link'
import BlogSelect from './BlogSelect'

const Contact = ({ blogList = [] }) => {

	return (
		<main className='grid grid-cols-1 md:grid-cols-3 bg-stone-900 w-screen text-center py-12 md:py-44'>
			<div>
				<p className='text-sm text-stone-400 pb-16'>Get in touch</p>
				<a
					href='mailto:hello@saragray.dev?subject=Website Contact'
					className='text-xl text-stone-400 font-semibold underline cursor-pointer hover:text-primary-kharki'>
					hello@saragray.dev
				</a>
			</div>

			<Link href='/findoutmore' passHref>
				<div>
					<p className='text-sm text-stone-400 pb-16 cursor-pointer hover:text-primary-kharki'>
						Find out more
					</p>
					<p className='text-xl text-stone-400 mx-12 cursor-pointer hover:text-primary-kharki'>
						See some of our work and more detail about specific skills
					</p>
				</div>
			</Link>

			{blogList.length > 0 && <sections>
				<Link href='/readmore' passHref>
					<p className='text-sm text-stone-400 pb-8 cursor-pointer hover:text-primary-kharki'>
						Blog
					</p>
				</Link>
				<BlogSelect posts={[{ _id: 'allposts', title: 'All' }, ...blogList]} />
			</sections>}
		</main>
	)
}

export default Contact



