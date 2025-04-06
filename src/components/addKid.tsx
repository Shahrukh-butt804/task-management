import { useAddKidMutation } from "@/lib/redux/api/kidApi";
import React, { useState } from "react";

export default function AddKid() {
  const [formData, setFormData] = useState({
    image: null,
    fullName: "",
    username: "",
    age: "",
    gender: "",
    password: "",
  });

  const [addKid] = useAddKidMutation();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev: any) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  async function handleAddKid(e: any) {
    e.preventDefault();
    const res: any = await addKid(formData);
    // console.log("🚀 ~ handleAddKid ~ res:", res?.data?.success);
    if (res?.data?.success) {
      alert(res?.data?.message);
    } else {
      let errorMsg = res?.error?.data?.message || "something went wrong";
      alert(errorMsg);
    }
  }

  return (
    <>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div
        className="relative min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid gap-8 grid-cols-1">
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">Kid Info</h2>
              </div>
              <div className="mt-5">
                <div className="form">
                  {/* Image Upload */}
                  <div className="md:space-y-2 mb-3">
                    <label className="text-xs font-semibold text-gray-600 py-2">
                      Kid Image
                      <abbr className="hidden" title="required">
                        *
                      </abbr>
                    </label>
                    <div className="flex items-center py-6">
                      <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                        <img
                          className="w-12 h-12 object-cover"
                          src={
                            formData.image
                              ? URL.createObjectURL(formData.image)
                              : "https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                          }
                          alt="Avatar Upload"
                        />
                      </div>
                      <label className="cursor-pointer">
                        <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                          Browse
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileChange}
                          name="image"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Full Name & Username */}
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full">
                      <label className="font-semibold text-gray-600 py-2">
                        Full Name <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Full Name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3 space-y-2 w-full">
                      <label className="font-semibold text-gray-600 py-2">
                        Username <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Username"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Age & Gender */}
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Age
                      </label>
                      <input
                        placeholder="Age"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Gender<abbr title="required">*</abbr>
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      Cancel
                    </button>
                    <button
                      onClick={(e) => handleAddKid(e)}
                      className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
