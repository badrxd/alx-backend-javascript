import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const data = {
    photo: null,
    user: null,
  };
  try {
    data.photo = await uploadPhoto();
    data.user = await createUser();
  } catch (error) {
    data.photo = null;
    data.user = null;
  }
  return data;
};

export default asyncUploadUser;
