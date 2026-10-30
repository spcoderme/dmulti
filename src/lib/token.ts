export function generateToken(count:number){ return 'DMS-'+String(count+1).padStart(3,'0'); }
export function whatsappLink(phone:string,msg:string){
 const clean=phone.replace(/\D/g,''); const withCode=clean.startsWith('91')?clean:'91'+clean;
 return `https://wa.me/${withCode}?text=${encodeURIComponent(msg)}`;
}
