import {useState} from 'react';

import './JobHiringForm.css'
function JobHiringForm(){

    let [first,setFirst]=useState(true);
    let [second,setSecond]=useState(false);
    let [third,setThird]=useState(false);

    function firstTrue(){
        setFirst(true);
        setSecond(false);
        setThird(false);
    }
    function firstFalse(){
        setFirst(false);
        secondTrue();
    }
    function secondTrue(){
        setSecond(true);
        setFirst(false);
        setThird(false);
    }
    function secondFalse(){
        setSecond(false);
        thirdTrue();
    }
    function thirdTrue(){
        setThird(true);
        setFirst(false);
        setSecond(false);
    }
    function thirdFalse(){
        setSecond(false);
    }

    return (
        <div>
            <div className="relative h-full text-gray-100 bg-primary rounded-lg shadow-showcase">
        <div className="absolute left-0 -ml-12 h-full flex flex-col justify-center">
            <button className="p-5 bg-primary-light bg-opacity-90 bg-blur rounded-tl-lg rounded-tr-lg focus:outline-none">
            <svg viewBox="0 0 20 20" className="h-8 w-8 fill-accent">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            </button>
            <button className="p-5 bg-primary-lighter bg-opacity-90 bg-blur rounded-bl-lg rounded-br-lg focus:outline-none">
            <svg viewBox="0 0 20 20" className="h-8 w-8 fill-primary-lightest">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
            </svg>
            </button>
        </div>
            {/* <header className="relative z-20 flex px-10 py-8">
            <div className="flex items-center ml-auto">
            <div className="leading-none mr-3">
                <div className="mb-1">Welcome back,</div>
                <span className="text-accent">Notifees</span>
            </div>
            <div className="h-10 w-10 flex items-center justify-center bg-accent-gradient rounded-lg flex-shink-0">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-green-900">
                <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            </div>
            </div>
        </header> */}
        <main className="relative z-10 flex flex-col lg:flex-row mx-10 sm:mx-20 md:mx-32">
            <div className="lg:w-7/12 lg:mr-16 space-y-6">
            <section>
                <header className="font-semibold text-primary-lightest text-xl px-8 mb-3">Get your future Employees!</header>
                <div className="flex flex-wrap bg-primary-light bg-opacity-75 bg-blur px-8 py-12 rounded-lg">
                {/*<div className="h-40 w-40 ml-16 mr-24 bg-primary-light rounded-full"></div>*/}
                <div className="space-y-4 ml-8">
                    <div className="relative flex flex-col">
                    <span className="absolute left-0 top-0 mt-2 -ml-8 h-3 w-3 bg-accent rounded-full"></span>
                    <span className="text-lg font-semibold">Post your job to get the best employees across the country.</span>
                    {/* <span className="text-sm text-primary-lightest leading-none">out of 5.00 GB</span> */}
                    </div>
                    <div className="flex flex-col">
                    <span className="text-lg font-semibold">Platform where employees can see your job requirement and apply for the same.</span>
                    {/* <span className="text-sm text-primary-lightest leading-none">Data Expiry</span> */}
                    </div>
                    <div className="flex flex-col">
                    <span className="text-lg text-accent font-semibold">find the next step in your career.</span>
                    <span className="text-sm text-primary-lightest leading-none">Status</span>
                    </div>
                </div>
                </div>
            </section>
            <section>
                {/*<header className="font-semibold text-primary-lightest text-xl px-8 mb-3">Proxies</header>
                <div className="flex flex-wrap bg-primary-light bg-opacity-75 bg-blur p-8 rounded-lg">
                <div className="mr-4 tracking-widest leading-loose">
                    <p>168.48.230.224:2170:hidden:testing</p>
                    <p>168.48.230.224:2170:hidden:testing</p>
                    <p>168.48.230.224:2170:hidden:testing</p>
                    <p>168.48.230.224:2170:hidden:testing</p>
                    <p>168.48.230.224:2170:hidden:testing</p>
                    <p>168.48.230.224:2170:hidden:testing</p>
                </div>
                <div className="ml-auto">
                    <button className="py-2 px-6 text-accent bg-primary-lighter rounded-lg">Copy all</button>
                </div>
                </div>*/}
            </section>
            </div>
            <div className="relative lg:w-5/12">
            <section style={{paddingBottom:"60px"}}>
                <header className="font-semibold text-primary-lightest text-xl px-8 mb-3">Hiring for Job</header>
                <div className="bg-primary-light bg-opacity-75 bg-blur rounded-lg p-8 space-y-4">
                {first ? (<div>
                    <input type="text" placeholder="Company Name" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}} />
                    <input type="text" placeholder="GST Number" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="Company Email" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <div className="flex">
                        <button className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto" onClick={firstFalse}>Next</button>
                    </div>
                </div>):(<div></div>)}
                {second?(<div>
                    <input type="text" placeholder="Job Position" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="Salary" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="Job Type" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="Qualification" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="Sector" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div className="flex">
                            <button className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto" onClick={firstTrue}>Previous</button>
                        </div>
                        <div className="flex">
                            <button className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto" onClick={secondFalse}>Next</button>
                        </div>
                    </div>
                </div>):(<div></div>)}
                </div>
                {third ? (<div>
                    <input type="text" placeholder="Location" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="Disability Type" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="Disability" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    {/* <input type="text" placeholder="" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/>
                    <input type="text" placeholder="" className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" style={{marginBottom:"10px"}}/> */}
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div className="flex">
                            <button className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto" onClick={secondTrue}>Previous</button>
                        </div>
                        <div className="flex">
                            <button className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto">Submit Application</button>
                        </div>
                    </div>
                </div>):(<div></div>)}
            </section>
            {/*<section className="absolute w-plans left-0 mt-16 ml-20">
                <header className="font-semibold text-primary-lightest text-xl px-6 mb-3">Plans</header>
                <div className="bg-primary-light bg-opacity-90 bg-blur rounded-lg p-8 space-y-4">
                <div className="ml-32 my-10">
                    <p className="text-xl text-accent">Almost out of data?</p>
                    <p className="text-xl text-accent">Purchase here your new plan</p>
                    <button className="px-4 py-2 mt-4 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto">View plans</button>
                </div>
                </div>
            </section>*/}
            </div>
        </main>
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full overflow-hidden">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1000px-World_map_blank_without_borders.svg.png" className="opacity-7 h-full w-auto object-cover" />
        </div>
        </div>
        </div>
    );
}

export default JobHiringForm;