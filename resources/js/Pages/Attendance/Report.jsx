import React, { useEffect, useState } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { ucfirst } from "@/functions";
import axios from 'axios';

export default function Create({ auth, dynamicParam, sessions, classes }) {
  const { data, setData, post, errors, reset } = useForm({
    type: 'student', // Default to 'student'
    session_id: '',
    class_id: '',
    date: '', // Store full date
    attendance: {}, // Store attendance data
  });

  const [items, setItems] = useState([]);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState('');

  useEffect(() => {
    if (data.session_id && (data.class_id || data.type === 'teacher') && data.date) {
      setLoading("Loading....");
      setItems([]);
      axios
        .get(`/api/attendFetch`, {
          params: {
            session_id: data.session_id,
            class_id: data.type === 'student' ? data.class_id : null,
            date: data.date,
            key: auth.key,
            type: data.type, // Include type in the API call
          },
        })
        .then((response) => {
          setItems(response.data.items);
          setDatas(response.data);
          if (response.data.items.length === 0) {
            setLoading('No records found');
          } else {
            setLoading('');
          }
        })
        .catch((error) => {
          console.error('There was an error fetching the items!', error);
        });
    }
  }, [data.session_id, data.class_id, data.date, data.type]);

  const handleCheckboxChange = (id) => {
    // Implement checkbox change logic
  };

  const getOptions = (field) => {
    switch (field) {
      case 'session_id':
        return sessions;
      case 'class_id':
        return classes;
      default:
        return [];
    }
  };

  return (
    <AdminLayout user={auth.user}>
      <Head title={`Create ${dynamicParam.name}`} />
      <h2 className="text-black text-2xl font-semibold">{dynamicParam.name} Reports</h2>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
        <form>
          <div className="mt-4">
            <label className="block text-gray-700">Type:</label>
            <select
              id="type"
              name="type"
              value={data.type}
              className="mt-1 block w-full"
              onChange={(e) => setData('type', e.target.value)}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            {errors.type && <div className="text-red-600">{errors.type}</div>}
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Session:</label>
            <select
              id="session_id"
              name="session_id"
              value={data.session_id}
              className="mt-1 block w-full"
              onChange={(e) => setData('session_id', e.target.value)}
            >
              <option value="">Select Session</option>
              {sessions.map((session, index) => (
                <option key={index} value={session.id}>
                  {ucfirst(session.name)}
                </option>
              ))}
            </select>
            {errors.session_id && <div className="text-red-600">{errors.session_id}</div>}
          </div>

          {data.type === 'student' && (
            <div className="mt-4">
              <label className="block text-gray-700">Class:</label>
              <select
                id="class_id"
                name="class_id"
                value={data.class_id}
                className="mt-1 block w-full"
                onChange={(e) => setData('class_id', e.target.value)}
              >
                <option value="">Select Class</option>
                {classes.map((classItem, index) => (
                  <option key={index} value={classItem.id}>
                    {ucfirst(classItem.name)} {classItem.section}
                  </option>
                ))}
              </select>
              {errors.class_id && <div className="text-red-600">{errors.class_id}</div>}
            </div>
          )}

          <div className="mt-4">
            <label htmlFor="date" className="block text-gray-700">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={data.date}
              onChange={(e) => setData('date', e.target.value)}
              className="mt-1 block w-full"
            />
            {errors.date && <div className="text-red-600">{errors.date}</div>}
          </div>

          <div className="mt-5">
            {loading}
          </div>

          {items.length > 0 && (
            <div className="mt-4">
              <table className="min-w-full bg-white">
                <thead>
                <tr>
                  <th className="px-4 py-2">Sr</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2 text-center">Status</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className={`border text-center ${item.status === 'Present' ? 'bg-info text-white' : 'bg-dark text-white'} px-4 py-2`}>
                      {item.status}
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-4 text-right">
            <Link
              href={route(`${dynamicParam.name}.index`)}
              className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
