import AdminLayout from "@/Layouts/AdminLayout"
import {Head, Link, useForm} from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";
import MdCalendar from "@/Components/MdCalendar";
import GenerateOptions from "@/Components/GenerateOptions";
import InputError from "@/Components/InputError";
import {useEffect} from "react";
import {ucfirst} from "@/functions";

export default function DashboardAdmin({auth, item, dynamicParam, success , total_payment}) {

  const {data, setData, patch, errors, reset} = useForm({
    'school_id': '',
    _method: "PUT",

  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData('school_id', value);
  };

  useEffect(() => {
    if (data.school_id) {
      patch(route(`${dynamicParam.name}.selectSchool`));
    }
  }, [data.school_id]);
  return (

    <AdminLayout
      user={auth.user}
    >

      <Head title="Dashboard"/>
      <div>
        {success && (
          <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
            {success}
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-md-6 col-xl-6">
          <div className="card bg-black text-white">
            <div className="card-body">
              <h5 className="card-title text-white"> Current School</h5>
              <div className="flex">
                <i className="bx bx-book text-white flex text-icon"></i>
                <p className="card-text text-white flex text-belo-icon">
                  {ucfirst(item.name)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-6">
          <div className="card bg-label-dark text-white">
            <div className="card-body">
              <h5 className="card-title text-white"> Change School</h5>
              <div className="flex">
                <i className="bx bx-book text-white flex text-icon"></i>
                <p className="card-text text-white flex text-belo-icon">
                  <form>


                    <div className="">
                      <SelectInput
                        name="schoolId"
                        value={data.school_id}
                        onChange={handleChange}
                        className={'text-first-large'}
                      >
                        <GenerateOptions items={auth.user.schools ?? schools}/>
                      </SelectInput>

                    </div>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="col-12 col-md-12 col-lg-12 col-xxl-12 order-3 order-md-2">
        <div className="row">
          <div className="col-12 mb-6">
            <div className="mt-5">
            <MdCalendar/>
            </div>
          </div>

        </div>
      </div>


    </AdminLayout>

  );
}
