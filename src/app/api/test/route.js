// /app/api/test-db/route.ts
import { connect } from '@/lib/db';
import Test from '@/models/test';

export async function POST(req) {
  try {
    await connect();

    const salon = await Test.create({
      name: 'Test Salon',
    });

    console.log('✅ Database connected & Test Salon created!');
    
    return new Response(JSON.stringify(salon), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Database connection error:', error);
    return new Response('Database connection failed', { status: 500 });
  }
}
