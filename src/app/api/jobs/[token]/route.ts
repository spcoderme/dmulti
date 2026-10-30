import { NextResponse } from 'next/server';
export async function PATCH(req:Request,{params}:{params:{token:string}}){ const body=await req.json(); return NextResponse.json({success:true,token:params.token,...body}); }
