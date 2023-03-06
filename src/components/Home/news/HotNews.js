import React from "react";
import classes from './HotNews.module.css';
import NewsCard from "./NewsCard";
import SmallCard from "./SmallCard";

const HowNews = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.grid_container}>
                <div className={classes.grid_item}>
                    <NewsCard news={props.news[0]}/>
                    <p className={classes.word_wrap}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div className={classes.grid_item_3}>
                    <div className={classes.grid_row}>
                        <div className={classes.grid_item_2}>
                            <NewsCard news={props.news[1]}/>
                        </div>
                        <div className={classes.grid_item_2}>
                            <NewsCard news={props.news[2]}/>
                        </div>
                    </div>
                </div>
                <div className={classes.grid_item_3}>
                    <div className={classes.grid_row}>
                        <div className={classes.grid_item_3}>
                            <SmallCard news={props.news[3]}/>
                        </div>
                        <div className={`${classes.grid_item_3} ${classes.mt_3}`}>
                            <SmallCard news={props.news[4]}/>
                        </div>
                        <div className={`${classes.grid_item_3} ${classes.mt_3}`}>
                            <SmallCard news={props.news[5]}/>
                        </div>
                        <div className={`${classes.grid_item_3} ${classes.mt_3}`}>
                            <SmallCard news={props.news[6]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HowNews;