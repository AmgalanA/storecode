import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    register: {
        backgroundColor:'#EBEBEB',
        letterSpacing: '0.3px',
    },
    container: {
        marginTop: '80px',
    },
    registerText: {
        margin: '0 auto',
        fontWeight: 'bold',
        letterSpacing: '0.2em',
        color: '#3B413C',
    },
    backContainer: {
        color: 'black',
        position:'absolute',
        top:'262px',
        left: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: '10px',
        borderRadius: '20px',
    },
    backIcon: {
        fontSize: '27px',
        marginRight:'2px',
    },
    backContainerLink: {
        fontSize:'20px',
        marginLeft:'5px',
        textDecoration: 'none',
        color: '#3B413C',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px auto',
        '& form': {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '30px',
            '& input': {
                width: '350px',
                height: '50px',
                fontSize: '20px',
                paddingLeft: '10px',
                marginBottom: '15px',
                borderRadius: '5px',
            },
            '& button': {
                width: '365px',
                height: '50px',
                fontSize: 'large',
                color: '#fff',
                backgroundColor: '#0074b1',
                borderRadius: '5px',
            }
        }
    },
    registerContainer: {
        backgroundColor: 'orange',
        maxWidth: '100%',
        padding:'10px',
        borderRadius: '8px',
        '& span': {
            color: '#0074b1',
            cursor: 'pointer',  
        },
        '& p': {
            padding: '0px',
            margin: '0px',
        }
    },
    registerContainerNote: {
        fontSize: '22px',
        whiteSpace: 'pre-wrap',
    },
    registerContainerOr: {
        backgroundColor: '#0074b1',
        marginTop:'-10px',
        borderRadius: '8px',
        padding:'10px',
    },
    registerContainerGoogleAuth: {
        backgroundColor:'orange',
        marginTop: '10px',
        borderRadius: '8px',
        padding:'10px',
        cursor: 'pointer',
    },
    imageDescpr: {
        marginBottom: '10px',
    }
}));