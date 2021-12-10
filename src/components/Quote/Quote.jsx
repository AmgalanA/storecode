import { Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';

const Quote = () => {
    const classes = useStyles();

    return (
        <div className={classes.quote}>
            <Typography>
                “ Мир был настолько перегружен войнами, болью
                и страданиями, а ежедневная рутина трудовых будней
                была настолько утомительна и зачастую несправедлива,
                что я думал даже: единственным ответом было бы найти 
                какую-нибудь сногшибательную, невероятную мечту, которая
                оказалось бы стоящей, приносящей радость и вписывающейся
                идеально в жизненные планы. „ - Фил Найт в своей
                книге "Продавец обуви"
            </Typography>
        </div>
    )
}

export default Quote
