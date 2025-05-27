import Header from '@/components/Header';

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className='wrapper page'>
      <Header
        title='Veronika'
        subHeader='test@test.test'
        userImg='/assets/images/dummy.jpg'
      />
      User id: {id}
    </div>
  );
};

export default Page;
