import React, { useState } from 'react';
import Navbar2 from './Navbar2';

function EditorDashboard() {
    const [pendingArticles, setPendingArticles] = useState([
        { id: 1, title: "The Financial Benefits and Burdens of Performance Funding in Higher Education" },
        { id: 2, title: "The Impact of the Michigan Merit Curriculum on High School Math Course-Taking" },
        { id: 3, title: "One-to-One Technology and Student Outcomes: Evidence From Mooresvilles Digital Conversion Initiative" }
    ]);

    const handleApproveArticle = (id) => {
        // Filter out the approved article
        const updatedArticles = pendingArticles.filter(article => article.id !== id);
        setPendingArticles(updatedArticles);
        console.log(`Article ${id} approved`);
    };

    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00NTItZi0wMTQuanBn.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div style={containerStyle}>
            <Navbar2 />
            <div className="container mt-4" style={{ flex: 1 }}>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center text-blue">Pending Articles</h1>
                        <ul className="list-group">
                            {pendingArticles.map(article => (
                                <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {article.title}
                                    <button className="btn btn-primary" onClick={() => handleApproveArticle(article.id)}>Approve</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorDashboard;
