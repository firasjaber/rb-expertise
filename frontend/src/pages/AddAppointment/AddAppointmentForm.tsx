import { Button, Heading, Text, Textarea } from '@chakra-ui/react';
import FormikInput from 'components/FormikInput';
import ListInput from 'components/ListInput';
import { useFormik } from 'formik';
import { useCreateAppointmentMutation } from 'generated/graphql';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

interface Props {}

const assurance = [
  { id: -1, name: 'Select an agency' },
  { id: 1, name: 'STAR Assurances' },
  { id: 2, name: 'GAT Assurances' },
  { id: 3, name: 'AMI Assurances' },
  { id: 4, name: 'Coman Assurances' },
];

const employeesList = [
  { id: -1, name: 'Select an employee' },
  { id: 1, name: 'Elon Muskirinho' },
  { id: 2, name: 'Firas Jaber' },
  { id: 3, name: 'Jamila LCK' },
  { id: 4, name: 'Brahim Niggro' },
  { id: 5, name: 'Imed Eleven' },
];

const AddAppointmentForm = (props: Props) => {
  const [createAppointment, { loading }] = useCreateAppointmentMutation();
  const history = useHistory();
  const [selectedEmployee, setSelectedEmployee] = useState(employeesList[0]);
  const [selectedAssurance, setSelectedAssurance] = useState(assurance[0]);

  const formik = useFormik({
    initialValues: {
      title: '',
      location: '',
      date: '',
      notes: '',
      employeeId: selectedEmployee.id,
      assuranceId: selectedAssurance.id,
    },
    validationSchema: Yup.object({
      title: Yup.string().min(3, 'Must be 15 characters or more').required(),
      location: Yup.string().min(3, 'Must be 15 characters or more').required(),
      date: Yup.date().required(),
      notes: Yup.string(),
      employeeId: Yup.number().moreThan(-1, 'employee is required'),
      assuranceId: Yup.number().moreThan(-1, 'assurance is required'),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      createAppointment({ variables: { createAppointmentData: values } })
        .then(() => {
          toast.success('Appointment added succesfully!');
          formik.resetForm();
          history.push('/team');
        })
        .catch((err) => {
          toast.error('Error occured, try later...');
        });
    },
  });

  const customHandleEmployeeSelection = (data: any) => {
    setSelectedEmployee(data);
    formik.setFieldValue('employeeId', data.id);
  };

  const customHandleAssuranceSelection = (data: any) => {
    setSelectedAssurance(data);
    formik.setFieldValue('assuranceId', data.id);
  };

  const handleReset = () => formik.resetForm();

  return (
    <div className='bg-gray-50 p-6 rounded-lg'>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex space-x-4'>
          <div className='w-3/5'>
            <Heading as='h2' size='md' fontWeight='semibold' mb='4'>
              Basic Infos :
            </Heading>
            <FormikInput
              formik={formik}
              field='title'
              type='text'
              ph='Appointment Title'
            />
            <FormikInput
              formik={formik}
              field='location'
              type='text'
              ph='Happy Street, Earth 0000'
            />
            <FormikInput formik={formik} field='date' type='date' />
            <Text mb='8px' textColor='gray.500'>
              notes :{' '}
            </Text>
            <Textarea
              value={formik.values.notes}
              name='notes'
              onChange={formik.handleChange}
              placeholder='Here is a sample placeholder'
              size='sm'
            />
            <div className='space-x-2 mt-5'>
              <Button
                type='submit'
                colorScheme='blue'
                w='120px'
                isLoading={loading}
              >
                Submit
              </Button>
              <Button
                type='reset'
                colorScheme='blue'
                variant='outline'
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </div>
          <div className='w-2/5 '>
            <Heading as='h2' size='md' fontWeight='semibold' mb='4'>
              Assignees Infos :
            </Heading>
            <div className='text-gray-500 mt-5 space-y-6'>
              <div>
                employee :
                <ListInput
                  list={employeesList}
                  selected={selectedEmployee}
                  setSelected={customHandleEmployeeSelection}
                  error={formik.errors.employeeId ? true : false}
                />
                {formik.errors.employeeId && (
                  <div className='text-red-400 font-semibold mt-1'>
                    {formik.errors.employeeId}
                  </div>
                )}
              </div>
              <div>
                assurance :
                <ListInput
                  list={assurance}
                  selected={selectedAssurance}
                  setSelected={customHandleAssuranceSelection}
                  error={formik.errors.assuranceId ? true : false}
                />
                {formik.errors.assuranceId && (
                  <div className='text-red-400 font-semibold mt-1'>
                    {formik.errors.assuranceId}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAppointmentForm;
