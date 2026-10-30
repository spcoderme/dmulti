import { Job } from '@/lib/types'; import { msgToken } from '@/lib/whatsapp'; import WhatsAppButton from './WhatsAppButton';
export default function SuccessToken({job,onNew}:{job:Job;onNew:()=>void}){ return <div style={{background:'#fff',borderRadius:16,padding:28,textAlign:'center',boxShadow:'0 4px 20px rgba(0,0,0,.06)'}}>
 <div style={{fontSize:40}}>✅</div><h2>Job Created!</h2><p style={{color:'#666'}}>Client la ha token dya</p>
 <div style={{fontSize:36,fontWeight:900,color:'#2563EB',margin:'12px 0'}}>{job.token}</div>
 <div><b>{job.fullName}</b> • Rs.{job.price} • {job.workDetails}</div>
 <WhatsAppButton phone={job.whatsappNumber} msg={msgToken(job)} label='📲 WhatsApp var Token Pathva'/>
 <button onClick={onNew} style={{marginTop:10,padding:12,width:'100%',borderRadius:10,border:'1px solid #ddd',background:'#fff',cursor:'pointer'}}>＋ Navin Job</button>
 <a href='/dashboard' style={{display:'block',marginTop:10,color:'#2563EB'}}>Dashboard bagha →</a></div>}
