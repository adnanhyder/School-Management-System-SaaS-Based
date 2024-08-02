import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import AdminLayout from "@/Layouts/AdminLayout";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, item , dynamicParam }) {
  const { data, setData, post, errors, reset } = useForm({
    name: item.name || "",
    address: item.address || "",
    phone: item.phone || "",
    _method: "PUT",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route(`${dynamicParam.name}.update`, item.id));
  };

  return (
    <AdminLayout
      user={auth.user}

    >
      <Head title="Users" />
      <h2 className="text-black text-2xl font-semibold text-first-large">Edit {dynamicParam.name}</h2>

      <div>
        <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label>Name:</label>
          <TextInput
            id="task_name"
            type="text"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            isFocused={true}
            onChange={(e) => setData("name", e.target.value)}
          />

        </div>
        <div className="mt-4">
          <label>Address:</label>
          <TextInput
            id="task_name"
            type="text"
            name="name"
            value={data.address}
            className="mt-1 block w-full"
            isFocused={true}
            onChange={(e) => setData("address", e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label>Phone:</label>
          <TextInput
            id="task_name"
            type="text"
            name="name"
            value={data.phone}
            className="mt-1 block w-full"
            isFocused={true}
            onChange={(e) => setData("phone", e.target.value)}
          />

        </div>
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
