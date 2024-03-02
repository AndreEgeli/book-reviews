import Overview from './components/Overview';
import NavBar from '@/components/common/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <Overview />
      </div>
    </>
  );
}
