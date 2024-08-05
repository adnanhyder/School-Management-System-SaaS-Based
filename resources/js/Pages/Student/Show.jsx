import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Show({ auth, item, dynamicParam }) {
  console.log(item)
  const keysToUnset = ['created_at', 'id' , 'updated_at' , 'school_id'];
  keysToUnset.forEach(key => {
    delete item.data[key];
  });
  item = item.data;

  return (
    <AdminLayout user={auth.user}>
      <Head title={`Show ${dynamicParam.name}`} />
      <div className=" mx-auto sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="">
            <h2 className="text-2xl font-semibold  mb-6">Show {dynamicParam.name}</h2>

            {item.profile_picture && (
              <div className="mb-4">
                <img  src={`/storage/${item.profile_picture}`} className="w-64" />
              </div>
            )}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {Object.keys(item).map((field, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  {field === 'profile_picture' && item[field] ? (
                    <></>
                  ) : (
                    <label className="block text-lg font-bold text-gray-700 dark:text-gray-300">
                      {field.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}
                    </label>
                  )}

                  {field === 'profile_picture' && item[field] ? (
                 <></>
                  ) : (
                    <p className="mt-2 text-gray-900 dark:text-gray-100">{item[field]}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <Link
                href={route(`${dynamicParam.name}.index`)}
                className="bg-gray-200 dark:bg-gray-700 py-2 px-4 text-gray-900 dark:text-gray-100 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
