import layout from '../../components/layout'
import Link from 'next/link'
import axios from 'axios'

//fetch getServserSideProps
export async function getServerSideProps()
{
    //http req
    const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACEND}/api/posts`)
    const res = await req.data.data.data

    return {
        props: {
            posts: res // asign resposne
        },
    }
}

function PostIndex(props) {
    //destruct
    const {posts} = props;

    return(
        <Layout>
            <div className="caontainer" style={{marginTop:'80px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 shadow-sm rounded-3">
                            <div className="card-body">
                                <Link href='posts/ccreate'>
                                    <button className="btn btn-primary border-0 shadow-sm mb-3">Create</button>
                                </Link>
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <th scope="col">Img</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Action</th>
                                    </thead>
                                    <tbody>
                                        {posts.map((post) =>(
                                            <tr key={post.id}>
                                                <td className="text-center">
                                                    <img src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/posts/${post.image}`} width="150" classname="rounded-3" alt="can't load image" />
                                                </td>
                                                <td>{post.title}</td>
                                                <td>{post.content}</td>
                                                <td className="text-center"></td>
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