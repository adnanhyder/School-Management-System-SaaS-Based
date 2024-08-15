import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import {getOptions} from "@/functions";
export default function Create({ auth, dynamicParam ,categories }) {
  const { data, setData, post, errors, reset } = useForm({
    name: "",
    description: "",
    quantity: "",
    serial_number: "",
    location: "",
    category: "",
  });
console.log(categories);
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route(`${dynamicParam.name}.store`));
  };

  const getInputType = (field) => {
    switch (field) {
      case "email":
        return "email";
      case "phone":
      case "parent_phone":
      case "emergency_phone":
      case "roll_number":
      case "quantity":
        return "number";
      case "dob":
      case "joining_date":
      case "admission_date":
        return "date";
      case "notes":
      case "description":
        return "textarea";
      case "image":
        return "file";
      case "status":
      case "gender":
      case "category":
        return "select";
      default:
        return "text";
    }
  };


  return (
    <AdminLayout user={auth.user}>
      <Head title={`Create ${dynamicParam.name}`} />
      <h2 className="text-black text-2xl font-semibold">Create {dynamicParam.name}</h2>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {Object.keys(data).map((field, index) => (
            <div className="mt-4" key={index}>
              <label className="block text-gray-700">{field.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}:</label>
              {getInputType(field) === "textarea" ? (
                <textarea
                  id={field}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  onChange={(e) => setData(field, e.target.value)}
                />
              ): getInputType(field) === 'file' ? (
                <>
                  <input
                    id={field}
                    type="file"
                    name={field}
                    className="mt-1 block w-full"
                    onChange={(e) => setData(field, e.target.files[0])}
                  />

                  <ul className="instruciton">
                    <li>The image dimensions should not exceed 500x500 pixels.
                      The image size must not exceed 300 KB.
                      The image must be a file of type: jpg, jpeg, png.</li>
                  </ul>
                </>
              )  : getInputType(field) === 'file' ? (
                <>
                  <input
                    id={field}
                    type="file"
                    name={field}
                    className="mt-1 block w-full"
                    onChange={(e) => setData(field, e.target.files[0])}
                  />

                  <ul className="instruciton">
                    <li>The image dimensions should not exceed 500x500 pixels.
                      The image size must not exceed 300 KB.
                      The image must be a file of type: jpg, jpeg, png.</li>
                  </ul>
                </>
              ) : getInputType(field) === 'select' ? (
                <select
                  id={field}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  onChange={(e) => setData(field, e.target.value)}
                >
                  <option  value="">
                    Select Category
                  </option>
                  {categories.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <TextInput
                  id={field}
                  type={getInputType(field)}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  isFocused={index === 0}
                  onChange={(e) => setData(field, e.target.value)}
                />
              )}
              {errors[field] && <div className="text-red-600">{errors[field]}</div>}
            </div>
          ))}
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
