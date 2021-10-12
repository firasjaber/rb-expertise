import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { KeyIcon, UserIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Logo from './../utils/logo.png';

interface Props {}

export const Login = (props: Props) => {
  return (
    <div className='flex items-center justify-center bg-gray-200 w-screen h-screen'>
      <div className='flex flex-col items-center -mt-20 rounded-xl shadow bg-blue-600 text-white w-72 font-nunito'>
        <div>
          <img src={Logo} alt='logo' className='w-52 h-auto my-3 mt-6' />
        </div>
        <div className='w-10/12 h-1 bg-white shadow rounded-2xl opacity-60'></div>
        <div className='text-2xl font-bold tracking-wider my-4'>login</div>
        <div className='space-y-2'>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<UserIcon className='w-4 h-4 text-gray-800' />}
            />
            <Input type='text' bgColor='white' placeholder='email' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<KeyIcon className='w-4 h-4 text-gray-800' />}
            />
            <Input type='text' bgColor='white' placeholder='password' />
          </InputGroup>
        </div>
        <div className='w-9/12 my-4 mb-8'>
          <Link to='/'>
            <Button w='full' colorScheme='twitter'>
              Enter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
