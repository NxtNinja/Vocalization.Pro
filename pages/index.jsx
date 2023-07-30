import dynamic from 'next/dynamic';

const Display = dynamic(() => import('@/components/Display'), {
  ssr: false,
});

const index = () => {
  return (
    <>
      <Display />
    </>
  );
};

export default index;
