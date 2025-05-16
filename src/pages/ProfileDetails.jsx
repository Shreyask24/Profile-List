import { useParams, Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileDetails() {
  const { id } = useParams();

  const profile = useSelector(state =>
    state.profiles.list.find(p => p.id === parseInt(id))
  );

  if (!profile) {
    return <div className="text-gray-500 text-2xl font-bold text-center mt-5 uppercase">Profile not found.</div>;
  }



  return (
    <div className="p-6 max-w-3xl mx-auto flex-col justify-center items-center">
      <Link to="/" className="hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer">← Back to Profiles</Link>

      <div className="bg-[#28282B] shadow-md p-6 rounded-md">
        <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mt-4 text-white uppercase">{profile.name}</h2>
        <p className="text-md text-white mb-2 capitalize">{profile.description}</p>
        <p className="text-sm text-white capitalize">📍 {profile.address}</p>

      </div>
    </div>
  );
}
