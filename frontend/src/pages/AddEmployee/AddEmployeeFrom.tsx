import { Avatar, Button, Heading } from '@chakra-ui/react';
import FormikInput from 'components/FormikInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Props {}

const AddEmployeeFrom = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      role: '',
      startDate: '',
      endDate: '', //not required
      phone: '',
      address: '',
      city: '',
      region: '',
      pictureUrl: '', //not required
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(3, 'Must be 15 characters or more')
        .required(),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(3, 'Must be 15 characters or more')
        .required(),
      birthDate: Yup.date().required(),
      role: Yup.string().required(),
      startDate: Yup.date().required(),
      phone: Yup.string().length(8, 'Phone number not valid').required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      region: Yup.string().required(),
      pictureUrl: Yup.string(),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='bg-gray-50 p-6 rounded-lg'>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex space-x-4'>
          <div className='w-2/5'>
            <Heading as='h2' size='md' fontWeight='semibold' mb='4'>
              Basic Infos :
            </Heading>
            <FormikInput
              formik={formik}
              field='firstName'
              type='text'
              ph='Jhon'
            />
            <FormikInput
              formik={formik}
              field='lastName'
              type='text'
              ph='Doe'
            />
            <FormikInput
              formik={formik}
              field='email'
              type='email'
              ph='me@gmail.com'
            />
            <FormikInput
              formik={formik}
              field='phone'
              type='tel'
              ph='11222333'
            />
            <FormikInput formik={formik} field='birthDate' type='date' />
            <FormikInput
              formik={formik}
              field='address'
              type='text'
              ph='Happy Street,The City, 11'
            />
            <div className='flex flex-col'>
              <FormikInput
                formik={formik}
                field='city'
                type='text'
                ph='The city'
              />
              <FormikInput formik={formik} field='region' type='text' ph='ER' />
            </div>
            <div className='space-x-2 mt-5'>
              <Button type='submit' colorScheme='blue' w='120px'>
                Submit
              </Button>
              <Button type='reset' colorScheme='blue' variant='outline'>
                Reset
              </Button>
            </div>
          </div>
          <div className='w-2/5'>
            <Heading as='h2' size='md' fontWeight='semibold' mb='4'>
              Job Infos :
            </Heading>
            <FormikInput formik={formik} field='role' type='text' ph='expert' />
            <FormikInput formik={formik} field='startDate' type='date' />
            <FormikInput formik={formik} field='endDate' type='date' />
          </div>
          <div className='w-1/5 flex flex-col items-center'>
            <Avatar
              size='2xl'
              src={formik.values.pictureUrl}
              bg='blue.400'
              mb='6'
            />
            <FormikInput formik={formik} field='pictureUrl' type='text' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeFrom;
