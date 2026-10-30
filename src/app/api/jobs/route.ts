import { NextResponse } from 'next/server';
// TODO: Supabase connect kelyavar ithe DB query yeil. Sadhya frontend localStorage vaparto.
export async function GET(){ return NextResponse.json({message:'Use frontend store for now. Connect Supabase here.'}); }
export async function POST(req:Request){ const body=await req.json(); return NextResponse.json({success:true,job:body}); }
