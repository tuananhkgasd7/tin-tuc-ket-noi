import React from 'react';
import classes from './Home.module.css';
import NewsCard from './news/NewsCard';
import HotNews from './news/HotNews';

const dummyDataNews = [
    {title: 'Tin tức 1', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'}, 
    {title: 'Tin tức 2', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'},
    {title: 'Tin tức 3', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'},
    {title: 'Tin tức 4', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'},
    {title: 'Tin tức 5', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'},
    {title: 'Tin tức 6', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'},
    {title: 'Tin tức 7', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'},
    {title: 'Tin tức 8', url: 'https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg', content: 'đây là nội dung'},
]

const Home = () => {
    return (
        <div className={classes.container}>
            <img className={classes.banner} src="https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg" alt="banner"></img>
            <h1 className={classes.color_pink}>Tin mới nhất</h1>
            <div className={classes.grid_container}>
                {dummyDataNews.map((item, index) => {
                    return (
                        <div className={classes.grid_item}>
                            <NewsCard key={index} news={item} />
                        </div>);
                }
                )}
            </div>
            <h1 className={classes.color_blue}>Tin hot</h1>
            <HotNews news={dummyDataNews} />
        </div>
    )
}

export default Home;