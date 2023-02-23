const URL_REGEX = /^https?:\/\/([\w\-]+\.)+[a-z]{2,}(\/[\w#\-\.~:\[\]@!\$&'\(\)\*\+,;=,]*)*$/i;

const BAD_REQUEST_CODE = 400;
const UNAUTHORIZED_CODE = 401;
const FORBIDDEN_CODE = 403;
const NOT_FOUND_CODE = 404;
const NOT_UNIQUE_CODE = 409;
const INTERNAL_SERVER_ERROR_CODE = 500;

const BAD_REQUEST_USER_MESSAGE = 'Переданы некорректные данные пользователя.';
const UNAUTHORIZED_USER_MESSAGE = 'Неправильные почта или пароль.';
const FORBIDDEN_MESSAGE = 'text';
const NOT_FOUND_USER_MESSAGE = 'Запрашиваемый пользователь не найден.';
const NOT_UNIQUE_USER_MESSAGE = 'Пользователь с такой почтой уже зарегистрирован.';
const INTERNAL_SERVER_ERROR_MESSAGE = 'text';

module.exports = {
  URL_REGEX,
  BAD_REQUEST_CODE,
  NOT_FOUND_CODE,
  INTERNAL_SERVER_ERROR_CODE,
  NOT_UNIQUE_CODE,
  UNAUTHORIZED_CODE,
  FORBIDDEN_CODE,
  BAD_REQUEST_USER_MESSAGE,
  NOT_FOUND_USER_MESSAGE,
  INTERNAL_SERVER_ERROR_MESSAGE,
  NOT_UNIQUE_USER_MESSAGE,
  UNAUTHORIZED_USER_MESSAGE,
  FORBIDDEN_MESSAGE,
};
