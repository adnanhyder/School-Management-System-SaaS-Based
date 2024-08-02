import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, receivedItem, dynamicParam, queryParams = null, success }) {
  queryParams = queryParams || {};
  const deleteItem = (item) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    router.delete(route(`${dynamicParam.name}.destroy`, item.id));
  };

  return (
    <AdminLayout
      user={auth.user}

    >
      <Link
        href={route(`${dynamicParam.name}.create`)}
        className="bx-pull-right bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
      >
        Add new
      </Link>
      <Head title="" />
      <h2 className="text-black text-2xl font-semibold text-first-large">{dynamicParam.name}s</h2>
      <div className="py-1">
        <div className="">
          {success && (
            <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              {success}
            </div>
          )}
          <div className="">
            <div className=" ">
              <div className="">
                <table className="col-12">
                  <thead>
                  <tr className="text-nowrap">
                    <th className="px-3 py-3 ">Id</th>
                    <th className="px-3 py-3 ">Name</th>
                    <th className="px-3 py-3 ">Phone</th>
                    <th className="px-3 py-3 ">Address</th>
                    <th className="px-3 py-3 ">Actions</th>
                  </tr>
                  </thead>

                  <tbody>
                  {receivedItem.data.map((singleItem) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={singleItem.id}
                    >
                      <td className="px-3 py-3">{singleItem.id}</td>
                      <th className="px-3 py-3 ">
                        <Link
                          href={route(`${dynamicParam.name}.show`, singleItem.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          {singleItem.name}
                        </Link>



                      </th>
                      <td className="px-3 py-3">{singleItem.phone}</td>
                      <td className="px-3 py-3">{singleItem.address}</td>
                      <td className="px-3 py-3">
                        <Link

                          href={route(`${dynamicParam.name}.edit`, singleItem.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={(e) =>deleteItem(singleItem)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
                <Pagination links={receivedItem.meta.links} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
