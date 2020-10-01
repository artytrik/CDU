export const ROLE_NAME = {
  SCOPE_READ: `SCOPE_read`,
  SCOPE_WRITE: `SCOPE_write`
};

export const BUTTON_FUNCTION = {
  LOGIN: `login`,
  LOGOUT: `logout`
};

export const getClassByRole = (role) => {
  switch (role) {
    case ROLE_NAME.SCOPE_READ:
      return ` welcome__description--red`;
    case ROLE_NAME.SCOPE_WRITE:
      return ` welcome__description--green`;
    default:
      return ``;
  }
};
