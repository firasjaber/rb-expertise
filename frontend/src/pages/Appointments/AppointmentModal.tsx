import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface Props {
  isOpen: any;
  onClose: any;
}

const AppointmentModal = ({ isOpen, onClose }: Props) => {
  const imgUrl =
    'https://images.generated.photos/GSOwjmIWKDjQQXed_9XFtQCG6zPuJrHevAFEtt2--Bg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY3MDQ1LmpwZw.jpg';
  const imgUrl2 =
    'https://www.star.com.tn/templates/ts_bizspeak/images/logo.png';
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth='700px'>
        <ModalHeader>Appointment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className='flex text-gray-600'>
            <div className='w-3/5 space-y-2 text-gray-800'>
              <span>Appointment Details : </span>
              <div>
                <span className='text-gray-500'>id : </span> 120
              </div>
              <div>
                <span className='text-gray-500'>title : </span> First
                Appointment
              </div>
              <div>
                <span className='text-gray-500'>location : </span> Groove
                Street, Gayland, 4224
              </div>
              <div>
                <span className='text-gray-500'>meetup date : </span> 31 Octobre
                2021, 10:00 AM
              </div>
              <div>
                <span className='text-gray-500'>added at : </span> 12 Octobre
                2021, 9:15 AM
              </div>
              <div>
                <span className='text-gray-500'>notes : </span>
                <p className='pl-2 pt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venia.
                </p>
              </div>
              <div className='text-yellow-500'>
                <span className='text-gray-500'>status : </span> Pending
              </div>
            </div>
            <div className='w-2/5 flex flex-col text-gray-800'>
              <div className='space-y-2'>
                <span className='text-gray-600'>Assigned to : </span>
                <div className='flex items-center space-x-4'>
                  <img
                    src={imgUrl}
                    alt='elon'
                    className='w-10 h-10 rounded-full shadow'
                  />
                  <div className='text-gray-800 text-xl'>Elon Muskirinho</div>
                </div>
                <div>
                  <span className='text-gray-500'>Email : </span>{' '}
                  elonmuskirinho@gmail.com
                </div>
                <div>
                  <span className='text-gray-500'>Phone : </span>94235445
                </div>
              </div>
              <div className='mt-4 space-y-2'>
                <span className='text-gray-600'>Assurance details : </span>
                <div className='flex items-center space-x-4'>
                  <img
                    src={imgUrl2}
                    alt='elon'
                    className='w-12 h-auto rounded-sm shadow'
                  />
                  <div className='text-gray-800 text-lg'>STAR Assurances</div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <div className='flex justify-between w-full'>
            <div className='space-x-2'>
              <span className='text-gray-500'>Resolve Actions : </span>
              <Button colorScheme='green'>Accept</Button>
              <Button colorScheme='yellow'>Decline</Button>
            </div>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AppointmentModal;
