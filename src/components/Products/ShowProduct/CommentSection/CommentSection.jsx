import React, { useState, useEffect, useRef } from 'react'
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Comment from './Comment/Comment';
import { auth, db } from '../../../../firebase';
import { addDoc, getDocs, serverTimestamp, query, collection, orderBy } from '@firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../../features/userSlice';
import CreateIcon from '@material-ui/icons/Create';
import { signOut } from '@firebase/auth';

const CommentSection = ({ setIsShowingProduct, productId }) => {
    const classes = useStyles();

    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [isError, setIsError] = useState(false);

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const endOfCommentsRef = useRef(null);

    useEffect( async () => {
        try {
            const querySnapshot = await 
            getDocs(query(collection(db,`comments${productId}`), 
            orderBy('timestamp', 'desc')));
            setComments(querySnapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )));
        } catch(error) {
            if(error.message === 'Quota exceeded.') setIsError(true);
        }
    },[comments]);

    const scrollToBottom = () => {
        endOfCommentsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const sendComment = async (e) => {
        if(commentText !== '') {
            e.preventDefault();

            await addDoc(collection(db, `comments${productId}`), {
                name: user.displayName,
                message: commentText,
                photoUrl: user.photoUrl || '',
                timestamp: serverTimestamp(),
            });

            setCommentText('');
            scrollToBottom();
        };
        return;
    };

    const handleLogout = () => {
        dispatch(logout());
        signOut(auth);
    };
        
        return (
            <div className={classes.commentSection}>
            {isError ? (
                <Typography className={classes.errorMessage} variant="h6">Приносим извинения за предоставленные неудобства, использование нашей базы данных было превышено, на данный момент комментарии недоступны</Typography>
            ) : (
                <>
                {!user && 
                    <Typography className={classes.commentSectionSignIn} onClick={() => setIsShowingProduct(false)} component={Link} to="/register">
                        Чтобы оставить комментарий, Вам нужно зарегистрироваться на сайте
                    </Typography>
                    }
                    
                    <div>
                        {user && 
                        <form className={classes.formContainer}>
                            <div className={classes.formInputContainer}>
                                <input placeholder="Оставьте свой комментарий на FREID.COM" value={commentText} onChange={e => setCommentText(e.target.value)} type="text" />
                                <CreateIcon />
                            </div>
        
                            <button style={{cursor: !commentText ? 'default' : 'pointer'}} disabled={!commentText} className={classes.formButton} onClick={sendComment} type="submit">Оставить комментарий</button>
                            <Typography className={classes.logout} onClick={handleLogout} variant="h6">Logout</Typography>
                        </form>
                        }

                        {comments.map(({id, data: { name, message, photoUrl, timestamp }}) =>( 
                            <Comment  
                                key={id} 
                                name={name} 
                                message={message} 
                                photoUrl={photoUrl}
                                timestamp={timestamp}
                            />
                        ))}
                        {/* End of comments */}
                        <div ref={endOfCommentsRef} />
                    </div>
                </>
            )}
            
            
        </div>
    )
}

export default CommentSection
