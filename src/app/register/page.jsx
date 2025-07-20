'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); // default role
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      await axios.post('/api/users', {
        uid,
        email,
        name,
        role,
      });

      router.push('/login');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-3" />
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3" />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-3" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleRegister} className="w-full">Register</Button>
    </div>
  );
}
