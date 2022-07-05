import Head from 'next/head'

const Meta = ({ title = null }) => {
	return (
		<Head>
			<title>{title ? title : 'Sara Gray'}</title>
			<meta
				name='description'
				content={`sara.gray - simple well built applications from those who enjoy doing so!`}
			/>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='favicon/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='favicon/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='favicon/favicon-16x16.png'
			/>
			<link rel='manifest' href='favicon//site.webmanifest'
				replace />
			<link
				rel='mask-icon'
				href='favicon/safari-pinned-tab.svg'
				color='#5bbad5'
			/>
			<meta name='msapplication-TileColor' content='#da532c' />
			<meta name='theme-color' content='#ffffff' />
		</Head>
	)
}

export default Meta
