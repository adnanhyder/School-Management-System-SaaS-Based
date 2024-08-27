
import {Head, Link} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
export default function Show({ auth , user }) {
  user = user.data;

  return (
    <AdminLayout
      user={auth.user}
    >
      <Head title={`User ${user.name}`} />
      <h2 className="text-black text-2xl font-semibold">User Edit</h2>
      <div className="">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">User ID</label>
                    <p className="mt-1">{user.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">User Name</label>
                    <p className="mt-1">{user.name}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">User Email</label>
                    <p className="mt-1">
                      {user.email}
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-4">
                <Link
                  href={route("user.index")}
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
