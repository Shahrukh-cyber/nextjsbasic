import { useRouter } from 'next/router';
const Project = () => {
 const router = useRouter();
 console.log("RouterPathName", router.pathname)
 console.log("RouterQuery", router.query)
 return (
  <div>
   This is Portfolio Project
  </div>
 )
}

export default Project
