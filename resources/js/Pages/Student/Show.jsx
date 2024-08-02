
import {Head, Link} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
export default function Show({ auth , item , dynamicParam }) {
  item = item.data;

  return (
    <AdminLayout
      user={auth.user}
    >
      <Head title={`User ${item.name}`} />
      <h2 className="text-black text-2xl font-semibold text-first-large">Show {dynamicParam.name}</h2>

      <div className="">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">ID</label>
                    <p className="mt-1">{item.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Name</label>
                    <p className="mt-1">{item.name}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Phone</label>
                    <p className="mt-1">
                      {item.phone}
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Address</label>
                    <p className="mt-1">
                      {item.address}
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-4">
                <Link
                  href={route(`${dynamicParam.name}.index`)}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </AdminLayout>
  );
}
