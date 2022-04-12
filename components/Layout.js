import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export default Layout
