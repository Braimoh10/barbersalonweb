import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  //handling  multiple form input at once
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //handling the submit function when the user fire the send message button and resets the form
  const handleSubmit = (e) => {
    e.preventDefault();

    //validate the form data
    const errors = validateForm();
    setFormErrors(errors); //set errors if there is any

    //if no errors proceed with submission
    if (Object.keys(errors).length === 0) {
      console.log("form submitted", formData);
      //set submission state to true to display thank you message
      setIsSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const validateForm = () => {
    //stores errors validation message in each field    
    const errors = {};
    //check if the input field is filled
    if (!formData.name) errors.name = "name is required";
    if (!formData.phone) errors.phone = "phone number is required";
    if (!formData.email) errors.email = "email is required";
    if (!formData.subject) errors.subject = "subject is required";
    if (!formData.message) errors.message = "message is required";

    return errors;
  };
  //check if form is filled before enabling submit button
  //   const isValid = Object.values(formData).every((field)=> field !=='');

  return (
    <div>
      <h1 className="p-4 text-white text-lg md:text-2xl capitalize">
        contact form
      </h1>
      <p className="p-4 text-white text-md md:text-lg">
        Please complete the form below. We'll do everything we can to respond to
        you as quickly as possible.
      </p>
      {isSubmitted ? (
        <div className="p-4 bg-green-500 text-white rounded-lg">
          <h2 className="text-md md:text-xl">Thank you for your message!</h2>
          <p className="text-sm md:text-md">We will get back to you shortly.</p>
        </div>
      ) : (
        <form
          className="border border-orange-peel pb-3 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid lg:grid-cols-2 gap-4 p-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="capitalize mb-2 text-white">
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-1 rounded-lg"
              />
              {formErrors.name && (
                <span className="text-red-500">{formErrors.name}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="capitalize mb-2 text-white">
                phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-1 rounded-lg"
              />
              {formErrors.phone && (
                <span className="text-red-500">{formErrors.phone}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="capitalize mb-2 text-white">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-1 rounded-lg"
              />
              {formErrors.email && (
                <span className="text-red-500">{formErrors.email}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="capitalize mb-2 text-white">
                subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-1 rounded-lg"
              />
              {formErrors.subject && (
                <span className="text-red-500">{formErrors.subject}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col p-4">
            <label htmlFor="message" className="capitalize mb-2 text-white">
              message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="h-40 p-1"
            ></textarea>
            {formErrors.message && (
              <span className="text-red-500">{formErrors.message}</span>
            )}
          </div>
          <button
            type="submit"
            //   disabled={!isValid}
            className="ml-4 p-4 text-lg capitalize bg-orange-peel font-semibold rounded-full text-white"
          >
            send message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
