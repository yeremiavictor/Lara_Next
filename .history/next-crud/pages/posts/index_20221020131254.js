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
                            <div className="card-body"></div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostIndex