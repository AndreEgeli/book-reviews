import Link from 'next/link';
import { BookText } from 'lucide-react';

import { supabaseServer } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const NavBar = async () => {
  // Need to get user
  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    'use server';

    const supabase = supabaseServer();
    await supabase.auth.signOut();
    return redirect('/login');
  };

  return (
    <div className="bg-transparent py-1 fixed w-full z-10 top-0 text-white">
      <div className="container flex items-center justify-start px-6">
        <div data-tip="Home">
          <Link href="/">
            <BookText className="cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20" />
          </Link>
        </div>
        {user ? (
          <div className="cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20 ml-auto whitespace-nowrap rounded-md text-sm font-medium ring-offset-background">
            <form action={signOut}>
              <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                Logout
              </button>
            </form>
          </div>
        ) : (
          <Link
            className={`cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20 ml-auto whitespace-nowrap rounded-md text-sm font-medium ring-offset-background`}
            href="/login"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
