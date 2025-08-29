export const minLengthValidation = (minLength: number) => ({
  minLength: {
    value: minLength,
    message: `Минимальная длина поля: ${minLength}`,
  },
});

export const maxLengthValidation = (maxLength: number) => ({
  maxLength: {
    value: maxLength,
    message: `Максимальная длина поля: ${maxLength}`,
  },
});

export const requiredValidation = () => ({
  required: "Это поле является обязательным!",
});
