import { useRouter } from 'next/router';

const SpecificClientProjectsPage = () => {
 const router = useRouter();
 console.log("Router", router.query);

 return (
  <div>
   <h1>Specific Clients Project Page</h1>
  </div>
 )
}

export default SpecificClientProjectsPage
