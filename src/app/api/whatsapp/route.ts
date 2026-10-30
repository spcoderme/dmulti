import { NextResponse } from 'next/server'; import { whatsappLink } from '@/lib/token';
export async function POST(req:Request){ const {phone,msg}=await req.json(); return NextResponse.json({link:whatsappLink(phone,msg)}); }
