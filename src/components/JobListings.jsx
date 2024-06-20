import React from 'react'
import { useState, useEffect } from 'react'
import jobs from '../jobs.json'
import Job from './Job'

const JobListings = ({isHome = false}) => {
    //const jobList = isHome ? jobs.slice(0,3) : jobs;
    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobList(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs()
    }, [])
    return (
    <>
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? ( <h2>Loading...</h2> ) : (
                <>
                    {jobList.map((job) => (
                        <Job job={job} key={job.id}/>
                    ))}
                </>
            )}            
        </div>
        </div>
    </section>
    </>
    )
}

export default JobListings
