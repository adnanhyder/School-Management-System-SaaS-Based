import {Head, Link} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {ucfirst} from "@/functions";
import Voucher from "@/Pages/Fee/Voucher";

export default function Show({auth, item, dynamicParam, additional, printVoucher}) {

  return (
    <AdminLayout user={auth.user}>
      <Head title={`Show ${dynamicParam.name}`}/>
      <div className=" mx-auto sm:px-6 lg:px-8">
        <Voucher auth={auth} item={item} additional={additional} printBtn={true}/>
      </div>
    </AdminLayout>
  );
}
