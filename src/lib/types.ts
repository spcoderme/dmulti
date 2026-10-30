export type JobStatus='Received'|'Processing'|'Ready'|'Complete';
export interface HistoryItem{status:JobStatus;date:string;note?:string}
export interface Job{
 id:string; token:string; fullName:string; contactNumber:string; whatsappNumber:string;
 address:string; workDetails:string; receivedDocuments:string; price:string;
 status:JobStatus; history:HistoryItem[]; createdAt:string;
}
