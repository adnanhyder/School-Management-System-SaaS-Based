import AdminLayout from "@/Layouts/AdminLayout"
import {Head, Link, useForm} from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";
import GenerateOptions from "@/Components/GenerateOptions";
import InputError from "@/Components/InputError";
import {useEffect} from "react";

export default function DashboardAdmin(auth , {item , selectedItem , dynamicParam}) {
  const { data, setData, post, errors, reset } = useForm({
    Id: item.Id || "",
    _method: "PUT",
  });
  useEffect(() => {
    return () => {
      handleSubmit(new Event('submit'));
    };
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();

    post(route(`${dynamicParam.name}.selectSchool`, item.id));
  };

  console.log(auth);
  return (

        <AdminLayout
          user={auth.user}
        >

          <Head title="Dashboard"/>
          <form onSubmit={handleSubmit}>
          <div className="mt-4">
            Previous Selected = {selectedItem} <br />
            <label className="col-12">Select New Value</label>
            <SelectInput
              name="schoolId"
              onChange={(e) => setData("Id", e.target.value)}
            >
              <GenerateOptions items={auth.user} />
            </SelectInput>

          </div>
          </form>
          <hr className="my-5 " />
          <div className="row">
            <div className="col-8">
          <div className="card">
            <h5 className="card-header">Table Basic</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                <tr>
                  <th>Project</th>
                  <th>Client</th>
                  <th>Users</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                <tr>
                  <td><i className="bx bxl-angular bx-md text-danger me-4"></i> <span>Angular Project</span></td>
                  <td>Albert Cook</td>
                  <td>
                    <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Lilian Fuller"
                          data-bs-original-title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Sophia Wilkerson"
                          data-bs-original-title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Christina Parker"
                          data-bs-original-title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-primary me-1">Active</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i
                        className="bx bx-dots-vertical-rounded"></i></button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-edit-alt me-1"></i> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><i className="bx bxl-react bx-md text-info me-4"></i> <span>React Project</span></td>
                  <td>Barry Hunter</td>
                  <td>
                    <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Lilian Fuller"
                          data-bs-original-title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Sophia Wilkerson"
                          data-bs-original-title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Christina Parker"
                          data-bs-original-title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-success me-1">Completed</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i
                        className="bx bx-dots-vertical-rounded"></i></button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-edit-alt me-2"></i> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-trash me-2"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><i className="bx bxl-vuejs bx-md text-success me-4"></i> <span>VueJs Project</span></td>
                  <td>Trevor Baker</td>
                  <td>
                    <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Lilian Fuller"
                          data-bs-original-title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Sophia Wilkerson"
                          data-bs-original-title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Christina Parker"
                          data-bs-original-title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i
                        className="bx bx-dots-vertical-rounded"></i></button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-edit-alt me-2"></i> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-trash me-2"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><i className="bx bxl-bootstrap bx-md text-primary me-4"></i> <span>Bootstrap Project</span></td>
                  <td>Jerry Milton</td>
                  <td>
                    <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Lilian Fuller"
                          data-bs-original-title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Sophia Wilkerson"
                          data-bs-original-title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                          className="avatar avatar-xs pull-up" aria-label="Christina Parker"
                          data-bs-original-title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-warning me-1">Pending</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i
                        className="bx bx-dots-vertical-rounded"></i></button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-edit-alt me-2"></i> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i
                          className="bx bx-trash me-2"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
            </div>
          </div>

        </AdminLayout>

  );
}
