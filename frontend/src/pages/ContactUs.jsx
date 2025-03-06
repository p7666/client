import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://your-backend-url.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset(); // Clear form after submission
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">📩 Contact Us</h2>
          <div className="row">
            {/* Contact Information */}
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">📍 Contact Information</h5>
                  <p className="card-text">
                    <strong>🏠 Address:</strong> 123 Recipe Street, Food City, FC 12345
                  </p>
                  <p className="card-text">
                    <strong>📞 Phone:</strong> (+91) 1234567890
                  </p>
                  <p className="card-text">
                    <strong>📧 Email:</strong> contact@recipeshare.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-4 bg-white rounded">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    rows="4"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">🚀 Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
