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
            setImage('')

            return
        }

        //asign file to state 'iamge
        setImage(imageData)
    }

    //method updatePost
    const updatePost = async(e) => {
        e.preventDefault()

        //define formData
        const formData = new FormData()

        //append data to 'formData
        formData.append('image', image)
        formData.append('title',title)
        formData.append('content',content)
        formData.append('_method', 'PUT')

        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/posts/${post.id}`, formData)
        .then(() => {
            //redirect
            Router.push('/posts')
        })
        .catch((err)=>{
            //assign validation on state
            setValidation(err.response.data)
        })

    }

    return(
        <Layout>
            <div className="container" style={{marginTop: '80px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                < form onSubmit={updatePost}>

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">Image</label>
                                        <input type="file" className="form-control" onChange={handleFileChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <div className="form-label fw-bold">Title</div>
                                        <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Masukan Title'/>
                                    </div>
                                    {
                                        validation.title &&
                                        <div className="alert alert-danger">
                                            {validation.title}
                                        </div>
                                    }

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">Content</label>
                                        <textarea className="form-control" value={content} rows={3} onChange={(e)=> setContent(e.target.value)} placeholder='Masukan data content'></textarea>
                                    </div>
                                    {
                                        validation.content &&
                                        <div className="alert alert-danger">
                                            {validation.content}
                                        </div>
                                    }

                                    <button className="btn btn-primary border-0 shadow-sm" type='submit'>
                                        Update
                                    </button>
                            
                                </>
                            </div>
                        </div>
                    </div>
            </div>
        </Layout>
    )
}

export default PostEdit

