import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link } from "@inertiajs/react";
import {TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP} from "@/constants";

export default function Index({ auth, success, roles, queryParams = null }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Tasks
          </h2>
          <Link
            href={route("task.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Tasks" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table>
                <tbody>
                <pre>{JSON.stringify(roles.data, null, 2)}</pre>
                
              {roles.data.map((task) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={task.id}
                >
                  <td className="px-3 py-2">{task.id}</td>
                  <td className="px-3 py-2">
                    <img src={task.image_path} style={{ width: 60 }} />
                  </td>
                  <th className="px-3 py-2 text-gray-100 hover:underline">
                    <Link href={route("task.show", task.id)}>{task.name}</Link>
                  </th>

                  <td className="px-3 py-2 text-nowrap">
                    <Link
                      href={route("task.edit", task.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => deleteTask(task)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
