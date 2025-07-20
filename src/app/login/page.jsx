'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect after login
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3" />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-3" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleLogin} className="w-full">Login</Button>
    </div>
  );
}
