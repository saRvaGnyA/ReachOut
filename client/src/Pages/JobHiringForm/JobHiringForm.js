import {useState} from 'react';

import './JobHiringForm.css'
function JobHiringForm(){

    let [first,setFirst]=useState(true);
    let [second,setSecond]=useState(false);
    let [third,setThird]=useState(false);

    let [companyName,setCompanyName]=useState("");
    let [gstNumber,setGstNumber]=useState("");
    let [companyEmail,setCompanyEmail]=useState("");
    
    let [jobPosition,setJobPosition]=useState("");
    let [salary,setSalary]=useState("");
    let [jobType,setJobType]=useState("");
    let [qualification,setQualification]=useState("");
    let [sector,setSector]=useState("");
    
    let [location,setLocation]=useState("");
    let [disabilityType,setDisabilityType]=useState("");
    let [disability,setDisability]=useState("");

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

    function submitJobHiring(e){
        e.preventDefault();
        console.log(companyName);
        console.log(gstNumber);
        console.log(companyEmail);
        console.log(jobPosition);
        console.log(salary);
        console.log(jobType);
        console.log(qualification);
        console.log(sector);
        console.log(location);
        console.log(disabilityType);
        console.log(disability);
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
            </section>
            </div>
            <div className="relative lg:w-5/12">
            <section style={{paddingBottom:"60px"}}>
                <header className="font-semibold text-primary-lightest text-xl px-8 mb-3">Hiring for Job</header>
                <div className="bg-primary-light bg-opacity-75 bg-blur rounded-lg p-8 space-y-4">
                {first ? (<div>
                    <input 
                        type="text" 
                        placeholder="Company Name" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={companyName}
                        onChange={(e)=>{setCompanyName(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="GST Number" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={gstNumber}
                        onChange={(e)=>{setGstNumber(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="Company Email" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={companyEmail}
                        onChange={(e)=>{setCompanyEmail(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        />
                    <input 
                        type="text" 
                        placeholder="" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        />
                    <div className="flex">
                        <button className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto" onClick={firstFalse}>Next</button>
                    </div>
                </div>):(<div></div>)}
                {second?(<div>
                    <input 
                        type="text" 
                        placeholder="Job Position" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={jobPosition}
                        onChange={(e)=>{setJobPosition(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="Salary" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={salary}
                        onChange={(e)=>{setSalary(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="Job Type" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={jobType}
                        onChange={(e)=>{setJobType(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="Qualification" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={qualification}
                        onChange={(e)=>{setQualification(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="Sector" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={sector}
                        onChange={(e)=>{setSector(e.target.value)}}
                        />
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
                    <input 
                        type="text" 
                        placeholder="Location" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={location}
                        onChange={(e)=>{setLocation(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="Disability Type" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={disabilityType}
                        onChange={(e)=>{setDisabilityType(e.target.value)}}
                        />
                    <input 
                        type="text" 
                        placeholder="Disability" 
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg" 
                        style={{marginBottom:"10px"}}
                        value={disability}
                        onChange={(e)=>{setDisability(e.target.value)}}
                        />
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div className="flex">
                            <button className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto" onClick={secondTrue}>Previous</button>
                        </div>
                        <div className="flex">
                            <button onClick={submitJobHiring}className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto">Submit Application</button>
                        </div>
                    </div>
                </div>):(<div></div>)}
            </section>
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