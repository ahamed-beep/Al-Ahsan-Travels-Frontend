export const API_LOGIN        = "/auth/login";
export const API_LOGOUT       = "/auth/logout";
export const API_VERIFY_TOKEN = "/auth/verify-token";

export const API_PACKAGES             = "/packages";
export const API_PACKAGE_BY_ID        = (id) => `/packages/${id}`;
export const API_PACKAGE_TOGGLE       = (id) => `/packages/${id}/toggle-status`;

export const API_SHIFTING_HAJJ                = "/shifting-hajj-packages";
export const API_SHIFTING_HAJJ_BY_ID          = (id) => `/shifting-hajj-packages/${id}`;
export const API_SHIFTING_HAJJ_TOGGLE_STATUS  = (id) => `/shifting-hajj-packages/${id}/toggle-status`;
export const API_SHIFTING_HAJJ_TOGGLE_POPULAR = (id) => `/shifting-hajj-packages/${id}/toggle-popular`;

export const API_INQUIRY_SUBMIT    = "/inquiry/submit";
export const API_INQUIRIES_ALL     = "/inquiry";
export const API_INQUIRY_BY_ID     = (id) => `/inquiry/${id}`;
export const API_INQUIRY_MARK_READ = (id) => `/inquiry/${id}/mark-read`;

export const API_UMRAH_PACKAGES             = "/umrah-packages";
export const API_UMRAH_PACKAGE_BY_ID        = (id) => `/umrah-packages/${id}`;
export const API_UMRAH_PACKAGES_BY_CATEGORY = (category) => `/umrah-packages/category/${category}`;

export const API_GROUP_FAMILY_PACKAGES             = "/group-family-packages";
export const API_GROUP_FAMILY_PACKAGE_BY_ID        = (id) => `/group-family-packages/${id}`;
export const API_GROUP_FAMILY_PACKAGES_BY_CATEGORY = (category) => `/group-family-packages/category/${category}`;

export const ROLE_ADMIN = "admin";