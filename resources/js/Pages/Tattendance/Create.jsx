import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link, useForm} from "@inertiajs/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {ucfirst} from "@/functions";

export default function Create({auth, dynamicParam, sessions}) {
  const {data, setData, post, errors, reset} = useForm({
    session_id: '',
    date: '',
    attendance: {}  // Store attendance data
  });

  const [teachers, setTeachers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route(`${dynamicParam.name}.store`), {
      data: {
        ...data,
        attendance: Object.entries(data.attendance).map(([id, present]) => ({
          id,
          present,
        }))
      }
    });
  };

  useEffect(() => {
    if (data.session_id  && data.date) {
      setTeachers({
        id : 'loading....',
        phone: 'loading....',
        name : 'loading....',
        email : 'loading....'
      })
      axios.get(`/api/teachersFetch`, {
        params: { session_id: data.session_id,  date: data.date },
      })

        .then(response => {
          setTeachers(response.data.teachers);
        })
        .catch(error => {
          console.error("There was an error fetching the students!", error);
        });
    }
  }, [data.session_id , data.date]);

  const handleCheckboxChange = (id) => {
    setData('attendance', {
      ...data.attendance,
      [id]: !data.attendance[id]
    });
  };

  const getOptions = (field) => {
    switch (field) {
      case "session_id":
        return sessions;
      default:
        return [];
    }
  };

  return (
    <AdminLayout user={auth.user}>
      <Head title={`Create ${dynamicParam.name}`} />
      <h2 className="text-black text-2xl font-semibold">Create {dynamicParam.name}</h2>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {["session_id",  "date"].map((field, index) => (
            <div className="mt-4" key={index}>
              <label className="block text-gray-700">
                {field.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}:
              </label>
              {field === "date" ? (
                <input
                  type="date"
                  id={field}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  onChange={(e) => setData(field, e.target.value)}
                />
              ) : (
                <select
                  id={field}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  onChange={(e) => setData(field, e.target.value)}
                >
                  <option value="">Select Value</option>
                  {getOptions(field).map((option, optionIndex) => (
                    <option key={optionIndex} value={option.id}>
                      {ucfirst(option.name)} {option.section}
                    </option>
                  ))}
                </select>
              )}
              {errors[field] && <div className="text-red-600">{errors[field]}</div>}
            </div>
          ))}

          {teachers.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Mark Attendance:</h3>
              <table className="min-w-full bg-white">
                <thead>
                <tr>
                  <th className="px-4 py-2">Id</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Present</th>
                </tr>
                </thead>
                <tbody>
                {teachers.map(teacher => (
                  <tr key={teacher.id}>
                    <td className="border px-4 py-2">{teacher.id}</td>
                    <td className="border px-4 py-2">{teacher.name}</td>
                    <td className="border px-4 py-2">{teacher.phone}</td>
                    <td className="border px-4 py-2">{teacher.email}</td>
                    <td className="border px-4 py-2">
                      {teacher.id !== 0  && (
                      <input
                        type="checkbox"
                        checked={data.attendance[teacher.id] || false}
                        onChange={() => handleCheckboxChange(teacher.id)}
                      />
                      )}
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
            <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
