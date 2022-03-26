import { useEffect, useState } from 'react';
import GovernmentSchemeCard from '../GovernmentSchemeForm/GovernmentSchemeCard';
import { get } from 'axios';

function ShowSchemes() {
  const baseurl = 'https://reachout-sql-server.herokuapp.com';
  const [scheme, setScheme] = useState([]);

  const getSchemes = async () => {
    const {
      data: { message },
    } = await get(`${baseurl}/schemes/get-schemes`);
    console.log(message);
    setScheme(message);
  };

  useEffect(()=>{
      getSchemes();
  },[])
  return (
    <div>
        <GovernmentSchemeCard scheme={scheme} />
    </div>
  );
}

export default ShowSchemes;