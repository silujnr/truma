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
        category: 'Alakapuri Hall, Kozhikode',
        abstract:'with participation of prominent citizens and officials',
        date: '29th December, 2022',
       
    }
];

const BlogOne = () => {
    return (
        <section className="news-section">
          <div className="news-block-area">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-10 text-left">
                        <h3 className="sec-title mb-2">
                            Upcoming News                      
                        </h3>
                          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                                            <Link to="" className="see-all-link"> See all News</Link>

                    </div>
                    <div className="col-lg-2">
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
                                                <span className='flex-none mr-2'><i className="fa fa-calendar"></i> {blog?.date}</span>
                                                <span><i className="fa fa-map-marker mr-2"></i>{blog?.category}</span>
                                            </div>
                                            <h4 className='text-dark'>
                                                {blog?.title}
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
