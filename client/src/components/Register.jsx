import React from "react";
import { useNavigate } from "react-router-dom";

function Register({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleAuthorRegister = () => {
    navigate("/AuthorRegistration");
  };

  const handleEditorRegister = () => {
    navigate("/EditorRegistration");
  };

  const handleReviewerRegister = () => {
    navigate("/ReviewerRegistration");
  };

  return (
    <div>
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{
          display: "block",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "95%",
          maxHeight: "90%", // Set max height for the modal
          overflowY: "auto", // Enable vertical scrolling
          overflowX: "hidden", // Hide horizontal scrollbar
          // overflowY: "visible" // Hide vertical scrollbar
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
            <div className="modal-header d-flex justify-content-center align-items-center" style={{ backgroundColor: "#007bff", color: "#fff", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
              <h5 className="modal-title text-center">Register</h5>
            </div>
            <div className="modal-body" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card" style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                    <div className="card-body">
                      <img src="https://i.pinimg.com/736x/5f/4c/0d/5f4c0d6a50ab3cc566a4a4f44447341d.jpg" className="card-img-top" alt="..." />
                      <h5 className="card-title">Register as Author</h5>
                      <p className="card-text">
                        Authors are the ones who submit the papers for
                        publication.
                      </p>
                      <button className="btn btn-primary btn-sm w-100" onClick={handleAuthorRegister}>
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card" style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                    <div className="card-body">
                      <img src="https://img.freepik.com/premium-vector/black-ballpoint-pen-logo-design-inspiration_613566-187.jpg" className="card-img-top" alt="..." />
                      <h5 className="card-title">Register as Editor</h5>
                      <p className="card-text">
                        Editors manage the review process and make the final
                        decision on the paper.
                      </p>
                      <button className="btn btn-primary btn-sm w-100" onClick={handleEditorRegister}>
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card" style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                    <div className="card-body">
                      <img src="https://static.vecteezy.com/system/resources/previews/002/212/368/non_2x/line-icon-for-experience-vector.jpg" className="card-img-top" alt="..." />
                      <h5 className="card-title">Register as Reviewer</h5>
                      <p className="card-text">
                        Reviewers perform a speedy review (within 9 days) of the
                        submitted papers and send the review report to the
                        editor.
                      </p>
                      <button className="btn btn-primary btn-sm w-100" onClick={handleReviewerRegister}>
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer" style={{ borderTop: "none", backgroundColor: "#f8f9fa", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onClose}
                style={{ color: "#fff", backgroundColor: "#6c757d", borderColor: "#6c757d", borderRadius: "5px" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;