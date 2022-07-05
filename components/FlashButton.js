import Link from "next/link"


const FlashButton = ({ buttonText, goTo = '/' }) => {
  return (
    <Link href={`${goTo}`} replace>
      <button className='w-24 rounded py-1 px-2 cursor-pointer text-primary-plum hover:text-stone-400 hover:bg-primary-plum'
        onClick={() => { console.log(goTo) }}>{buttonText}</button>
    </Link>
  )
}

export default FlashButton