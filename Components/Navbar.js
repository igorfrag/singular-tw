export default function Navbar() {
  const navigation = [
    { name: 'Docs', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Enterprise', href: '#' },
  ];

  return (
    <div className='flex bg-white lg:px-48 h-16 items-center justify-center border-b border-gray-300'>
      <div className='m-12'>
        <img src='public/logoipsum.svg' alt='LogoIpsum' />
      </div>
      <div className='flex space-x-12'>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className='p-2 text-gray-600 hover:text-black'
          >
            {item.name}
          </a>
        ))}
        <button className='p-1 px-4 text-white font-semibold bg-blue-600 rounded-lg  border border-transparent hover:bg-white hover:border-blue-600  hover:border  hover:text-blue-600 delay-100 duration-150 transition ease-in-out'>
          Learn
        </button>
      </div>
    </div>
  );
}
