import { Job, JobStatus } from '@/lib/types'; import { formatDate } from '@/lib/utils';
const steps:JobStatus[]=['Received','Processing','Ready','Complete'];
export default function StatusTimeline({job}:{job:Job}){
 const idx=steps.indexOf(job.status);
 return <div>{steps.map((s,i)=>{const h=job.history.find(x=>x.status===s); return <div key={s} style={{display:'flex',gap:12,padding:'10px 0'}}>
 <div style={{width:28,height:28,borderRadius:'50%',background:i<=idx?'#2563EB':'#E5E7EB',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>{i<=idx?'✓':i+1}</div>
 <div><b>{s}</b><div style={{fontSize:13,color:'#666'}}>{h?formatDate(h.date):'Pending'}</div></div></div>})}</div>
}
