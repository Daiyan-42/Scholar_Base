import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onClose }) {
  const [selectedRole, setSelectedRole] = useState("author");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);
    console.log("Submitted password:", password);
    console.log("Selected role:", selectedRole);

    // Redirect user based on selected role
    switch (selectedRole) {
      case "author":
        navigate("/AuthorDashboard");
        break;
      case "editor":
        navigate("/EditorDashboard");
        break;
      case "reviewer":
        navigate("/reviewer-dashboard");
        break;
      default:
        // Redirect to some default page if no role is selected
        navigate("/");
    }
  };

  const handleCancel = () => {
    onClose(); // Close the modal
    // Clear email and password fields if needed
  };

  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid rounded-start"
                    loading="lazy"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrXB8jM7Sdicev8vsGSDFBgPb9ABbyFJDkscCKHjnGoMbrdi7-nXxMDJAx-QyxwGYlQQ&usqp=CAU"
                    alt="Login Image"
                    style={{
                      objectFit: "cover",
                      width: "90%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={email}
                            placeholder="name@example.com"
                            onChange={handleEmailChange}
                            required
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <select
                            className="form-select"
                            value={selectedRole}
                            onChange={handleRoleChange}
                          >
                            <option value="author">Author</option>
                            <option value="editor">Editor</option>
                            <option value="reviewer">Reviewer</option>
                          </select>
                          <label htmlFor="role" className="form-label">
                            Role
                          </label>
                        </div>
                        <div className="d-grid">
                          <button
                            className="btn btn-dark btn-lg"
                            style={{ width: "100%", padding: "10px" }}
                            type="submit"
                          >
                            Log in now
                          </button>
                        </div>
                        <div className="d-grid mt-3">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          Create new account
                        </a>
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          Forgot password
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
