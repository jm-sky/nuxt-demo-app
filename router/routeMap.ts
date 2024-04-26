export const RouteMap = {
  HOME: '/dashboard',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REGISTER: '/auth/register',
  PASSWORD_FORGOT: '/auth/password/forgot',
  PASSWORD_RESET: '/auth/password/reset',
  EMAIL_NOT_VERIFIED: '/email/not-verified',
  EMAIL_VERIFY: '/email/verify',
  ACCOUNT: '/account/overview',
  NOT_FOUND: '/404',
  PROFILE_EDIT: '/profile/edit',
  VERIFICATION_SEND: '/verification-send',

  API: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    PROFILE_UPDATE: '/api/profile',
    VERIFICATION_SEND: '/api/email/verification-notification',
    PASSWORD_UPDATE: '/api/reset-password',
  },
}
