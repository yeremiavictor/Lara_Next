import Layout from '../../components/layout'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

//fetch getServserSideProps
export async function getServerSideProps()
{
    //http req
    const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/posts`)
    const res = await req.data.data.data

    return {
        props: {
            posts: res // asign response
        },
    }
}

function PostIndex(props) {
    //destruct
    const {posts} = props;

    //router
    const router = useRouter()

    // refresh data
    const refreshData = () => {
        router.replace(router.asPath);
    }

    //function 'deletePost'
    const deletePost = async(id) => {
        //sedning
        await axios delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/posts/${id}`);

        //refresh data
        refreshData();
    }

    return(
        <Layout>
            <div className="container" style={{marginTop:'80px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 shadow-sm rounded-3">
                            <div className="card-body">
                                <Link href='posts/create'>
                                    <button className="btn btn-primary border-0 shadow-sm mb-3">Create</button>
                                </Link>
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Img</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Content</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map((post) =>(
                                            <tr key={post.id}>
                                                <td className='text-center'>
                                                    <img src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/posts/${post.image}`} width="150" className="rounded-3" alt="can't load image" />
                                                </td>
                                                <td>{post.title}</td>
                                                <td>{post.content}</td>
                                                <td className="text-center">
                                                    <Link href={`/posts/edit/${post.id}`}>
                                                        <button className="btn btn-sm btn-warning border-0 shadow-sm mb-3 me-3">Edit</button>
                                                    </Link>
                                                    <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3 me-3">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostIndex