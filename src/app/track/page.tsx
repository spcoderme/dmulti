'use client';
import {useState} from 'react'; import { useJobStore } from '@/store/useJobStore'; import StatusTimeline from '@/components/StatusTimeline';
export default function Track(){ const {jobs}=useJobStore(); const [t,setT]=useState(''); const [found,setFound]=useState<any>(null);
 return <div style={{background:'#fff',padding:20,borderRadius:14}}><h2>Track Job</h2><p>Token taka - ex: DMS-001</p>
 <input value={t} onChange={e=>setT(e.target.value)} placeholder='Enter Token' style={{width:'100%',padding:12,borderRadius:10,border:'1px solid #D9D9D9'}}/>
 <button onClick={()=>setFound(jobs.find(j=>j.token.toLowerCase()===t.trim().toLowerCase()))} style={{width:'100%',marginTop:10,padding:12,background:'#2563EB',color:'#fff',border:'none',borderRadius:10,fontWeight:700}}>Check Status</button>
 {found&&<div style={{marginTop:16}}><b>{found.token} - {found.fullName}</b><div>{found.workDetails} • Rs.{found.price}</div><StatusTimeline job={found}/></div>}
 {found===undefined&&<p>Token sapadla nahi.</p>}</div>}
