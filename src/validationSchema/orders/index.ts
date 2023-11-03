import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  date: yup.date().required(),
  total_price: yup.number().integer().nullable(),
  customer_id: yup.string().nullable().required(),
  wait_staff_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
