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

export const noEmptyStringValidation = () => ({
  validate: (value: string) =>
    value.trim().length > 0 ||
    "Поле не может быть пустым или состоять из пробелов!",
});
