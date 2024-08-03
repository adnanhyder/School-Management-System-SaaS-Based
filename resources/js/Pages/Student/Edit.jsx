import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import AdminLayout from "@/Layouts/AdminLayout";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item, dynamicParam }) {
  const { data, setData, put, errors, reset } = useForm({
    name: item.name || "",
    email: item.email || "",
    phone: item.phone || "",
    gender: item.gender || "",
    blood_group: item.blood_group || "",
    city: item.city || "",
    address: item.address || "",
    dob: item.dob || "",
    parent_name: item.parent_name || "",
    parent_phone: item.parent_phone || "",
    parent_email: item.parent_email || "",
    admission_date: item.admission_date || "",
    allergies: item.allergies || "",
    medical_conditions: item.medical_conditions || "",
    emergency_contact_name: item.emergency_contact_name || "",
    emergency_contact_phone: item.emergency_contact_phone || "",
    previous_school: item.previous_school || "",
    previous_grade: item.previous_grade || "",
    sports: item.sports || "",
    profile_picture: item.profile_picture || "",
    status: item.status || "",
    notes: item.notes || "",
    _method: "PUT",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route(`${dynamicParam.name}.update`, item.id));
  };

  const getInputType = (field) => {
    switch (field) {
      case "email":
        return "email";
      case "phone":
      case "parent_phone":
      case "emergency_contact_phone":
        return "number";
      case "dob":
      case "admission_date":
        return "date";
      case "notes":
        return "textarea";
      default:
        return "text";
    }
  };

  return (
    <AdminLayout user={auth.user}>
      <Head title={`Edit ${dynamicParam.name}`} />
      <h2 className="text-black text-2xl font-semibold">Edit {dynamicParam.name}</h2>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {Object.keys(data).map((field, index) => (
            <div className="mt-4" key={index}>
              <label className="block text-gray-700">
                {field.replace("_", " ").replace(/\b\w/g, (char) => char.toUpperCase())}:
              </label>
              {getInputType(field) === "textarea" ? (
                <textarea
                  id={field}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  onChange={(e) => setData(field, e.target.value)}
                />
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
