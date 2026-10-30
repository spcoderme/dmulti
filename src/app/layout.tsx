import './globals.css';
export const metadata={title:'Dmulti Services',description:'Job Token System'};
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang='en'><body>
 <header style={{background:'#fff',padding:'14px',textAlign:'center',boxShadow:'0 1px 6px rgba(0,0,0,.06)',position:'sticky',top:0,zIndex:10}}>
  <a href='/' style={{textDecoration:'none',fontSize:26,fontWeight:900,color:'#2563EB'}}>Dmulti Services</a>
  <nav style={{display:'flex',gap:16,justifyContent:'center',marginTop:8,fontSize:14}}><a href='/'>New Job</a><a href='/dashboard'>All Jobs</a><a href='/track'>Track Job</a></nav></header>
 <main style={{maxWidth:560,margin:'20px auto',padding:'0 14px'}}>{children}</main></body></html>}
