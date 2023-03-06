import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Hike } from '../../types'

const Post = () => {
    const [meeting, setMeeting] = useState<Hike>()
    const [loaded, setLoaded] = useState(false)

    const router = useRouter()
    const { pid } = router.query
    useEffect(()=>{
        fetch(`http://localhost:3000/api/hikes/${pid}`)
        .then(response => response.json())
        .then(data => {
            setMeeting(data)
            setLoaded(true)
        })
        .catch(error => {
            console.log(error)
            setLoaded(false)
        })
    },[pid])
    console.log(meeting)

    if (!loaded) return <p>Loading...</p>

    return(
        <>
            <p>Meeting with {meeting?.name}</p>
        </>
    )
}

export default Post