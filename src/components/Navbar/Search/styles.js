import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    form: {
        flexGrow:'1',
        padding:'0 auto',
    },
    container: {
        alignItems:'center',
        display:'flex',
        padding:'0',
        background:'orange',
        borderRadius:'4px',
        flexGrow:'1',
        background:'rgba(221,143,46)',
        [theme.breakpoints.down('md')]: {
            marginLeft: '-10px',
        }
    },
    mainPageTitle: {
        textAlign:'center',
        padding:'0 5px',
        [theme.breakpoints.down('sm')]: {
            cursor:'default',
        }
    },
    textField: {
        height:'40px',
        flexGrow:'1',
        borderColor:'rgba(0, 0, 0, 0.12)',
        borderLeft:'none',
        outline: 'none',
        borderTopRightRadius: '5px!important',
        borderBottomRightRadius: '5px!important',
        paddingLeft:'10px',
        fontSize:'0.9em',
        [theme.breakpoints.down('sm')]: {
            borderRight:'1px solid rgba(0, 0, 0, 0.12)',
            borderLeft:'1px solid rgba(0, 0, 0, 0.12)',
        },
    },
    searchIcon: {
        padding:'4px',
        cursor:'pointer',
        width:'30px',
        height:'30px',
    },
    bookOptionsContainer: {
        background:'white',
        position:'fixed',
        top:'200px',
        flexGrow:'1',
        borderRadius:'10px',
        padding:'5px 10px',
        border:'3px solid black',
        opacity:'0.85',
    },
    availableProductName: {
        padding:'10px 0',
        borderBottom:'1px solid black',
        cursor:'pointer',
        marginTop: '0',
        [theme.breakpoints.down('sm')]: {
            fontSize:'0.9em',
        }
    },
}))