// components/Navbar.jsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Product' },
  { href: '#', label: 'Resource' },
  { href: '#', label: 'Company' },
  { href: '#', label: 'Pricing' },
];

export function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white">
      <Link href="#" className="flex items-center justify-center">
        <span className="text-2xl font-bold">Beautify</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="ml-auto hidden lg:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Sign In
        </Link>
        <Button>Sign Up</Button>
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="#" className="flex items-center justify-center mb-4">
                 <span className="text-2xl font-bold">Appointopia</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2"/>
              <Link href="#" className="text-lg font-medium">Sign In</Link>
              <Button size="lg">Sign Up</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}