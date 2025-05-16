import React from 'react';

export default function ProfileCard({ profile, onSummaryClick, onDetailsClick }) {
    return (
        <div className="border p-4 rounded shadow-md">
            <img src={profile.photo} className="w-full h-40 object-cover rounded" />
            <h2 className="text-2xl font-semibold mt-4 text-white uppercase">{profile.name}</h2>
            <p className="text-sm text-white mb-2 uppercase">{profile.description}</p>
            <div className="mt-3 flex gap-2">
                <button onClick={() => onSummaryClick(profile)} className="hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer">Summary</button>
                <button onClick={() => onDetailsClick(profile)} className="hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer">Details</button>
            </div>
        </div>
    );
}
