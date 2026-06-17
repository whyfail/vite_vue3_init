export const API_BASE_NAME = import.meta.env.VITE_API_BASE || "/API_BASE";

export const ResponseCode = {
  successCode: 200,
  outTimeCode: 504,
  invalidTokenCode: 401,
  forbiddenCode: 403,
} as const;
