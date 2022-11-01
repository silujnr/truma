import { Link } from 'react-router-dom';
import React from 'react'
import './BlogOne.css';
const blogs = [
    {
        id: 1,
        title: 'World Day of Remembrance',
        category: 'Town Hall Kozhikode',
        abstract:'WDR for road traffic victims 2022 conducted by TRACK',
        date: '20th November, 2022',
       
    },
    {
        id: 2,
        title: 'TRACK Magazine Publishing event',
        category: 'Kozhikode',
        abstract:'with participation of prominent citizens and officials',
        date: 'December, 2022',
       
    }
];

const BlogOne = () => {
    return (
        <section className="news-section">
          <div className="news-block-area">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-10 text-left">
                        <h3 className="sec-title">
                            Upcoming News                      
                        </h3>
                          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                    </div>
                    <div className="col-lg-2">
                        <Link to="/milestone" className="see-all-link"> Our Milestones</Link>
                    </div>
                </div>
                <div className="row">

                    {/* <!-- Single Post Start --> */}
                    {
                        blogs?.map(blog => {
                            return (
                                <div key={blog?.id} className="col-lg-6 col-md-6">
                                    <div className="news-item">
                                        <div className="post-details">
                                            <div className="post-footer">
                                                <Link to="/"><i className="fa fa-calendar"></i> {blog?.date}</Link>
                                                <Link to="/"><i className="fa fa-map-marker"></i>{blog?.category}</Link>
                                            </div>
                                            <h4>
                                                <Link to={blog?.link}>{blog?.title}</Link>
                                            </h4>
                                            <p>{blog?.abstract}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <!-- Single Post End --> */}
                </div>
            </div>
            </div>
        </section>
    );
};

export default BlogOne;