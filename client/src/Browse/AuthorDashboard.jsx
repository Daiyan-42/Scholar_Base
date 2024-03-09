import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import Footer from '../components/Footer';

function AuthorDashboard() {
    const [showModal, setShowModal] = useState(false);
    const [submitModal, setSubmitModal] = useState(false);
    const [articleInfo, setArticleInfo] = useState({
        title: '',
        link: '',
        journal: ''
    });

    const handleUpdateInfo = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleArticleInputChange = (event) => {
        const { name, value } = event.target;
        setArticleInfo({
            ...articleInfo,
            [name]: value
        });
    };

    const handleUpdateArticle = () => {
        setSubmitModal(true);
    };

    const handleCloseSubmitModal = () => {
        setSubmitModal(false);
    };

    const handleSubmitArticle = () => {
        console.log('Submitted Title:', articleInfo.title);
        console.log('Submitted Link:', articleInfo.link);
        console.log('Submitted Journal Name:', articleInfo.journal);
        // Logic to submit the article
        handleCloseSubmitModal();
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar2 />
            <div className="container-fluid mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    {/* Author Information */}
                                    <div className="col-md-6 border-end">
                                        <h1 className="card-title" style={{ color: 'blue', textAlign: 'center' }}>Information</h1>
                                        <img className="rounded-circle" src="https://via.placeholder.com/150" alt="Author Avatar" />
                                        <p><strong>Name:</strong> Mohit</p>
                                        <p><strong>Interests:</strong> Computer Science, Algorithms </p>
                                        <p><strong>About: </strong> I'm an undergrad student in BUET </p>
                                        <button className="btn btn-primary" onClick={handleUpdateInfo}>Update Info</button>
                                    </div>

                                    {/* Manuscript Submission */}
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div>
                                        <h3 className="card-title" style={{ color: 'blue' }}>Your Manuscript</h3>
                                            <ul>
                                                <li>
                                                    <a href="https://www.jstor.org/stable/45377986">Costly self-control and limited willpower</a>
                                                    <span style={{ float: 'right', color: 'green' }}>Status: Green</span>
                                                </li>
                                                <li>
                                                    <a href="https://www.jstor.org/stable/45377987">Social preference under twofold uncertainty</a>
                                                    <span style={{ float: 'right', color: 'red' }}>Status: Red</span>
                                                </li>
                                            </ul>
                                            <button className="btn btn-success" onClick={handleUpdateArticle}>Submit Article</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Update Information */}
            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    {/* Modal content */}
                </div>
            )}

            {/* Modal for Submit Article */}
            {submitModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Submit Article</h5>
                                <button type="button" className="close" onClick={handleCloseSubmitModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="title">Title:</label>
                                    <input type="text" className="form-control" id="title" name="title" value={articleInfo.title} onChange={handleArticleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="link">Link:</label>
                                    <input type="text" className="form-control" id="link" name="link" value={articleInfo.link} onChange={handleArticleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="journal">Journal Name:</label>
                                    <input type="text" className="form-control" id="journal" name="journal" value={articleInfo.journal} onChange={handleArticleInputChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseSubmitModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmitArticle}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div style={{ marginTop: 'auto' }}>
                <Footer />
            </div>
        </div>
    );
}

export default AuthorDashboard;
