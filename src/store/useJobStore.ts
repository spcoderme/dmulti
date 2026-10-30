import {create} from 'zustand'; import {Job,JobStatus} from '@/lib/types'; import {sampleJobs} from '@/data/sampleJobs';
interface S{jobs:Job[];addJob:(j:Job)=>void;updateStatus:(token:string,s:JobStatus)=>void;load:()=>void}
const KEY='dmulti-jobs';
export const useJobStore=create<S>((set,get)=>({
 jobs:sampleJobs,
 addJob:(j)=>{const n=[j,...get().jobs]; set({jobs:n}); localStorage.setItem(KEY,JSON.stringify(n));},
 updateStatus:(token,s)=>{const n=get().jobs.map(j=>j.token===token?{...j,status:s,history:[...j.history,{status:s,date:new Date().toISOString()}]}:j); set({jobs:n}); localStorage.setItem(KEY,JSON.stringify(n));},
 load:()=>{try{const r=localStorage.getItem(KEY); if(r) set({jobs:JSON.parse(r)});}catch{}}
}));
