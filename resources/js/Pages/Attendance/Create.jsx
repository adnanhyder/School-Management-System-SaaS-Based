import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link, useForm} from "@inertiajs/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {ucfirst} from "@/functions";

export default function Create({auth, dynamicParam, sessions, classes}) {
  const {data, setData, post, errors, reset} = useForm({
    session_id: '',
    class_id: '',
    date: '',
    attendance: {}  // Store attendance data
  });

  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route(`${dynamicParam.name}.store`), {
      data: {
        ...data,
        attendance: Object.entries(data.attendance).map(([student_id, present]) => ({
          student_id,
          present,
        }))
      }
    });
  };

  useEffect(() => {
    if (data.session_id && data.class_id && data.date) {
      setStudents({
        id : 'loading....',
        roll_number : 'loading....',
        name : 'loading....'
      })
      axios.get(`/api/studentsFetch`, {
        params: { session_id: data.session_id, class_id: data.class_id , date: data.date },
      })

        .then(response => {
          setStudents(response.data.students);
        })
        .catch(error => {
          console.error("There was an error fetching the students!", error);
        });
    }
  }, [data.session_id, data.class_id , data.date]);

  const handleCheckboxChange = (studentId) => {
    setData('attendance', {
      ...data.attendance,
      [studentId]: !data.attendance[studentId]
    });
  };

  const getOptions = (field) => {
    switch (field) {
      case "session_id":
        return sessions;
      case "class_id":
        return classes;
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
          {["session_id", "class_id", "date"].map((field, index) => (
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

          {students.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Mark Attendance:</h3>
              <table className="min-w-full bg-white">
                <thead>
                <tr>
                  <th className="px-4 py-2">Roll Number</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Present</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td className="border px-4 py-2">{student.roll_number}</td>
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">
                      {student.id !== 0  && (
                      <input
                        type="checkbox"
                        checked={data.attendance[student.id] || false}
                        onChange={() => handleCheckboxChange(student.id)}
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
