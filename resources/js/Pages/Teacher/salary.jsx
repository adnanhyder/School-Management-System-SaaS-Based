import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link, router} from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import {ucfirst} from "@/functions";

export default function Index({auth, receivedItem, dynamicParam}) {

  return (
    <AdminLayout
      user={auth.user}

    >
      <Head title=""/>
      <h2 className="text-black text-2xl font-semibold text-first-large">{dynamicParam.name}s Salary</h2>
      <div className="py-1">
        <div className="">

          <div className="">
            <div className=" ">
              <div className="">
                <table className="col-12">
                  <thead>
                  <tr className="text-nowrap">
                    <th className="px-3 py-3 white">Sr.</th>
                    <th className="px-3 py-3 white">Name</th>

                    <th className="px-3 py-3 ">Department</th>
                    <th className="px-3 py-3 ">Designation</th>
                    <th className="px-3 py-3 ">Salary</th>


                  </tr>
                  </thead>

                  <tbody>
                  {receivedItem.map((singleItem , index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={singleItem.id}
                    >
                      <td className="px-3 py-3">{index+1}</td>

                      <td className="px-3 py-3 ">
                        <Link
                          href={route(`${dynamicParam.name}.show`, singleItem.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          {singleItem.name}
                        </Link>


                      </td>

                      <td className="px-3 py-3">{ucfirst(singleItem.department)}</td>
                      <td className="px-3 py-3">{ucfirst(singleItem.designation)}</td>
                      <td className="px-3 py-3">{singleItem.salary}</td>



                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
