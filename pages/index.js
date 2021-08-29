import Link from 'next/link';

function HomePage() {

  return (
    <div>
      <h1>Hello </h1>
      <ul>
        <li>

          <Link href="/portfolio">Portfolio</Link>





        </li>
        <li>

          <Link href="/about">About</Link>


        </li>
        <li>
          <Link href="/blog/1">Blog</Link>
        </li>
        <li>
          <Link href="/clients">Client</Link>
        </li>
      </ul>
    </div >

  )

}
export default HomePage;