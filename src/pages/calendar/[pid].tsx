import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Hike } from '../../types'

const Post = () => {
    const [meeting, setMeeting] = useState<Hike[]>([])

    const router = useRouter()
    const { pid } = router.query
    useEffect(()=>{
        fetch(`http://localhost:3000/meetings/${pid}`)
        .then(response => response.json())
        .then(data => setMeeting(data))
    },[pid])
    console.log(meeting)

    return(
        <>
            <p>Meeting with {meeting.name}</p>
        </>
    )
}

export default Post