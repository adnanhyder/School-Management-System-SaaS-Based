import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link, router} from "@inertiajs/react";
import {ucfirst} from "@/functions";


export default function Index({auth, receivedItem, dynamicParam, queryParams = null, success}) {
  queryParams = queryParams || {};
console.log(receivedItem);
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route(`${dynamicParam.name}.index`, queryParams));
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route(`${dynamicParam.name}.index`), queryParams);
  };


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
      <Head title=""/>
      <h2 className="text-black text-2xl font-semibold text-first-large">{dynamicParam.name}</h2>
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
                    <th className="px-3 py-3 white">Date</th>
                    <th className="px-3 py-3 ">Student Name</th>
                    <th className="px-3 py-3 ">Session</th>
                    <th className="px-3 py-3 ">Class</th>
                    <th className="px-3 py-3 ">status</th>
                    <th className="px-3 py-3 ">Actions</th>
                  </tr>
                  </thead>


                  <tbody>
                  {receivedItem.data.map((singleItem) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={singleItem.id}
                    >
                      <td className="px-3 py-3">{singleItem.date} </td>
                      <td className="px-3 py-3">{singleItem.sessions.name} </td>
                      <td className="px-3 py-3">{singleItem.student.name}</td>
                      <td className="px-3 py-3">{ucfirst(singleItem.classes.name)} {singleItem.classes.section}</td>
                      <td className="px-3 py-3">
                        {singleItem.status === 0 ? (
                          <span>Absent</span>
                        ) : (
                          <span>Present</span>
                        )}
                      </td>
                      <td className="px-3 py-3">
                        <button
                          onClick={(e) => deleteItem(singleItem)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
                <Pagination links={receivedItem.meta.links}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
