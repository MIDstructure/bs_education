import * as yup from 'yup'

const loginValid = yup.object().shape({
  // name: yup.string().required().min(3)
  email: yup.string().email("Недопустимые символы").required("Заполните это поле"),
  password: yup.string().min(8, "Минимум 8 символом").required("Заполните это поле"),
})

export {
  loginValid
}