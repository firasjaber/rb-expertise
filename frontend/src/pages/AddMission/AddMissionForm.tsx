import { Button, Heading } from '@chakra-ui/react';
import FormikInput from 'components/FormikInput';
import ListInput from 'components/ListInput';
import { useFormik } from 'formik';
import {
  useCreateMissionMutation,
  useGetAssurancesQuery,
  useGetEmployeesQuery,
} from 'generated/graphql';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';

interface Props {}

const AddMissionForm = (props: Props) => {
  const [createMission] = useCreateMissionMutation();
  const history = useHistory();

  //dynamic dropboxs
  const { data: assurancesd } = useGetAssurancesQuery();
  let assruancesList = assurancesd?.assurances ?? [];
  let assurances = [
    {
      id: -1,
      name: 'Select an agency',
    },
    ...assruancesList,
  ];

  const { data: employeesd } = useGetEmployeesQuery();
  let employeesListd = employeesd?.employees ?? [];
  let list: any = [];
  employeesListd.map((emp) =>
    list.push({ id: emp?.id, name: emp?.firstName + ' ' + emp?.lastName })
  );
  let employees = [{ id: -1, name: 'Select an employee' }, ...list];

  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [selectedAssurance, setSelectedAssurance] = useState(assurances[0]);

  const formik = useFormik({
    initialValues: {
      title: '',
      location: '',
      endDate: '',
      startDate: '',
      registrationNumber: '',
      holder: '',
      holderEmail: '',
      holderPhoneNumber: '',
      agencyName: '',
      agencyResponsible: '',
      agencyEmail: '',
      agencyPhoneNumber: '',
      assuranceContractNumber: '',
      employeeId: selectedEmployee?.id ?? -1,
      assuranceId: selectedAssurance?.id ?? -1,
    },
    /* validationSchema: Yup.object({
      title: Yup.string().min(3, 'Must be 15 characters or more').required(),
      location: Yup.string().min(3, 'Must be 15 characters or more').required(),
      startDate: Yup.date().required(),
      endDate: Yup.date().required(),
      registrationNumber: Yup.string().required(),
      holder: Yup.string().required(),
      holderEmail: Yup.string().required(),
      holderPhoneNumber: Yup.string().required(),
      agencyName: Yup.string().required(),
      agencyResponsible: Yup.string().required(),
      agencyEmail: Yup.string().required(),
      agencyPhoneNumber: Yup.string().required(),
      assuranceContractNumber: Yup.string().required(),
      employeeId: Yup.number().moreThan(-1, 'employee is required'),
      assuranceId: Yup.number().moreThan(-1, 'assurance is required'),
    }), */
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      let data = {
        carRegistrationNumber: values.registrationNumber,
        carHolderName: values.holder,
        carHolderEmail: values.holderEmail,
        carHolderPhone: values.holderPhoneNumber,
        repairAgencyName: values.agencyName,
        repairAgencyResponsible: values.agencyResponsible,
        repairAgencyEmail: values.agencyEmail,
        repairAgencyPhone: values.agencyPhoneNumber,
        address: values.location,
        starts: values.startDate,
        ends: values.endDate,
        employeeId: values.employeeId,
        assuranceId: values.assuranceId,
        assuranceContractNumber: values.assuranceContractNumber,
        title: values.title,
        finished: false,
      };
      createMission({ variables: { createMissionData: data } })
        .then(() => {
          toast.success('Mission added succesfully!');
          formik.resetForm();
          history.push('/missions');
        })
        .catch((err) => {
          console.log(err.message);
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
              ph='Mission Title'
            />
            <FormikInput
              formik={formik}
              field='location'
              type='text'
              ph='Happy Street, Earth 0000'
            />
            <FormikInput formik={formik} field='startDate' type='date' />
            <FormikInput formik={formik} field='endDate' type='date' />
            <Heading as='h2' size='md' fontWeight='semibold' mb='4'>
              Vehicle Infos :
            </Heading>
            <FormikInput
              formik={formik}
              field='registrationNumber'
              type='text'
              ph='000 TUN 0000'
            />
            <FormikInput
              formik={formik}
              field='holder'
              type='text'
              ph='Jhon Doe'
            />
            <FormikInput
              formik={formik}
              field='holderEmail'
              type='text'
              ph='elon@gmail.com'
            />
            <FormikInput
              formik={formik}
              field='holderPhoneNumber'
              type='phone'
              ph='00 000 000'
            />
            <Heading as='h2' size='md' fontWeight='semibold' mb='4'>
              Car Mechanic Infos :
            </Heading>
            <FormikInput
              formik={formik}
              field='agencyName'
              type='text'
              ph='John Mecanics'
            />
            <FormikInput
              formik={formik}
              field='agencyResponsible'
              type='text'
              ph='Issam Cylandre'
            />
            <FormikInput
              formik={formik}
              field='agencyPhoneNumber'
              type='text'
              ph='00 000 000'
            />
            <FormikInput
              formik={formik}
              field='agencyEmail'
              type='text'
              ph='issam@gmail.com'
            />
            <div className='space-x-2 mt-5'>
              <Button
                type='submit'
                colorScheme='blue'
                w='120px'
                //isLoading={loading}
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
                  list={employees}
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
                  list={assurances}
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

export default AddMissionForm;
