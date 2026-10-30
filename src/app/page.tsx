'use client';
import {useEffect,useState} from 'react'; import JobForm from '@/components/JobForm'; import SuccessToken from '@/components/SuccessToken'; import { useJobStore } from '@/store/useJobStore'; import { Job } from '@/lib/types';
export default function Home(){ const {jobs,addJob,load}=useJobStore(); const [created,setCreated]=useState<Job|null>(null);
 useEffect(()=>{load()},[]);
 if(created) return <SuccessToken job={created} onNew={()=>setCreated(null)}/>;
 return <JobForm count={jobs.length} onCreated={(j)=>{addJob(j); setCreated(j);}}/>;
}
