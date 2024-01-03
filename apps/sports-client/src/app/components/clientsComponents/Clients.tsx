import React from 'react';


// const clientsDescription: string[] = [
//   'First Name',
//   'Last Name',
//   'Email',
//   'Date of Birthday'
// ]

export function Clients() {
  // const { id } = useParams();
  //
  // const [post, setPost] = useState([]);
  // const fetchClubs = async () => {
  //   const data = await getClients(id as string);
  //   setPost(data);
  // };
  //
  // useEffect(() => () => {
  //   fetchClubs();
  // }, [fetchClubs]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex-col'>
          <p className='text-3xl font-medium'>
            Clients
          </p>
          <p>
            About All Clients
          </p>
        </div>
      </div>
    </div>
  );
}
