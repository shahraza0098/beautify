import { connect } from '@/lib/db';
import User from '@/models/User';
import { verifyFirebaseToken } from '@/lib/verifyToken';

export async function GET(req) {
  await connect();

  const authUser = await verifyFirebaseToken(req);
  if (!authUser) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const user = await User.findOne({ uid: authUser.uid });
  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(user), { status: 200 });
}

export async function POST(req) {
  await connect();

  const authUser = await verifyFirebaseToken(req);
  if (!authUser) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const body = await req.json();

  try {
    const userExists = await User.findOne({ uid: authUser.uid });
    if (userExists) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    const newUser = new User({
      uid: authUser.uid,
      name: body.name || '',
      email: body.email || '',
      role: body.role || 'customer', // default role
    });

    await newUser.save();

    return new Response(JSON.stringify({ message: 'User created', user: newUser }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
