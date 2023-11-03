import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  open_hours: yup.date().nullable(),
  close_hours: yup.date().nullable(),
  name: yup.string().required(),
});
