import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Typography, Avatar, Card } from '@material-ui/core';
import moment from 'moment';
import 'moment-timezone';

const Comment = ({ name, message, photoUrl, timestamp }) => {
    const classes = useStyles();
    const [date, setDate] = useState('');
    const [translatedDate, setTranslatedDate] = useState('');

    useEffect(() => {
        setDate(moment.unix(timestamp).utc(date).local().format("DD MMMM, hh:mm"));

        if(date.includes('January')) {
            setTranslatedDate(date.replace('January', 'Январь'));
        } else if (date.includes('February')) {
            setTranslatedDate(date.replace('February', 'Февраль'));
        } else if (date.includes('March')) {
            setTranslatedDate(date.replace('March', 'Март'));
        } else if (date.includes('April')) {
            setTranslatedDate(date.replace('April', 'Апрель'));
        } else if (date.includes('May')) {
            setTranslatedDate(date.replace('May', 'Май'));
        } else if (date.includes('June')) {
            setTranslatedDate(date.replace('June', 'Июнь'));
        } else if (date.includes('July')) {
            setTranslatedDate(date.replace('July', 'Июль'));
        } else if (date.includes('August')) {
            setTranslatedDate(date.replace('August', 'Август'));
        } else if (date.includes('September')) {
            setTranslatedDate(date.replace('September', 'Сентябрь'));
        } else if (date.includes('October')) {
            setTranslatedDate(date.replace('October', 'Октябрь'));
        } else if (date.includes('November')) {
            setTranslatedDate(date.replace('November', 'Ноябрь'));
        } else if (date.includes('December')) {
            setTranslatedDate(date.replace('December', 'Декабрь'));
        }
    }, [timestamp])

    return (
        <>
        {message && (
            <Card className={classes.comment}>
                <div className={classes.commentHeader}>
                    <Avatar src={photoUrl}>
                        {name[0]}
                    </Avatar>
                    <Typography className={classes.commentName} variant="h6">{name}</Typography>
                </div>
                <div className={classes.commentBody}>
                    <Typography className={classes.commentMessage} variant="h6">{message}</Typography>
                </div>
                <Typography variant="h6" className={classes.date}>{translatedDate}</Typography>
                <Typography variant="h6" className={classes.date}>{moment().year()}</Typography>
            </Card> 
        )}
        </>
    )
}

export default Comment
