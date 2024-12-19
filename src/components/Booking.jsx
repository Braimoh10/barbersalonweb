import { useState } from "react";
import { pricing, teamMembers } from "../constant/data";

const Booking = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    category: "",
    barber: "",
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateErrors();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      console.log(formData);
      setFormData({
        date: "",
        time: "",
        category: "",
        barber: "",
        name: "",
        phone: "",
        email: "",
      });

      setErrors({}); //resets errors after successful submission
    }
  };

  const validateErrors = () => {
    //stores error validation in each field
    const validationErrors = {};
    //check if each field is filled
    if (!formData.date) validationErrors.date = "Date is required.";
    if (!formData.time) validationErrors.time = "Time is required.";
    if (!formData.category) validationErrors.category = "Category is required.";
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.barber) validationErrors.barber = "Barber is required.";
    if (!formData.phone) validationErrors.phone = "Phone number is required.";

    //check if email is empty
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    }
    //if email is no empty , validate this format
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address.";
    }
    return validationErrors;
  };

  //first extract the category names from the pricing array
  const categoryOptions = pricing.map((item) => item.category);
  // console.log(categoryOptions);
  //extract barber from the team members
  const barbers = teamMembers.map((barber) => barber.name);
  console.log(barbers);

  return (
    <>
      {isSubmitted ? (
        <div className="p-4 bg-green-500  rounded-lg ">
          <h2 className="text-md md:text-xl">Thank you!</h2>
          <p className="text-sm md:text-md">
            'Your appointment has been successfully booked!'
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="border border-orange-peel rounded-lg p-5"
        >
          <div className="grid md:grid-cols-2 gap-3 mb-1 md:mb-6">
            <div className="flex flex-col w-full">
              <label htmlFor="date" className="capitalize mb-2">
                date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={handleChange}
                value={formData.date}
                className="w-full md:p-1 border border-gray-300 rounded" // Ensure full width
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="time" className="capitalize  mb-2">
                time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                onChange={handleChange}
                value={formData.time}
                className="w-full md:p-1 border border-gray-300 rounded" // Ensure full width
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="category"
                className="capitalize mb-2 "
              >
                select a category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                id="category"
                className="w-full md:p-2 border border-gray-300 rounded" // Ensure full width
              >
                <option value="">choose a category</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="barber" className="capitalize mb-2  md:mb-2">
                select a barber
              </label>
              <select
                name="barber"
                onChange={handleChange}
                value={formData.barber}
                id="barber"
                className="w-full md:p-2 border border-gray-300 rounded" // Ensure full width
              >
                <option value="">choose a barber</option>
                {barbers.map((barber) => (
                  <option key={barber} value={barber}>
                    {barber}
                  </option>
                ))}
              </select>
              {errors.barber && (
                <p className="text-red-500 text-sm">{errors.barber}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="capitalize mb-2">
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full md:p-2 border border-gray-300 rounded" // Ensure full width
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="capitalize mb-2">
                phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full md:p-2 border border-gray-300 rounded" // Ensure full width
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="capitalize md:mb-2">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:p-2 border border-gray-300 rounded" // Ensure full width
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-lg p-1 md:p-3 mt-3 md:mt-6 capitalize bg-orange-peel font-semibold rounded-lg"
          >
            submit
          </button>
        </form>
      )}
    </>
  );
};
export default Booking;
