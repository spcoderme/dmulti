import { Job } from './types';
export const msgToken=(j:Job)=>`Namaskar ${j.fullName}, Dmulti Services - Tumcha Job Token ${j.token} aahe. Work: ${j.workDetails}. Price: Rs.${j.price}. Status: Received.`;
export const msgReady=(j:Job)=>`Namaskar ${j.fullName}, Tumcha Job ${j.token} READY zala aahe. Krupaya gheun ja. - Dmulti Services`;
export const msgComplete=(j:Job)=>`Namaskar ${j.fullName}, Tumcha Job ${j.token} COMPLETE zala aahe. Dhanyavad! - Dmulti Services`;
