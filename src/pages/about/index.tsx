export default function About() {
    const textStyle = "py-2"
    return(
        <>
            <div className=" border-red-500 border-2">
                <h1 className="text-center">About French Walkabouts</h1>
                <img className="m-auto p-5" src="https://pbs.twimg.com/profile_images/249479692/betsy_waters_400x400.PNG" />
                <p className={textStyle}>Hello, my name is Betsy Waters and I love to hike, walk and generally move my feet!</p>
                <p className={textStyle}>In my retirement, I have found a passion for walking with other people and viewing the beautiful south of france on my feet.</p>
            </div>
        </>
    )
}