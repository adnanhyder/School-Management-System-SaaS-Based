import React, {useEffect, useState} from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {ucfirst} from "@/functions";

export default function Create({ auth, dynamicParam, sessions, classes }) {
  const { data, setData, post, errors, reset } = useForm({
    session_id: '',
    class_id: '',
    month: '', // Store month instead of full date
    attendance: {}, // Store attendance data
  });

  const [items, setItems] = useState([]);
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState([]);


  useEffect(() => {
    if (data.session_id && data.class_id && data.month) {
      setloading("Loading....")
      setItems("")
      axios
        .get(`/api/feeFetch`, {
          params: { session_id: data.session_id, class_id: data.class_id, month: data.month , key: auth.key },
        })
        .then((response) => {
          setItems(response.data.items);
          setdatas(response.data);
          if(response.data.items.length === 0) {
            setloading('No Student found');
          }else{
            setloading("")
          }

        })
        .catch((error) => {
          console.error('There was an error fetching the items!', error);
        });
    }
  }, [data.session_id, data.class_id, data.month]);

  const handleCheckboxChange = (studentId) => {

  };

  const getOptions = (field) => {
    switch (field) {
      case 'session_id':
        return sessions;
      case 'class_id':
        return classes;
      case 'month':
        return [
          { name: 'January', id: 1 },
          { name: 'February', id: 2 },
          { name: 'March', id: 3 },
          { name: 'April', id: 4 },
          { name: 'May', id: 5 },
          { name: 'June', id: 6 },
          { name: 'July', id: 7 },
          { name: 'August', id: 8 },
          { name: 'September', id: 9 },
          { name: 'October', id: 10 },
          { name: 'November', id: 11 },
          { name: 'December', id: 12 },
        ];
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
          {['session_id', 'class_id', 'month'].map((field, index) => (
            <div className="mt-4" key={index}>
              <label className="block text-gray-700">
                {field.replace('_', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}:
              </label>
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
              {errors[field] && <div className="text-red-600">{errors[field]}</div>}
            </div>
          ))}
          <div className="mt-5">
            {loading}
          </div>

          {items.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Fee Report</h3>
              <h3>Total Received :  <b>{datas.total_received_amount} PKR</b> <small>(includes extra i.e Fine)</small></h3>
              <h3>Total Fee According to Students :  <b>{datas.total_fee_amount}</b> PKR</h3>
              <table className="min-w-full bg-white">
                <thead>
                <tr>
                  <th className="">Tid</th>
                  <th className="">Name</th>
                  <th className="">Amount</th>
                  <th className="adjusto">Status</th>
                  <th className="">Action</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                  <tr key={item.tid}>
                    <td className="border ">{item.tid}</td>
                    <td className="border ">{item.name}</td>
                    <td className="border ">{item.amount}</td>
                    <td className={`border ft-smallo roundbtn  ${item._status === 'pending' ? 'btn-success' : item._status === 'Paid' ? 'btn-info ' : ' btn-dark'}`}>
                       {ucfirst(item._status)}
                    </td>
                    <td className="border ">
                      {item.fee_id !== null && (
                      <a
                        href={route(`${dynamicParam.name}.show`, item.fee_id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                      >
                        <i className="menu-icon tf-icons bx bxs-show"/>
                      </a>
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

          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
