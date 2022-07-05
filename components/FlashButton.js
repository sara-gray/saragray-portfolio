import { useRouter } from 'next/router'

const FlashButton = ({ buttonText, goTo = null }) => {
  const router = useRouter()

  return (
    <button key={router.asPath} className='w-24 rounded py-1 px-2 cursor-pointer text-primary-plum hover:text-stone-400 hover:bg-primary-plum'
      style={{ visibility: !goTo ? 'hidden' : 'inline-block' }}
      onClick={() => router.replace(goTo)}
    >{buttonText}</button>
  )
}

export default FlashButton