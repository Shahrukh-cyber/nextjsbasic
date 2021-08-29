import Link from 'next/link';
import router from 'next/router';
const ClientsPage = () => {


 const clients = [
  { id: "jos", name: 'John' },
  { id: "su", name: 'Susy' },
  { id: "an", name: 'Anna' },


 ];

 return (
  <div>
   <h1>Ths Client Page</h1>
   <ul>
    {clients.map((c) => (
     <li key={c.id}>
      {/* <Link href={`/clients/${c.id}`}>{c.name}</Link> */}
      <Link href={{
       pathname: '/clients/[id]',
       query: { id: c.id }
      }}>{c.name}</Link>

     </li>
    ))}

   </ul>

  </div>
 )
}

export default ClientsPage;
