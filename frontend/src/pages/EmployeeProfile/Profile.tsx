import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Skeleton } from '@chakra-ui/skeleton';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  GetEmployeesDocument,
  useDeleteOneEmployeeMutationMutation,
} from 'generated/graphql';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
interface Props {
  loading: boolean;
  employeeId?: string;
  //TODO: Fix this typing shit later
  employee: any;
}

const Profile = ({ loading, employee, employeeId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteOneEmployee, { loading: mutationLoading }] =
    useDeleteOneEmployeeMutationMutation({
      refetchQueries: [{ query: GetEmployeesDocument }],
    });
  const history = useHistory();

  const handleDelete = async () => {
    await deleteOneEmployee({
      variables: { deleteOneEmployeeId: Number(employeeId) },
    })
      .then(() => {
        onClose();
        toast.success('Employee deleted succesfully!');
        history.push('/team');
      })
      .catch(() => {
        onClose();
        toast.error('Error occured, try again...');
      });
  };
  return (
    <div className='bg-gray-50 w-full rounded-lg shadow-lg lg:w-2/3'>
      <div className='flex justify-between items-center font-semibold shadow-sm p-3 px-5 text-xl text-gray-700'>
        <div>Profile Details</div>
        <InformationCircleIcon className='h-8 w-8 text-blue-400' />
      </div>
      <div className='relative p-4 px-6'>
        <Skeleton isLoaded={!loading} borderRadius='xl'>
          <Avatar
            size='2xl'
            src={employee?.pictureUrl}
            bg='blue.400'
            pos='absolute'
            className='right-0 mb-6 mr-10 lg:mr-15 xl:mr-20 mt-4'
          />
          <ul className='space-y-2 text-lg text-gray-700'>
            <li>
              <span className='text-gray-400'>First Name : </span>
              {employee?.firstName}
            </li>
            <li>
              <span className='text-gray-400'>Last Name : </span>{' '}
              {employee?.lastName}
            </li>
            <li>
              <span className='text-gray-400'>Email : </span> {employee?.email}
            </li>
            <li>
              <span className='text-gray-400'>Phone : </span> {employee?.phone}
            </li>
            <li>
              <span className='text-gray-400'>Address : </span>{' '}
              {employee?.address}
            </li>
            <li>
              <span className='text-gray-400'>City : </span> {employee?.city}
            </li>
            <li>
              <span className='text-gray-400'>Region : </span>{' '}
              {employee?.region}
            </li>
            <li>
              <span className='text-gray-400'>Birth date : </span>
              {employee?.birthDate &&
                format(new Date(employee?.birthDate), 'do MMMM yyyy')}
            </li>
            <li>
              <span className='text-gray-400'>Role : </span>
              Expert
            </li>
            <li>
              <span className='text-gray-400'>Start Date : </span>{' '}
              {employee?.startDate &&
                format(new Date(employee?.startDate), 'do MMMM yyyy')}
            </li>
            <li>
              <span className='text-gray-400'>End Date : </span>{' '}
              {employee?.endDate
                ? format(new Date(employee?.endDate), 'do MMMM yyyy')
                : 'Undetermined'}
            </li>
            <li>
              <span className='text-gray-400'>Created at : </span>
              {employee?.birthDate &&
                format(new Date(employee?.birthDate), 'do MMMM yyyy')}
            </li>
          </ul>
          <div className='my-4 mt-6 space-x-4'>
            <Button colorScheme='yellow'>Edit Employee</Button>
            <Button colorScheme='red' onClick={onOpen}>
              Delete Employee
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Delete Warning</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    Are you sure to delete <b>{employee?.firstName}</b> ?
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button variant='ghost' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme='red'
                    onClick={handleDelete}
                    isLoading={mutationLoading}
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default Profile;
