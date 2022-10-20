import layout from '../../components/layout'
import Link from 'next/link'
import axios from 'axios'

//fetch getServserSideProps
export async function getServerSideProps()
{
    //http req
    const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACEND}/api/posts`)
}