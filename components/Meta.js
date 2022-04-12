import Head from 'next/head'

const Meta = () => {
	return (
		<Head>
			<title>Sara Gray Portfolio</title>
			<meta
				name='description'
				content={`A statically generated portfolio website using Next.js and Sanity.io.`}
			/>
		</Head>
	)
}

export default Meta
