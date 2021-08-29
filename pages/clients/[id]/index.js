import { useRouter } from "next/router"
const ClientProjectsPage = () => {
 const router = useRouter();
 console.log(router.query);
 function loadProjectHandler() {
  router.push({
   pathname: '/clients/[id]/[clientprojectid]',
   query: { id: router.query.id, clientprojectid: 'projecta' },

  }
  )
 }
 return (
  <div>
   <h1>ClientProjectsPage</h1>
   <button onClick={loadProjectHandler}>Loading Data</button>
  </div>
 )
}

export default ClientProjectsPage
