import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import CalendarComp from "../components/Calender"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>French Riviera Walks!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className="text-3xl font-bold underline" >Welcome</h1>
          <div>
            <br></br>
            <p>Thank you for visiting the Villefrance Sur-Mer Walking Crew website!</p>
            <br></br>
            <p>We here at the Villefrance Sur-Mer Walking Crew welcome everyone and anyone to join us for our next adventure!</p>
            <br></br>
          </div>
          <h1 className=" text-3xl font-bold underline" >View Our Calendar Below:</h1>
          <br></br>
          <CalendarComp />
        </div>
      </main>
    </>
  )
}
