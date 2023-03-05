import Link from 'next/link'


export default function NavBar() {
    const navItemStyle = "bg-earth h-10 hover:bg-green  hover:animate-pulse rounded p-2 m-auto"
    return(
        <>
            <ul className='bg-sand h-20 rounded-lg flex justify-evenly m-2'>
                <img className='rounded-lg h-3/4 my-auto mx-2' src="https://kitsaphapps.com/wp-content/uploads/2022/04/open-uri20150313-11-vr3cz.png"/>
                <li className={navItemStyle}>
                    <Link href="/">Home</Link>
                </li>
                <li className={navItemStyle}>
                    <Link href="/calendar">Calendar</Link>
                </li>
                <li className={navItemStyle}>
                    <Link href="/walksuggestion">Suggestion Form</Link>
                </li>
                <li className={navItemStyle}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    )
}