import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { getSession } from 'next-auth/react'
import Login from '@/components/Login'
import Feed from '@/components/Feed'
import RightSideBar from '@/components/RightSideBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home({session}) {
  if(!session) return <Login/>;
  return (
    <>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className="flex bg-gray-100" >
     
      {/*left side bar  */}

      <SideBar></SideBar>
      {/*Feed  */}
      <Feed></Feed>

      {/*Right side bar  */}
      <RightSideBar/>
 

       
      </main>
    </>
  );
}


export async function getServerSideProps(context){
  const session  = await getSession(context);
  return {
    props:{session},
  };
}
