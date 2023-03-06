import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NewsCard.module.css';

const NewsCard = (props) => {
    const news = props.news;
    return (
        <Link className={classes.card} to={props.slug}>
            <img src={news.url} alt="news" width='100%'></img>
            <p className={classes.word_wrap}>{news.title}</p>
        </Link>
    )
}

export default NewsCard;