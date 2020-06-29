import { Account } from "../Classes/Account";
import React from "react";
import { Button, makeStyles, withStyles } from "@material-ui/core";
import MuiDialogContent from '@material-ui/core/DialogContent';
import AccountPage from "./AccountPage";
import useSharedStyles from "../sharedStyles";

export interface AccoundDialogProps {
  account?: Account;
  setIsAccountDialogShowing: (isShowing: boolean) => void;
}

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 1400,
    height: 600
  }
}))(MuiDialogContent);


const useStyles = makeStyles({
  accountDialog: {
    height: '420px',
    direction: 'rtl',
    width: '900px',
    padding: '0px',
    marginLeft: '0px',
    overflowY: 'hidden'
  }
})

const AccountDialog = (props: AccoundDialogProps) => {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();
  return <DialogContent className={classes.accountDialog}>
    <Button className={sharedClasses.closeBtn} variant="contained"
      onClick={() => { props.setIsAccountDialogShowing(false); }}>X</Button>
    <AccountPage account={props.account}></AccountPage>
  </DialogContent>
}

export default AccountDialog;