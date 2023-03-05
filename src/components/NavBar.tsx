import Link from 'next/link'


export default function NavBar() {
    const navItemStyle = "hover:bg-slate-600 rounded p-2"
    return(
        <>
            <ul className='flex justify-between m-2'>
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