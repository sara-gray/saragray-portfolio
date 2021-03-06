import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ title, children }) => {
	return (
		<>
			<Meta title={title} />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
