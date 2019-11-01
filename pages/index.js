import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../layout/MyLayout';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li>
        <Link href={`/p/[id]`} as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const  Index = (props) => {
    console.log(props, "props");
    
    return (
        <Layout>
            <h1>Batman TV Shows</h1>
            <ul>
                {
                    props.shows.map(show => (
                        <li key={show.id}>
                            <Link href={`/p/[id]`} as={`/p/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))
                }
                {/* <PostLink id="Hello Next.js"></PostLink>
                <PostLink id="Learn Next.js"></PostLink>
                <PostLink id="Deploy Next.js"></PostLink> */}
            </ul>
        </Layout>
    )
}

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        shows: data.map( entry => entry.show)
    };
}

export default Index;


// export default () => (
//     <>
//     <Layout>
//         <HelloWorld/>
//     </Layout>
//       {/* <Header/>
//       <HelloWorld/>
//       <Link href='/about' >
//           <a title="Abount Page"> Go About</a>
//       </Link> */}
//     </>

// )

function HelloWorld() {
    return (
        <div>
            Hello World
            <p>scoped!</p>
            <style jsx>{`
            p {
                color: blue;
            }
            div {
                background: red;
            }
            @media (max-width: 600px) {
                div {
                    background: blue;
                }
            }
            `}</style>
            <style global jsx>{
                `
                body {
                    background: black;
                }
                `
            }</style>
        </div>
    )
}