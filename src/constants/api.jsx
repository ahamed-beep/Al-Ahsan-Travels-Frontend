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
export const API_UMRAH_TOGGLE_STATUS        = (id) => `/umrah-packages/${id}/toggle-status`;
export const API_UMRAH_TOGGLE_POPULAR       = (id) => `/umrah-packages/${id}/toggle-popular`;

export const API_GROUP_FAMILY_PACKAGES             = "/group-family-packages";
export const API_GROUP_FAMILY_PACKAGE_BY_ID        = (id) => `/group-family-packages/${id}`;
export const API_GROUP_FAMILY_PACKAGES_BY_CATEGORY = (category) => `/group-family-packages/category/${category}`;
export const API_GROUP_FAMILY_TOGGLE_STATUS        = (id) => `/group-family-packages/${id}/toggle-status`;
export const API_GROUP_FAMILY_TOGGLE_POPULAR       = (id) => `/group-family-packages/${id}/toggle-popular`;

export const API_NON_SHIFTING_HAJJ                = "/non-shifting-hajj-packages";
export const API_NON_SHIFTING_HAJJ_BY_ID          = (id) => `/non-shifting-hajj-packages/${id}`;
export const API_NON_SHIFTING_HAJJ_TOGGLE_STATUS  = (id) => `/non-shifting-hajj-packages/${id}/toggle-status`;
export const API_NON_SHIFTING_HAJJ_TOGGLE_POPULAR = (id) => `/non-shifting-hajj-packages/${id}/toggle-popular`;
export const API_NON_SHIFTING_HAJJ_ADMIN          = "/non-shifting-hajj-packages/admin/all";

export const API_HAJJ_INQUIRY_SUBMIT    = "/hajj-inquiry/submit";
export const API_HAJJ_INQUIRIES_ALL     = "/hajj-inquiry";
export const API_HAJJ_INQUIRY_BY_ID     = (id) => `/hajj-inquiry/${id}`;
export const API_HAJJ_INQUIRY_MARK_READ = (id) => `/hajj-inquiry/${id}/mark-read`;

export const API_PRICING_PACKAGES             = "/pricing-packages";
export const API_PRICING_PACKAGES_BY_CATEGORY = (category) => `/pricing-packages/category/${category}`;
export const API_PRICING_PACKAGE_BY_ID        = (id) => `/pricing-packages/${id}`;

export const API_MONTHLY_UMRAH             = "/monthly-umrah-packages";
export const API_MONTHLY_UMRAH_BY_ID       = (id) => `/monthly-umrah-packages/${id}`;
export const API_MONTHLY_UMRAH_TOGGLE      = (id) => `/monthly-umrah-packages/${id}/toggle-active`;
export const API_MONTHLY_UMRAH_BY_MONTH    = (month) => `/monthly-umrah-packages/month/${month}`;

export const API_ASHRA_PACKAGES            = "/ashra-packages";
export const API_ASHRA_PACKAGE_BY_ID       = (id) => `/ashra-packages/${id}`;
export const API_ASHRA_PACKAGES_BY_CATEGORY = (category) => `/ashra-packages/category/${category}`;

export const API_SPECIAL_PACKAGES             = "/special-packages";
export const API_SPECIAL_PACKAGE_BY_ID        = (id) => `/special-packages/${id}`;
export const API_SPECIAL_PACKAGE_BY_CATEGORY  = (category) => `/special-packages/category/${category}`;
export const API_SPECIAL_PACKAGE_TOGGLE_ACTIVE = (id) => `/special-packages/${id}/toggle-active`;
export const API_SPECIAL_PACKAGE_TOGGLE_POPULAR = (id) => `/special-packages/${id}/toggle-popular`;

export const API_FLIGHT_DEALS = "/flight-deals";
export const API_FLIGHT_DEAL_BY_ID = (id) => `/flight-deals/${id}`;
export const API_FLIGHT_DEAL_TOGGLE_ACTIVE = (id) => `/flight-deals/${id}/toggle-active`;
export const API_FLIGHT_DEAL_TOGGLE_POPULAR = (id) => `/flight-deals/${id}/toggle-popular`;

// constants/api.js - Add these

export const API_CONTACT_SUBMIT = "/contact";
export const API_CONTACT_INQUIRIES = "/contact";
export const API_CONTACT_BY_ID = (id) => `/contact/${id}`;
export const API_CONTACT_MARK_READ = (id) => `/contact/${id}/mark-read`;
export const API_CONTACT_MARK_REPLIED = (id) => `/contact/${id}/mark-replied`;
export const API_CONTACT_STATS = "/contact/stats";

export const ROLE_ADMIN = "admin";