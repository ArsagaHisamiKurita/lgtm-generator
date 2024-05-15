import { InputFile } from './components/InputFile';

const Index = () => {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-[48px] font-bold'>LGTM GENERATOR</h1>
      <div className='mt-[24px]'><InputFile /></div>
    </main>
  );
}

export default Index;