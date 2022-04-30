import '../styles/globals.css'
import ReactTooltip from 'react-tooltip'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ReactTooltip />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
