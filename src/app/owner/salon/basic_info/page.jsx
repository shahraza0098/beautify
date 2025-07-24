'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { auth } from '@/lib/firebase';
import axios from 'axios';

export default function ManageSalonPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    try {
      const user = auth.currentUser;
      console.log('Current user:', user);
      
      if (!user) throw new Error('User not authenticated');

      const token = await user.getIdToken();

      console.log(token);
      

      await axios.post('/api/salons/manage', {
        name,
        description,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('Salon information saved!');
    } catch (error) {
      setMessage('Error saving salon info.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Basic Information</h1>
      <Input
        placeholder="Salon Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4"
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </Button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
