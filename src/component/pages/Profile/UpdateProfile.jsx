import { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase/firebase.init';

export const UpdateProfile = ({ setActiveSection }) => {
  const { user, updateUserProfile, setUser } = use(AuthContext);
  const [userName, setUserName] = useState('');
  const [userPhotoUrl, setUserPhotoUrl] = useState('');

  useEffect(() => {
    if (user) {
      setUserName(user.displayName);
      setUserPhotoUrl(user.photoURL);
    }
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(name, photo);
    await updateUserProfile(name, photo)
      .then(() => {
        toast.success('Profile Update Successfull');
        setActiveSection('details');
      })
      .catch(error => {
        toast.error(error.message);
        return;
      });
    await auth.currentUser.reload();
    setUser({ ...auth.currentUser });
  };
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-[#264653]">
      <h2 className="text-xl md:text-3xl font-bold text-[#264653] mb-6">
        Update Your Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text text-[#264653]">Name:</span>
          </label>
          <input
            type="name"
            onChange={e => setUserName(e.target.value)}
            value={userName || ''}
            placeholder="Enter name"
            name="name"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text text-[#264653]">Photo URL:</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            onChange={e => setUserPhotoUrl(e.target.value)}
            value={userPhotoUrl || ''}
            required
            className="input input-bordered w-full"
          />
        </div>
        <button
          type="submit"
          className="btn bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none shadow-md w-full mt-4"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};
