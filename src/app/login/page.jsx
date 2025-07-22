// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/lib/firebase';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push('/'); // Redirect after login
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3" />
//       <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-3" />
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//       <Button onClick={handleLogin} className="w-full">Login</Button>
//     </div>
//   );
// }




// app/login/page.jsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Ensure this path is correct
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Chrome } from 'lucide-react'; // Example icon

// A simple Facebook icon component if you don't have one
const FacebookIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      setLoading(true);
      setError(''); // Clear previous errors
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect to dashboard or home after login
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Placeholder functions for social logins
  const handleGoogleSignIn = () => {
    // Add your Google Sign-In logic here
    console.log("Signing in with Google...");
  };

  const handleFacebookSignIn = () => {
    // Add your Facebook Sign-In logic here
    console.log("Signing in with Facebook...");
  };


  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2 bg-gray-50">
      {/* Left Column: Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome Back!
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to access your account
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12"
            />
            
            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button type="submit" className="w-full h-11" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <div className="space-y-3">
             <Button variant="outline" className="w-full h-11 bg-[#DB4437] hover:bg-[#C23321] text-white" onClick={handleGoogleSignIn}>
               <Chrome className="mr-2 h-5 w-5" /> Sign in with Google
             </Button>
             <Button variant="outline" className="w-full h-11 bg-[#4267B2] hover:bg-[#365899] text-white" onClick={handleFacebookSignIn}>
               <FacebookIcon className="mr-2 h-5 w-5" /> Sign in with Facebook
             </Button>
          </div>
          
           <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>

        </div>
      </div>

      {/* Right Column: Quote */}
      <div className="hidden lg:flex items-center justify-center bg-gray-100 p-12 relative">
         {/* Decorative Blobs */}
         <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200 rounded-bl-full opacity-50"></div>
         <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-200 rounded-tr-full opacity-50"></div>

        <div className="text-center max-w-md relative z-10">
            <span className="text-6xl font-serif text-indigo-300">“</span>
            <p className="text-3xl font-medium text-gray-700 leading-relaxed">
                Join us to <i className="font-semibold text-indigo-600">effortlessly</i> organize your schedule, manage events, and stay on top of your busy life.
            </p>
            <span className="block mt-4 text-6xl font-serif text-indigo-300">”</span>
        </div>
      </div>
    </div>
  );
}
