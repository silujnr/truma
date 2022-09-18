import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import NewsContent from '../components/NewsContent/NewsContent';
import NewsSidebar from '../components/NewsSidebar/NewsSidebar';
import newsImageOne from '../components/NewsContent/image/news-1.jpg';
import newsImageTwo from '../components/NewsContent/image/news-2.jpg';
import newsImageThree from '../components/NewsContent/image/news-3.jpg';
const news = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.',
        link: '/single-news',
        Location: 'Trauma Care',
        videoLink: '',
        featureImg: newsImageOne,
        galleryImages: [],
        date: '24th March 2021'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.',
        link: '/single-news',
        Location: 'Trauma Care',
        videoLink: 'TntgaATHY6Q',
        featureImg: newsImageTwo,
        galleryImages: [],
        views: '232',
        comments: '35',
        date: '24th March 2021'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.',
        link: '/single-news',
        Location: 'Trauma Care',
        videoLink: '',
        featureImg: newsImageThree,
        galleryImages: [],
        views: '232',
        comments: '35',
        date: '24th March 2021'
    }
]

const News = () => {
    return (
        <>
            <BannerTwo pageTitle="News" title="News" />
            {/* Content  */}
            <section className="news-page">
                <div className="container">
                    <div className="row">
                        {/* Content area  */}
                        <NewsContent news={news} />

                        {/* Sidebar area  */}
                        <NewsSidebar />
                    </div>
                </div>
            </section>

        </>
    );
};

export default News;