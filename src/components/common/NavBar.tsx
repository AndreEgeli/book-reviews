import Link from 'next/link';
import { BookText } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { supabaseServer } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavBar = async () => {
  // Need to get user
  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="fixed bg-white top-0 insetx-0 h-12 w-full text-black z-10">
      <div className="container flex items-center justify-start px-6 mt-2">
        <div data-tip="Home">
          <Link href="/">
            <BookText className="cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20" />
          </Link>
        </div>
        {user ? (
          <NavBarAvatar />
        ) : (
          <Link
            className={`cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20 ml-auto whitespace-nowrap rounded-md text-sm font-medium ring-offset-background`}
            href="/auth"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

const NavBarAvatar = async () => {
  const signOut = async () => {
    'use server';

    const supabase = supabaseServer();
    await supabase.auth.signOut();
    return redirect('/auth');
  };

  const handleSettingsClick = async () => {
    'use server';
    redirect('/settings');
  };

  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 ml-auto">
            <img
              src={user?.user_metadata?.avatar_url}
              alt="avatar"
              className="w-7 h-7 rounded-full"
            />
            <span>{user?.user_metadata?.name}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <form action={handleSettingsClick}>
              <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                Settings
              </button>
            </form>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>Dark Mode</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <form action={signOut}>
              <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                Logout
              </button>
            </form>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavBar;
