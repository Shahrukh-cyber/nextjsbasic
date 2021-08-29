import { useRouter } from "next/router"
import Link from "next/link";
const BlogPostPage = () => {
 const router = useRouter();

 console.log("Query...", router.query);
 // Query... { slug: Array(2) } slug: (2)["2020", "12"]
 return (
  <div>
   <Link href="/">Home</Link>
   <h1>The Blog Post </h1>
  </div>
 )
}

export default BlogPostPage
