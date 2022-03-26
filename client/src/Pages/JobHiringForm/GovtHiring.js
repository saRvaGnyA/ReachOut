import { useEffect, useState } from 'react';
import GovernmentSchemeCard from '../GovernmentSchemeForm/GovernmentSchemeCard';
import { post, get } from 'axios';

import './GovtHiring.css';
function GovtHiringForm() {
  let [schemeName, setSchemeName] = useState('');
  let [description, setDescription] = useState('');
  let [type, setType] = useState('');
  let [link, setLink] = useState('');

  async function submitGovtScheme(e) {
    e.preventDefault();
    const baseurl = 'https://reachout-sql-server.herokuapp.com';
    const { data } = await post(
      `${baseurl}/schemes/add-scheme`,
      {
        scheme_name: schemeName,
        scheme_description: description,
        scheme_type: type,
        scheme_link: link,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      },
    );
  }
  const baseurl = 'https://reachout-sql-server.herokuapp.com';
  const [scheme, setScheme] = useState([]);

  const getSchemes = async () => {
    const {
      data: { message },
    } = await get(`${baseurl}/schemes/get-schemes`);
    console.log(message);
    setScheme(message);
  };

  useEffect(() => {
    getSchemes();
  }, []);

  return (
    <div>
      <div class="relative h-full text-gray-100  rounded-lg shadow-showcase">
        <div class="absolute left-0 -ml-12 h-full flex flex-col justify-center">
          <button class="p-5 bg-primary-light bg-opacity-90 bg-blur rounded-tl-lg rounded-tr-lg focus:outline-none">
            <svg viewBox="0 0 20 20" class="h-8 w-8 fill-accent">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </button>
          <button class="p-5 bg-primary-lighter bg-opacity-90 bg-blur rounded-bl-lg rounded-br-lg focus:outline-none">
            <svg viewBox="0 0 20 20" class="h-8 w-8 fill-primary-lightest">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fill-rule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <main class="relative z-10 flex flex-col lg:flex-row mx-10 sm:mx-20 md:mx-32">
          <div class="relative lg:w-5/12">
            <section className="centersection">
              <header class="font-semibold text-primary-lightest text-xl px-8 mb-3">
                Add Scheme
              </header>
              <div class="bg-primary-light bg-opacity-75 bg-blur rounded-lg p-8 space-y-4">
                <input
                  type="text"
                  placeholder="Scheme Name"
                  value={schemeName}
                  onChange={(e) => {
                    setSchemeName(e.target.value);
                  }}
                  class="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Scheme Description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  class="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Scheme Type"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  class="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Scheme Link (Optional)"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  class="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                />
                <div class="flex">
                  <button
                    class="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto"
                    onClick={submitGovtScheme}
                  >
                    Add
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>

        <div class="absolute top-0 bottom-0 left-0 right-0 h-full w-full overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1000px-World_map_blank_without_borders.svg.png"
            class="opacity-7 h-full w-auto object-cover"
          />
        </div>
      </div>
      <GovernmentSchemeCard scheme={scheme} />
    </div>
  );
}

export default GovtHiringForm;
