// API Routes for Local Development
export const BASE_URL = "http://192.168.60.116:8080";

// API Routes for UAT
// export const BASE_URL = "https://uat-queue-pro.oss.net.bd";

export const ProductAPI = {
  API_BASE: `${BASE_URL}/api/v1/queue-pro/products`,

  getAll: () => `${ProductAPI.API_BASE}`,
  getByCategoryId: (categoryId) =>
    `${ProductAPI.API_BASE}?category_id=${categoryId}`,
  // getById: (id) => `${ProductAPI.API_BASE}/${id}`,
  // create: () => `${ProductAPI.API_BASE}`,
  // update: (id) => `${ProductAPI.API_BASE}/${id}`,
  // delete: (id) => `${ProductAPI.API_BASE}/${id}`,
};

export const CategoriesAPI = {
  API_BASE: `${BASE_URL}/api/v1/queue-pro/categories`,

  getAll: () => `${CategoriesAPI.API_BASE}/`,
  // getAllCategories: () => `${CategoriesAPI.API_BASE}/v1/all`,
  // getById: (id) => `${CategoriesAPI.API_BASE}/${id}`,
  // create: () => `${CategoriesAPI.API_BASE}/`,
  // update: (id) => `${CategoriesAPI.API_BASE}/${id}`,
  // delete: (id) => `${CategoriesAPI.API_BASE}/${id}`,
};

export const ApplicationAPI = {
  API_BASE: `${BASE_URL}/api/v1/queue-pro/customer-applications`,

  getAll: () => `${ApplicationAPI.API_BASE}/`,
  getById: (id) => `${ApplicationAPI.API_BASE}/${id}`,
  create: () => `${ApplicationAPI.API_BASE}/`,
  update: (id) => `${ApplicationAPI.API_BASE}/${id}`,
  delete: (id) => `${ApplicationAPI.API_BASE}/${id}`,
};

export const UploadAPI = {
  upload: () => `${BASE_URL}/api/upload/`,
};

export const PartnerAPI = {
  API_BASE: `${BASE_URL}/api/partners`,

  getAll: () => `${PartnerAPI.API_BASE}/`,
  getAllPartners: () => `${PartnerAPI.API_BASE}/v1/all`,
  getById: (id) => `${PartnerAPI.API_BASE}/${id}`,
  create: () => `${PartnerAPI.API_BASE}/`,
  update: (id) => `${PartnerAPI.API_BASE}/${id}`,
  delete: (id) => `${PartnerAPI.API_BASE}/${id}`,
};

export const BlogAPI = {
  API_BASE: `${BASE_URL}/api/blogs`,

  getAll: () => `${BlogAPI.API_BASE}/`,
  getAllBlogs: () => `${BlogAPI.API_BASE}/v1/all`,
  getById: (id) => `${BlogAPI.API_BASE}/${id}`,
  create: () => `${BlogAPI.API_BASE}/`,
  update: (id) => `${BlogAPI.API_BASE}/${id}`,
  delete: (id) => `${BlogAPI.API_BASE}/${id}`,
};

export const NewsRoomAPI = {
  API_BASE: `${BASE_URL}/api/newsrooms`,

  getAll: () => `${NewsRoomAPI.API_BASE}/`,
  getAllNews: () => `${NewsRoomAPI.API_BASE}/v1/all`,
  getById: (id) => `${NewsRoomAPI.API_BASE}/${id}`,
  create: () => `${NewsRoomAPI.API_BASE}/`,
  update: (id) => `${NewsRoomAPI.API_BASE}/${id}`,
  delete: (id) => `${NewsRoomAPI.API_BASE}/${id}`,
};

export const CustomerStoriesAPI = {
  API_BASE: `${BASE_URL}/api/customer-stories`,

  getAll: () => `${CustomerStoriesAPI.API_BASE}/`,
  getAllStory: () => `${CustomerStoriesAPI.API_BASE}/v1/all`,
  getById: (id) => `${CustomerStoriesAPI.API_BASE}/${id}`,
  create: () => `${CustomerStoriesAPI.API_BASE}/`,
  update: (id) => `${CustomerStoriesAPI.API_BASE}/${id}`,
  delete: (id) => `${CustomerStoriesAPI.API_BASE}/${id}`,
};

export const CaseStudiesAPI = {
  API_BASE: `${BASE_URL}/api/case-studies`,

  getAll: () => `${CaseStudiesAPI.API_BASE}/`,
  getAllCaseStudies: () => `${CaseStudiesAPI.API_BASE}/v1/all`,
  getById: (id) => `${CaseStudiesAPI.API_BASE}/${id}`,
  create: () => `${CaseStudiesAPI.API_BASE}/`,
  update: (id) => `${CaseStudiesAPI.API_BASE}/${id}`,
  delete: (id) => `${CaseStudiesAPI.API_BASE}/${id}`,
};

export const VideosAPI = {
  API_BASE: `${BASE_URL}/api/videos`,

  getAll: () => `${VideosAPI.API_BASE}/`,
  getAllVideos: () => `${VideosAPI.API_BASE}/v1/all`,
  getById: (id) => `${VideosAPI.API_BASE}/${id}`,
  create: () => `${VideosAPI.API_BASE}/`,
  update: (id) => `${VideosAPI.API_BASE}/${id}`,
  delete: (id) => `${VideosAPI.API_BASE}/${id}`,
};

export const IndustryAPI = {
  API_BASE: `${BASE_URL}/api/v1/queue-pro/industries`,

  getAll: () => `${IndustryAPI.API_BASE}/`,
  getByTypeId: (typeId) => `${ProductAPI.API_BASE}?type_id=${typeId}`,
};

export const IndustryLogoListAPI = {
  API_BASE: `${BASE_URL}/api/v1/queue-pro/industries`,

  getAll: () => `${IndustryLogoListAPI.API_BASE}/`,
  getByTypeId: (industry_type_id) => `${IndustryLogoListAPI.API_BASE}?industry_type_id=${industry_type_id}`,
};

export const IndustryTypeAPI = {
  API_BASE: `${BASE_URL}/api/v1/queue-pro/industries/types`,

  getAll: () => `${IndustryTypeAPI.API_BASE}`,
};
