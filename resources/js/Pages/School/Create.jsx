import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

export default function Create({ auth , dynamicParam  }) {
  const { data, setData, post, errors, reset } = useForm({
    name: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route(`${dynamicParam.name}.store`));
  };

  return (
    <AdminLayout
      user={auth.user}

    >
      <Head title="Users" />
      <h2 className="text-black text-2xl font-semibold text-first-large">Create {dynamicParam.name}</h2>

      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

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
