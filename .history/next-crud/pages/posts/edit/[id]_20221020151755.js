import {useState} from 'react'
import Router from 'next/router'
import Layout from '../../../components/layout'
import axios from 'axios'

//fetch with 'getServerSideProps
export async function getServerSideProps({params}) {
    // http request
    const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND`}/api/posts/${params.id}`)
    const res = await req.data.data
}