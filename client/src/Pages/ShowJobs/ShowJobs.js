import {useState,useEffect} from 'react';
import GovernmentSchemeCard1 from '../GovernmentSchemeForm/GovernmentSchemeCard1';
import { post, get } from 'axios';

function ShowJobs() {
  const baseurl = 'https://reachout-sql-server.herokuapp.com';
  const [scheme, setScheme] = useState([]);

  const getSchemes = async () => {
    const {
      data: { job },
    } = await get(`${baseurl}/jobs/see-jobs`);
    console.log(job);
    setScheme(job);
  };

  useEffect(() => {
    getSchemes();
  }, []);
  return <div>
      {scheme && <GovernmentSchemeCard1 scheme={scheme} />}
  </div>;
}

export default ShowJobs;
