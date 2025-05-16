import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addProfile, deleteProfile, editProfile } from '../redux/profileSlice';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const profiles = useSelector(state => state.profiles.list);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [initialValues, setInitialValues] = useState({
        id: '',
        name: '',
        photo: '',
        description: '',
        address: '',
        coords: { lat: '', lng: '' }
    });

    const handleSubmit = (values, { resetForm }) => {
        const formatted = {
            ...values,
            id: Number(values.id),
            coords: {
                lat: parseFloat(values.coords.lat),
                lng: parseFloat(values.coords.lng),
            },
        };

        navigate("/")
        if (editMode) {
            dispatch(editProfile(formatted));
            setEditMode(false);
        } else {
            dispatch(addProfile(formatted));
        }

        console.log("Submitted values: ", formatted);

        resetForm();
        setInitialValues({
            id: '',
            name: '',
            photo: '',
            description: '',
            address: '',
            coords: { lat: '', lng: '' }
        });
    };

    const handleEdit = (profile) => {
        setEditMode(true);
        setInitialValues({
            id: profile.id,
            name: profile.name,
            photo: profile.photo,
            description: profile.description,
            address: profile.address,
            coords: {
                lat: profile.coords.lat,
                lng: profile.coords.lng,
            },
        });
    };

    const handleDelete = (id) => {
        dispatch(deleteProfile(id));
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4 text-center text-white uppercase">{editMode ? 'Edit Profile' : 'Add Profile'}</h1>

            <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
                <Form className="space-y-4">
                    <Field name="id" placeholder="ID" required className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <Field name="name" placeholder="Name" required className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <Field name="photo" placeholder="Photo URL" required className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <Field name="description" placeholder="Description" required className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <Field name="address" placeholder="Address" required className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <div className="flex gap-2">
                        <Field name="coords.lat" placeholder="Latitude" required className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <Field name="coords.lng" placeholder="Longitude" required className="bg-[#28282B] border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <button type="submit" className="hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer">
                        {editMode ? 'Update' : 'Add'} Profile
                    </button>
                </Form>
            </Formik>

            {
                profiles.length > 0 && (
                    <ul className="w-full hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer mt-5">
                        {profiles.map(p => (
                            <li key={p.id} className="flex justify-between items-center p-2 w-full">
                                <span className='text-2xl font-semibold max-sm:mr-4 text-white uppercase'>{p.name}</span>
                                <div className="space-x-2">
                                    <button onClick={() => handleEdit(p)} className="hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer">Edit</button>
                                    <button onClick={() => handleDelete(p.id)} className="hover:bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 me-2 mb-2 hover:cursor-pointer">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                )
            }
        </div>
    );
}
