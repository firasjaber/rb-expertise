import { Input } from '@chakra-ui/react';
import { FormikValues } from 'formik';
import React from 'react';

interface Props {
  formik: FormikValues;
  field: string;
  type: string;
  ph?: string;
}

const FormikInput = ({ formik, field, type, ph }: Props) => {
  return (
    <label className='text-gray-500'>
      {field} :
      <Input
        placeholder={ph ?? undefined}
        className='mt-2 mb-4'
        type={type}
        name={field}
        onChange={formik.handleChange}
        value={formik.values['field']}
        isInvalid={formik.errors[field] ? true : false}
      />
      {formik.errors[field] && (
        <div className='text-red-400 font-semibold -mt-3 mb-2'>
          {formik.errors[field]}
        </div>
      )}
    </label>
  );
};

export default FormikInput;
