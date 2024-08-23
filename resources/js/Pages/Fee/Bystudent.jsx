import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import {ucfirst} from "@/functions";
import {useEffect, useState} from "react";
export default function Create({ auth, dynamicParam , school ,success }) {
  const { data, setData, post, errors, reset } = useForm({
    fee_categories: [],
  });


  const [loading, setLoading] = useState(false); // State for loader
  const [fetchedItems, setFetchedItems] = useState([]); // State for fetched items
  const [isSuggestionVisible, setSuggestionVisible] = useState(false); // State for suggestion visibility
  const [feeCategories, setFeeCategories] = useState([]);
  const fetch = async (name) => {
    if (name.trim() === "") {
      setSuggestionVisible(false);
      return;
    }

    setLoading(true); // Show loader
    try {
      const response = await axios.get(`/api/students-by-name`, {
        params: { name: name , school_id : school },
      });

      const fetchedItems = response.data;
      setFetchedItems(fetchedItems);
      setFeeCategories(fetchedItems.fee_categories);
      setSuggestionVisible(true); // Show suggestions
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleItemClick = (item) => {
    const currentMonth = new Date().getMonth() + 1; // Get current month (0-indexed, so +1)

    setData({
      ...data,
      fee : item.fee_amount,
      discount : "",
      fine : "",
      month: currentMonth,
      student_id: item.id,
      name: item.roll_number + " - " + item.name + " - " + item.phone + " - " + item.class_name +" - " + item.section
    });
    const voucher = (item) => {
     let student_id = item.id
    }
    setSuggestionVisible(false); // Hide suggestions after selecting item
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    post(route(`${dynamicParam.name}.store`));
  };

  const handleCategoryChange = (categoryId) => {
    const updatedCategories = [...data.fee_categories];
    const categoryIndex = updatedCategories.indexOf(categoryId);

    if (categoryIndex === -1) {
      // Add category ID if not already selected
      updatedCategories.push(categoryId);
    } else {
      // Remove category ID if already selected
      updatedCategories.splice(categoryIndex, 1);
    }

    setData("fee_categories", updatedCategories);
  };

  const getInputType = (field) => {
    switch (field) {
      case "email":
        return "email";
        case "month":
        return "month";
      case "item_id":
      case "student_id":
      case "name":
      case "fee":
        return "button";
      default:
        return "text";
    }
  };

  return (
    <AdminLayout user={auth.user}>
      <Head title={`Create ${dynamicParam.name}`} />
      <h2 className="text-black text-2xl font-semibold">Create {dynamicParam.name}</h2>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">

        {success && (
          <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mt-4 relative">
            <label className="block text-gray-700"> Roll Number/ Name / Phone / Class / Section</label>
            <TextInput
              id="serial_number"
              type="text"
              autoComplete="off"
              name="name"
              value={data.name || ""}
              className="mt-1 block w-full"
              onChange={(e) => {
                setData("name", e.target.value);
                fetch(e.target.value);
              }}
            />
            {loading && (
              <div className="mt-2 text-gray-500">Loading...</div>
            )}

            {isSuggestionVisible && fetchedItems.students.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
                {fetchedItems.students.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.roll_number}
                    -- {ucfirst(item.name)}
                    -- {item.phone}
                    -- {ucfirst(item.class_name)}
                    -- {ucfirst(item.section)}
                  </li>
                ))}
              </ul>
            )}
          </div>



          {Object.keys(data).map((field, index) => {
            if (field === "name" || field === "fee_categories" || field === "student_id" ) {
              return null;
            }
            return (
            <div className="mt-4" key={index}>
              {(!(field === 'serial_number') && (
                <label className="block text-gray-700">{field.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}:</label>
              ))}
              {getInputType(field) === "textarea" ? (
                <textarea
                  id={field}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  onChange={(e) => setData(field, e.target.value)}
                />
              ): getInputType(field) === 'month' ? (
                  <>
                    <select
                      id="month"
                      name="month"
                      value={data.month || ""}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("month", e.target.value)}
                    >
                      <option value="">--Select Month--</option>
                      {Array.from({ length: 12 }, (e, i) => (
                        <option key={i} value={i + 1}>
                          {new Date(0, i).toLocaleString("en", { month: "long" })}
                        </option>
                      ))}
                    </select>
                  </>
                )  :  getInputType(field) === 'file' ? (
                <>
                  <input
                    id={field}
                    type="file"
                    name={field}
                    className="mt-1 block w-full"
                    onChange={(e) => setData(field, e.target.files[0])}
                  />

                  <ul className="instruciton">
                    <li>The image dimensions should not exceed 500x500 pixels.
                      The image size must not exceed 300 KB.
                      The image must be a file of type: jpg, jpeg, png.</li>
                  </ul>
                </>
              )  : getInputType(field) === 'file' ? (
                <>
                  <input
                    id={field}
                    type="file"
                    name={field}
                    className="mt-1 block w-full"
                    onChange={(e) => setData(field, e.target.files[0])}
                  />

                  <ul className="instruciton">
                    <li>The image dimensions should not exceed 500x500 pixels.
                      The image size must not exceed 300 KB.
                      The image must be a file of type: jpg, jpeg, png.</li>
                  </ul>
                </>
              ) : getInputType(field) === 'select' ? (
                <select
                  id={field}
                  name={field}
                  value={data[field]}
                  className="mt-1 block w-full"
                  onChange={(e) => setData(field, e.target.value)}
                >


                </select>
              ) : (
                <>
                  {(!(field === 'serial_number') &&
                    <TextInput
                      id={field}
                      type={getInputType(field)}
                      name={field}
                      value={data[field]}
                      className="mt-1 block w-full"
                      isFocused={index === 0}
                      onChange={(e) => setData(field, e.target.value)}
                    />
                  )}
                </>
              )}
              {errors[field] && <div className="text-red-600">{errors[field]}</div>}
            </div>
            )})}
          {/* Fee Categories Section */}
          {feeCategories.length > 0 && (
            <div className="mt-4">
              <h3 className="text-gray-700">Fee Categories</h3>
              <ul className="mt-2">
                {feeCategories.map((category) => (
                  <li key={category.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      className="form-checkbox"
                      checked={data.fee_categories.includes(category.id)}
                      onChange={() =>
                        handleCategoryChange(category.id)
                      }
                    />
                    <label htmlFor={`category-${category.id}`}>
                      {category.name} - {category.amount}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 text-right">
            <Link
              href={route(`${dynamicParam.name}.index`)}
              className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
            >
              Cancel
            </Link>
            <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
