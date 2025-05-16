import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
    const navigate = useNavigate();
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    const profiles = useSelector(state => state.profiles.list);


    const handleSummary = (profile) => {
        const coords = profile.coords || { lat: 12.9716, lng: 77.5946 };
        setSelectedProfile({ ...profile, coords });
    };

    const handleDetails = (profile) => {
        navigate(`/profile/${profile.id}`);
    };

    const addProfile = () => {
        navigate(`/admin`);
    }

    // Filtered Profiles
    const filteredProfiles = profiles.filter(profile => {
        const nameMatch = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch && locationMatch;
    });

    return (
        <div className="p-6">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search Profiles By Name"
                    className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {profiles.map((p) => (
                    <ProfileCard
                        key={p.id}
                        profile={p}
                        onSummaryClick={handleSummary}
                        onDetailsClick={handleDetails}
                    />
                ))}
            </div>

            <div className='flex-col justify-center items-center text-center'>
                {profiles.length === 0 &&
                    (<><p className="text-gray-500 text-2xl font-bold uppercase">No profiles yet. Please add some from the Admin Panel.</p>
                        <button className="hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer mt-5" onClick={addProfile}>Add your profile</button></>)
                }
            </div>

            {filteredProfiles.length === 0 && (
                <p className="text-gray-500">No profiles match the current filters.</p>
            )}

            {selectedProfile && (
                <MapComponent
                    lat={selectedProfile.coords.lat}
                    lng={selectedProfile.coords.lng}
                    name={selectedProfile.name}
                    address={selectedProfile.address}
                />
            )}
        </div>
    );
}
