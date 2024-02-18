import Overview from '@/components/main/Overview';
import Header from '@/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <Overview />
        </div>
      </section>
    </>
  );
}
