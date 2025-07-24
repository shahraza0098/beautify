import { NextResponse } from 'next/server';
import { verifyFirebaseToken } from '@/lib/verifyToken';
import { connect } from '@/lib/db';
import Salon from '@/models/Salon';

export async function POST(req) {
  await connect();
  

  const user = await verifyFirebaseToken(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const { name, description } = body;
    console.log('Received data:', body);
    

    if (!name) {
      return NextResponse.json({ error: 'Salon name is required' }, { status: 400 });
    }

    const salon = await Salon.findOneAndUpdate(
      { ownerId: user.uid },
      { name, description, ownerId: user.uid },
      { new: true, upsert: true }
    );

    return NextResponse.json({ success: true, salon });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
