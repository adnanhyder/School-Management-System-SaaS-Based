import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link, router} from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({auth, receivedItem, dynamicParam, queryParams = null, success}) {
  queryParams = queryParams || {};

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
                    <th className="px-3 py-3 white">Id</th>
                    <TableHeading
                      name="name"
                      sort_field={queryParams.sort_field}
                      sort_direction={queryParams.sort_direction}
                      sortChanged={sortChanged}
                    >
                      <span className="white">Name</span>
                    </TableHeading>
                    <th className="px-3 py-3 ">Description</th>
                    <th className="px-3 py-3 ">Actions</th>
                  </tr>
                  </thead>

                  <thead>
                  <tr>
                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3">
                      <TextInput
                        className="w-full"
                        defaultValue={queryParams.name}
                        placeholder="Name"
                        onBlur={(e) =>
                          searchFieldChanged("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                      />
                    </th>

                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3"></th>
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
                      <td className="px-3 py-3">{singleItem.description}</td>
                      <td className="px-3 py-3">
                        <Link

                          href={route(`${dynamicParam.name}.edit`, singleItem.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>
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
