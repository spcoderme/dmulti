import Link from 'next/link'; import { Job } from '@/lib/types';
const c:any={Received:'#F59E0B',Processing:'#2563EB',Ready:'#10B981',Complete:'#6B7280'};
export default function JobCard({job}:{job:Job}){ return <Link href={`/job/${job.token}`} style={{textDecoration:'none',color:'#000'}}><div style={{background:'#fff',borderRadius:14,padding:16,boxShadow:'0 2px 10px rgba(0,0,0,.06)',marginBottom:12}}>
<div style={{display:'flex',justifyContent:'space-between'}}><b>{job.token}</b><span style={{background:c[job.status],color:'#fff',padding:'4px 10px',borderRadius:20,fontSize:12}}>{job.status}</span></div>
<div style={{marginTop:8,fontWeight:700}}>{job.fullName}</div><div style={{color:'#666',fontSize:14}}>{job.workDetails} • Rs.{job.price}</div><div style={{color:'#666',fontSize:13}}>{job.contactNumber} • {job.receivedDocuments}</div></div></Link>}
