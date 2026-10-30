'use client';
import {useState} from 'react'; import { Job } from '@/lib/types'; import { generateToken } from '@/lib/token';
const input:React.CSSProperties={width:'100%',padding:'14px',borderRadius:'10px',border:'1px solid #D9D9D9',fontSize:'15px',boxSizing:'border-box',outline:'none'};
const label:React.CSSProperties={fontWeight:700,marginBottom:'6px',display:'block'};
export default function JobForm({onCreated,count}:{onCreated:(j:Job)=>void;count:number}){
 const [f,setF]=useState({fullName:'',contactNumber:'',whatsappNumber:'',address:'',workDetails:'',receivedDocuments:'',price:''});
 const [same,setSame]=useState(false);
 const set=(k:string,v:string)=>setF(p=>({...p,[k]:v}));
 const submit=(e:any)=>{e.preventDefault(); if(!f.fullName||!f.contactNumber||!f.whatsappNumber) return alert('Full Name, Contact, WhatsApp bhara');
  const job:Job={id:Date.now().toString(),token:generateToken(count),fullName:f.fullName,contactNumber:f.contactNumber,whatsappNumber:f.whatsappNumber,address:f.address,workDetails:f.workDetails,receivedDocuments:f.receivedDocuments,price:f.price,status:'Received',history:[{status:'Received',date:new Date().toISOString()}],createdAt:new Date().toISOString()};
  onCreated(job);};
 return <form onSubmit={submit} style={{background:'#fff',borderRadius:'16px',padding:'28px',boxShadow:'0 4px 20px rgba(0,0,0,.06)'}}>
  <h2 style={{textAlign:'center',margin:0,fontSize:26}}>Personal Details</h2><p style={{textAlign:'center',color:'#666'}}>Please fill in your details</p>
  <div style={{marginBottom:14}}><label style={label}>Full Name</label><input style={input} placeholder='Enter your full name' value={f.fullName} onChange={e=>set('fullName',e.target.value)}/></div>
  <div style={{marginBottom:14}}><label style={label}>Contact Number</label><input style={input} placeholder='Enter contact number' value={f.contactNumber} onChange={e=>{set('contactNumber',e.target.value); if(same) set('whatsappNumber',e.target.value);}}/></div>
  <div style={{marginBottom:14}}><label style={label}>WhatsApp Number</label><input style={input} placeholder='Enter WhatsApp number' value={f.whatsappNumber} onChange={e=>set('whatsappNumber',e.target.value)}/><label style={{fontSize:13}}><input type='checkbox' checked={same} onChange={e=>{setSame(e.target.checked); if(e.target.checked) set('whatsappNumber',f.contactNumber);}}/> WhatsApp same as Contact</label></div>
  <div style={{marginBottom:14}}><label style={label}>Address</label><textarea style={{...input,height:70}} placeholder='Enter your address' value={f.address} onChange={e=>set('address',e.target.value)}/></div>
  <div style={{marginBottom:14}}><label style={label}>Work Details</label><textarea style={{...input,height:70}} placeholder='Briefly describe your work details' value={f.workDetails} onChange={e=>set('workDetails',e.target.value)}/></div>
  <div style={{marginBottom:14}}><label style={label}>Received Documents</label><input style={input} placeholder='Enter received documents' value={f.receivedDocuments} onChange={e=>set('receivedDocuments',e.target.value)}/></div>
  <div style={{marginBottom:18}}><label style={label}>Price</label><input style={input} placeholder='Enter price' type='number' value={f.price} onChange={e=>set('price',e.target.value)}/></div>
  <button style={{width:'100%',background:'#2563EB',color:'#fff',padding:'14px',border:'none',borderRadius:'10px',fontWeight:700,fontSize:16,cursor:'pointer'}}>Submit</button></form>
}
