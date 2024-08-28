import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link, router, usePage} from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import {printArea, ucfirst} from "@/functions";
import Voucher from "@/Pages/Fee/Voucher";
import {useEffect, useState} from "react";

export default function Index({
                                auth,
                                receivedItem,
                                dynamicParam,
                                queryParams = null,
                                success,
                                printData,
                                printAdditionalData
                              }) {

  useEffect(() => {
    const hasPrinted = localStorage.getItem("hasPrinted");
    if (hasPrinted !== "true") {
      if (printData) {
        const schoolToPass = ucfirst(auth.default.name);
        const titleOfPrint = `${ucfirst(printData.student.name)} - ${ucfirst(printData.student.roll_number)} - ${ucfirst(printData.classes.name)} - ${ucfirst(printData.classes.section)}`;

        printArea(schoolToPass, titleOfPrint)
        localStorage.setItem("hasPrinted", "true");
      }

    }
  }, [printData]);


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

  const MarkPayment = (item) => {
    if (!window.confirm("Please Confirm Cash Received")) {
      return;
    }

    localStorage.setItem("hasPrinted", "false");
    router.post(route(`${dynamicParam.name}.markPayment`), {
      id: item.id,
    });
  };


  return (
    <>
      <AdminLayout
        user={auth.user}

      >

        <Link
          href={route(`${dynamicParam.name}.createbystudnet`)}
          className="bx-pull-right bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
        >
          Add Fee Studentwise
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

                      <th className="px-3 py-3 ">Roll Number</th>
                      <th className="px-3 py-3 ">Class</th>
                      <th className="px-3 py-3 ">Amount</th>
                      <th className="px-3 py-3 ">Month</th>
                      <th className="px-3 py-3 ">Session</th>
                      <th className="px-3 py-3 ">Status</th>
                      <th className="px-3 py-3 ">View</th>
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


                      <th className="px-3 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.roll_number}
                          placeholder="Roll number"
                          onBlur={(e) =>
                            searchFieldChanged("roll_number", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("roll_number", e)}
                        />
                      </th>
                      <th className="px-3 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.class}
                          placeholder="Class"
                          onBlur={(e) =>
                            searchFieldChanged("class", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("class", e)}
                        />
                      </th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
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
                            {singleItem.student?.name}
                          </Link>


                        </th>
                        <td className="px-3 py-3">{singleItem.student?.roll_number|| "Removed" }</td>
                        <td className="px-3 py-3">{ucfirst(singleItem.classes?.name || "")} {singleItem.classes?.section|| "Removed" }</td>

                        <td className="px-3 py-3">{singleItem.amount}</td>
                        <td
                          className="px-3 py-3">{new Date(0, singleItem.month - 1).toLocaleString('en-US', {month: 'long'})}</td>
                        <td className="px-3 py-3">{singleItem.sessions?.name}</td>
                        <td className="px-3 py-3">{ucfirst(singleItem.status)}</td>
                        <td className="px-3 py-3">
                          {(singleItem.student?.id && singleItem.classes?.id && singleItem.sessions?.id) && (
                            <Link
                              href={route(`${dynamicParam.name}.show`, { id: singleItem.id })}
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                            >
                              Print Voucher
                            </Link>
                          )}
                        </td>
                        <td className="px-3 py-3 text-center">
                          {singleItem.status === 'pending' && (
                          <button
                            onClick={(e) => MarkPayment(singleItem)}
                            className=" bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                          >
                            Mark Payment
                          </button>
                          )
                          }
                          <button
                            onClick={(e) => deleteItem(singleItem)}
                            className="text-center font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
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
      <div id="print-sections" style={{display: 'none'}}>
        {printData && (
          <>

            <Voucher
              auth={auth}
              item={printData}
              additional={printAdditionalData}
              printBtn={false}
            />
          </>
        )}
      </div>
    </>
  );
}
