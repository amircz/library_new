import { makeStyles } from "@material-ui/core";

const useSharedStyles = makeStyles({
    closeBtn: {
        width: '40px',
        marginRight: '5px',
        float: 'right'
    },
    lists: {
        float: 'left',
        display: 'flex',
        flexDirection: 'row',
        height: '50%',
        marginTop: '20px',
        marginLeft: '15%',
    }
});

export default useSharedStyles;