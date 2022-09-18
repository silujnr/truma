import React from 'react';
import { Link } from 'react-router-dom';
const Videolink = () => {
    return (
        <aside className="widget widget-tags">
            <h3 className="widget-title"><span>Popular Videos</span></h3>
            <div className="tags">
                <Link to="#">Video Link</Link>
                <Link to="#">Video Link</Link>
                <Link to="#">Video Link</Link>
                <Link to="#">Video Link</Link>
                <Link to="#">Video Link</Link>
                <Link to="#">Video Link</Link>
                <Link to="#">Video Link</Link>
                <Link to="#">Video Link</Link>
            </div>
        </aside>
    );
};

export default Videolink;