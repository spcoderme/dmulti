'use client';
import { useJobStore } from '@/store/useJobStore'; import StatusTimeline from '@/components/StatusTimeline'; import WhatsAppButton from '@/components/WhatsAppButton'; import { msgReady, msgComplete } from '@/lib/whatsapp'; import { JobStatus } from '@/lib/types';
export default function JobDetail({params}:{params:{token:string}}){ const {jobs,updateStatus}=useJobStore(); const job=jobs.find(j=>j.token===params.token);
 if(!job) return <p>Job sapadla nahi. Dashboard var ja.</p>;
 return <div style={{background:'#fff',padding:20,borderRadius:14}}>
  <div style={{display:'flex',justifyContent:'space-between'}}><h2>{job.token}</h2><span>{job.status}</span></div>
  <p><b>Full Name:</b> {job.fullName}</p><p><b>Contact:</b> {job.contactNumber}</p><p><b>WhatsApp:</b> {job.whatsappNumber}</p><p><b>Address:</b> {job.address}</p><p><b>Work:</b> {job.workDetails}</p><p><b>Price:</b> Rs.{job.price}</p>
  <p><b>Received Documents:</b></p><div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{job.receivedDocuments.split(',').map((d,i)=><span key={i} style={{background:'#EFF6FF',padding:'6px 10px',borderRadius:20,fontSize:13}}>✓ {d.trim()}</span>)}</div>
  <h3>History</h3><StatusTimeline job={job}/>
  <h3>Status Badla</h3>
  <div style={{display:'flex',gap:8}}>{(['Processing','Ready','Complete'] as JobStatus[]).map(s=><button key={s} onClick={()=>updateStatus(job.token,s)} style={{flex:1,padding:12,borderRadius:10,border:'1px solid #ddd',background:job.status===s?'#2563EB':'#fff',color:job.status===s?'#fff':'#000',cursor:'pointer'}}>{s}</button>)}</div>
  <WhatsAppButton phone={job.whatsappNumber} msg={msgReady(job)} label='📲 Ready zala - WhatsApp'/><WhatsAppButton phone={job.whatsappNumber} msg={msgComplete(job)} label='✅ Complete zala - WhatsApp' color='#10B981'/>
 </div>}
