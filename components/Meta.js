import Head from 'next/head'

const Meta = ({ title = null }) => {
	return (
		<Head>
			<title>{title ? title : 'sara.gray'}</title>
			<meta
				name='description'
				content={`sara.gray - simple well built applications from those who enjoy doing so!`}
			/>
		</Head>
	)
}

export default Meta
