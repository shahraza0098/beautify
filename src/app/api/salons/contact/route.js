import { NextResponse } from 'next/server';
import { connect } from '@/lib/db';
import Salon from '@/models/Salon';
import { verifyFirebaseToken } from '@/lib/verifyToken';

export  async function PUT(req) {
  await connect();

  const user = await verifyFirebaseToken(req);
 if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

      

     try {

      const body = await req.json();
    const { contactNumber, address, city } = body;
       const updatedSalon = await Salon.findOneAndUpdate(
         { ownerId: user.uid },
         { contactNumber, address, city },
         { new: true }
       );
 
      // return res.status(200).json({ message: 'Updated', salon: updatedSalon });
       return NextResponse.json({ success: true, salon: updatedSalon, status: 200, message: 'Contact details updated' });
     } catch (error) {
        console.error('Error updating salon contact:', error);
        return NextResponse.json({ error: 'Failed to update contact details' }, { status: 500 });
      
     }

  }

  
