import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonAPI";

//uploading video

export const uploadVideo = async (video) => {
  // post to http://localhost:4000/videos for adding videos in json server
  // and return response to Add component
  return await commonAPI("POST", `${BASE_URL}/videos`, video);
};

// get all videos from json server

export const getAllVideos = async () => {
  //http get request to http://localhost:4000/videos for getting videos from json server
  // and return response to View component
  return await commonAPI("GET", `${BASE_URL}/videos`, "");
};

// get a single video from json server

export const getAVideo = async (id) => {
  //http get request to http://localhost:4000/videos/id for getting videos from json server
  // and return response to VideoCard component
  return await commonAPI("GET", `${BASE_URL}/videos/${id}`, "");
};

// delete a single video from a json server

export const deleteAVideo = async (id) => {
  //http delete request to http://localhost:4000/videos/id for deleting videos from json server
  // and return response to View component
  return await commonAPI("DELETE", `${BASE_URL}/videos/${id}`, {});
};

// insert video in watch history
export const addToHistory = async (videoHistory) => {
  // http POST request to http://localhost:3000/watch-history for adding video history to json server and return response to videoCard component
  return await commonAPI("POST", `${BASE_URL}/history`, videoHistory);
};

// get video watch history from json server
export const getHistory = async () => {
  // http GET request to http://localhost:3000/watch-history to get video history from json server and return response to watchHistory component
  return await commonAPI("GET", `${BASE_URL}/history`, "");
};

// delete history
export const removeHistory = async (id) => {
  //http delete request to http://localhost:4000/videos/id for deleting history from json server
  // and return response to WatchHistory component
  return await commonAPI("DELETE", `${BASE_URL}/history/${id}`, {});
};

// Adding Category

export const addCategory = async (body) => {
  //http post request to http://localhost:4000/categories for adding category in json server
  // and return response to Category component
  return await commonAPI("POST", `${BASE_URL}/categories`, body);
};

// Get all Category

export const getAllCategory = async () => {
  //http get request to http://localhost:4000/categories for getting categories in json server
  // and return response to Category component
  return await commonAPI("GET", `${BASE_URL}/categories`, "");
};

// remove category
export const deleteCategory = async (id) => {
  //http DELETE request to http://localhost:4000/categories for deleting categories in json server
  // and return response to Category component
  return await commonAPI("DELETE", `${BASE_URL}/categories/${id}`, {});
};

// update category from json server
export const updateCategory = async (id, updatedCategoryBody) => {
  //http PUT request to http://localhost:4000/categories for Updating category from json server
  // and return response to Category component
  return await commonAPI(
    "PUT",
    `${BASE_URL}/categories/${id}`,
    updatedCategoryBody
  );
};
