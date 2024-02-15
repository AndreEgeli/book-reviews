import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { BookText } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-transparent py-2 fixed w-full z-10 top-0 text-white">
      <div className="container flex items-center justify-start px-6">
        <div data-tip="Home">
          <Link href="/">
            <BookText className="cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20" />
          </Link>
        </div>
        <Link
          className={`${buttonVariants()} cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20 ml-4 `}
          href="/books"
        >
          See Books
        </Link>
        <Link
          className={`${buttonVariants()} cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20 ml-auto`}
          href="/sign-in"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
