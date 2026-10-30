import { whatsappLink } from '@/lib/token';
export default function WhatsAppButton({phone,msg,label,color='#25D366'}:{phone:string;msg:string;label:string;color?:string}){
 return <a href={whatsappLink(phone,msg)} target='_blank' rel='noreferrer' style={{display:'block',textAlign:'center',background:color,color:'#fff',padding:'13px',borderRadius:'10px',fontWeight:700,marginTop:'10px',textDecoration:'none'}}>{label}</a>
}
