import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ title, children }) => {
	return (
		<>
			<Meta title={title} />
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export default Layout
