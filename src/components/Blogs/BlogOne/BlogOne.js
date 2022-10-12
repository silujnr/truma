import { Link } from 'react-router-dom';
import React from 'react'
import './BlogOne.css';
import blogOneImage from '../../../components/Blogs/BlogOne/images/news1.jpg';
import blogTwoImage from '../../../components/Blogs/BlogOne/images/news2.jpg';


import authorImage from '../../../assets/images/home/author.png';

const blogs = [
    {
        id: 1,
        title: 'Lorem Ipsum is simply dummy text of industry.',
        category: 'Trauma Care',
        abstract:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        author: 'Rosaline D. William',
        authorImage: authorImage,
        date: '14th May, 2021',
        comments: '10 Comments',
        featureImage: blogOneImage,
        link: '#',
        authorUrl: '#'
    },
    {
        id: 2,
        title: 'Lorem Ipsum is simply dummy text of industry.',
        category: 'Trauma Care',
        abstract:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        author: 'Rosaline D. William',
        authorImage: authorImage,
        date: '14th May, 2021',
        comments: '10 Comments',
        featureImage: blogTwoImage,
        link: '#',
        authorUrl: '#'
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
                        <Link to="/news" className="see-all-link">See All News</Link>
                    </div>
                </div>
                <div className="row">

                    {/* <!-- Single Post Start --> */}
                    {
                        blogs?.map(blog => {
                            return (
                                <div key={blog?.id} className="col-lg-6 col-md-6">
                                    <div className="news-item">
                                        <div className="post-thumb">
                                            {/* <img src={blog.featureImage} alt="" /> */}
                                            {/* <Link to={blog?.link} className="cate">{blog?.category}</Link> */}
                                        </div>
                                        <div className="post-details">
                                            {/* <Link to={blog?.authorUrl} className="author">
                                                <img src={blog?.authorImage} alt="" />{blog?.author}
                                            </Link> */}
                                           
                                           
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