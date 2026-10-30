import { Job } from '@/lib/types';
export default function StatsCards({jobs}:{jobs:Job[]}){ const n=(s:string)=>jobs.filter(j=>j.status===s).length;
 const items=[['Total Jobs',jobs.length,'#111'],['Processing',n('Processing'),'#2563EB'],['Ready',n('Ready'),'#10B981'],['Complete',n('Complete'),'#6B7280']];
 return <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:16}}>{items.map(([l,v,col])=><div key={l} style={{background:'#fff',padding:14,borderRadius:12,textAlign:'center'}}><div style={{fontSize:22,fontWeight:800,color:col}}>{v}</div><div style={{fontSize:12,color:'#666'}}>{l}</div></div>)}</div>}
