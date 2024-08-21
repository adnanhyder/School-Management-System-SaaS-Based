import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import {ucfirst} from "@/functions";
import { useState } from "react";
export default function Create({ auth, dynamicParam , school  }) {
  const { data, setData, post, errors, reset } = useForm({
    description: "",
    quantity: "",
  });
  let class_name = "";

  const [loading, setLoading] = useState(false); // State for loader
  const [fetchedItems, setFetchedItems] = useState([]); // State for fetched items
  const [isSuggestionVisible, setSuggestionVisible] = useState(false); // State for suggestion visibility

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
      setSuggestionVisible(true); // Show suggestions
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleItemClick = (item) => {
    setData({
      ...data,
      item_id: item.id,
      serial_number: item.serial_number + " " + item.name
    });
    setSuggestionVisible(false); // Hide suggestions after selecting item
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    post(route(`${dynamicParam.name}.store`));
  };

  const getInputType = (field) => {
    switch (field) {
      case "email":
        return "email";
      case "item_id":
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



        <form onSubmit={handleSubmit}>

          <div className="mt-4 relative">
            <label className="block text-gray-700"> Roll Number/ Name / Phone / Class / Section</label>
            <TextInput
              id="serial_number"
              type="text"
              autoComplete="off"
              name="serial_number"
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

            {isSuggestionVisible && fetchedItems.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
                {fetchedItems.map((item) => (
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

          {Object.keys(data).map((field, index) => (
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
              ): getInputType(field) === 'file' ? (
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
          ))}
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
