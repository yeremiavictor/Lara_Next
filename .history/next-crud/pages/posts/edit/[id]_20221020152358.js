import {useState} from 'react'
import Router from 'next/router'
import Layout from '../../../components/layout'
import axios from 'axios'

//fetch with 'getServerSideProps
export async function getServerSideProps({params}) {
    // http request
    const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/posts/${params.id}`)
    const res = await req.data.data

    return{
        props:{
            post:res // asign response
        },
    }
}

function PostEdit(props) {
    //destruct
    const {post} = props
    //state
    const [image,setImage] = useState('')
    const [title,setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    //state validation
    const [validation,setValidation] = useState({})

    //function handleFileChange
    const handleFileChange = (e) => {

        //define var for get value image data
        const imageData = e.target.files[0]

        //check validation file
        if(!imageData.type.match('image.*')){
            //set state 'image' to null
        }
    }
}