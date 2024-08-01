import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link } from "@inertiajs/react";

import TasksTable from "./TasksTable";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Index({ auth, success, tasks, queryParams = null }) {
  return (
    <AdminLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-black text-2xl font-semibold">
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

      <div className="">
        <div className="">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <TasksTable
                tasks={tasks}
                queryParams={queryParams}
                success={success}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
