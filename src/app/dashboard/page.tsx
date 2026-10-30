'use client';
import {useEffect,useState} from 'react'; import { useJobStore } from '@/store/useJobStore'; import JobCard from '@/components/JobCard'; import StatsCards from '@/components/StatsCards'; import SearchFilter from '@/components/SearchFilter';
export default function Dashboard(){ const {jobs,load}=useJobStore(); const [q,setQ]=useState(''); const [f,setF]=useState('All');
 useEffect(()=>{load()},[]);
 const filtered=jobs.filter(j=>(f==='All'||j.status===f)&& (j.fullName+j.token+j.contactNumber).toLowerCase().includes(q.toLowerCase()));
 return <div><h2>All Jobs</h2><StatsCards jobs={jobs}/><SearchFilter q={q} setQ={setQ} f={f} setF={setF}/>{filtered.map(j=><JobCard key={j.id} job={j}/>)} {filtered.length===0&&<p>No jobs found.</p>}</div>}
