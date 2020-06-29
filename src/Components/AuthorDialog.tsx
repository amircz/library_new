import { Author } from "../Classes/Author";
import React from "react";
import { DialogContent, Button, makeStyles } from "@material-ui/core";
import AuthorPage from "./AuthorPage";
import useSharedStyles from "../sharedStyles";

export interface AuthorDialogProps {
    author?: Author;
    setIsAuthorDialogShowing: (isShowing: boolean) => void;
}

const useStyles = makeStyles({
    authorDialog: {
        height: '420px',
        direction: 'rtl',
        width: '700px', 
        overflowY: 'hidden'
}
})

const AuthorDialog = (props: AuthorDialogProps) => {
    const classes=useStyles();
    const sharedClasses=useSharedStyles();
    return (
        <DialogContent className={classes.authorDialog} >
            <Button className={sharedClasses.closeBtn} variant="contained" onClick={() => { props.setIsAuthorDialogShowing(false); }}>X</Button>
            <AuthorPage author={props.author}></AuthorPage>
        </DialogContent>
    );
}
export default AuthorDialog;