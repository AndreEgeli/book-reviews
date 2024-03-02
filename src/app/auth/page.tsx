'use client';

import { Button } from '@/components/ui/button';
import { KeyRound } from 'lucide-react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { supabaseClient } from '@/utils/supabase/client';

export default function page() {
  const handleLoginWithOAuth = async (provider: 'google' | 'github') => {
    try {
      console.log('login with oauth');

      const supabase = supabaseClient();

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: window.location.origin + '/auth/callback' },
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-96 rounded-md border p-5 space-y-5 relative bg-slate-800">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold">Hello!</h1>
        </div>
        <p className="text-sm text-gray-300">Register Today</p>
        <div className="flex flex-col gap-5">
          <Button
            className="w-full flex items-center gap-2"
            variant="outline"
            onClick={() => handleLoginWithOAuth('github')}
          >
            <FaGithub />
            Github
          </Button>
          <Button
            className="w-full flex items-center gap-2"
            variant="outline"
            onClick={() => handleLoginWithOAuth('google')}
          >
            {' '}
            <FcGoogle /> Google
          </Button>
        </div>
      </div>
    </div>
  );
}
