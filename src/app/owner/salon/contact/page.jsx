// File: /src/app/owner/salon/contact/page.jsx

'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '@/lib/firebase';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function SalonContactPage() {
  const [form, setForm] = useState({
    contactNumber: '',
    address: '',
    city: '',
  });

  // useEffect(() => {
  //   // Optionally fetch existing salon contact info here
  //   const fetchSalon = async () => {
  //     try {
  //       const res = await axios.get('/api/salons/contact');
  //       if (res.data?.salon) {
  //         setForm({
  //           contactNumber: res.data.salon.contactNumber || '',
  //           address: res.data.salon.address || '',
  //           city: res.data.salon.city || '',
  //         });
  //       }
  //     } catch (err) {
  //       console.error('Failed to fetch salon contact details');
  //     }
  //   };
  //   fetchSalon();
  // }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form: button, clicked', form);
    
    try {

      const user = auth.currentUser;
      console.log('Current user:', user);
            
      if (!user) throw new Error('User not authenticated');
      
      const token = await user.getIdToken();
      await axios.put('/api/salons/contact', form,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Contact details updated');
    } catch (err) {
      toast.error('Failed to update contact details');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow">
      <h1 className="text-xl font-semibold mb-4">Salon Contact Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="contactNumber"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={handleChange}
        />
        <Input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <Input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
} 
