import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required('Tên đăng nhập của bạn'),
  email: Yup.string()
    .email('Nhập đúng định dạng email')
    .required('Hãy điền email'),
  password: Yup.string()
    .min(8, ({min}) => `Mật khẩu cần có ít nhất ${min} kí tự`)
    .required('Hãy nhập mật khẩu'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Mật khẩu không khớp')
    .required('Nhập lại mật khẩu'),
});
