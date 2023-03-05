import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
    const [meeting, setMeeting] = useState([])
    const router = useRouter()
    const { pid } = router.query
    useEffect(()=>{
        fetch(`http://localhost:3000/meetings/${pid}`)
        .then(response => response.json())
        .then(data => setMeeting(data))
    },[])
    console.log(meeting)

    return(
        <>
        </>
    )
}

export default Post