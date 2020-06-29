import React, { useState, useContext } from "react";
import { StyledTableRow, StyledTableCell } from "./CustomizedTables";
import { Account } from "../Classes/Account";
import ExpendArrow from "./ExpendArrow";
import { Author } from "../Classes/Author";
import { getFavoriteBookTitleByAccountName, getAccountByAccountName, getAuthorByAuthorName } from "../Utills";
import { isClickableContext, isAccountLineContext } from './AllLists'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  favIcon: {
    marginLeft: "5px",
    color: "rgb(255,204,51)",
    zIndex: 100
  }
})
export interface LineComponentProps {
  content: string;
  isAccount?: boolean;
  isFavorite: boolean;

  handleAccountLineClicked: (account: Account) => void;
  handleAuthorLineClicked: (author: Author) => void;
}

const LineComponent = (props: LineComponentProps) => {
  const [arrowClicked, setArrowClicked] = useState(true);
  const [favoriteBookTitleContent, setFavoriteBookTitleContent] = useState("");

  const isAccountContextValue = useContext(isAccountLineContext);
  const isClickableContextValue = useContext(isClickableContext);

  const classes = useStyles();

  const handleArrowClicked = () => {
    setArrowClicked(!arrowClicked);
    setFavoriteBookTitleContent(arrowClicked ? getFavoriteBookTitleByAccountName(props.content)! : "");
  }
  const handleClick = () => {
    if (isAccountContextValue) {
      props.handleAccountLineClicked(getAccountByAccountName(props.content)!);
    }
    else {
      props.handleAuthorLineClicked(getAuthorByAuthorName(props.content)!);
    }
  }

  return (
    <StyledTableRow>
      <StyledTableCell >
        {isClickableContextValue
          ?
          <>
            {isAccountContextValue ? (<ExpendArrow updateParentState={handleArrowClicked}></ExpendArrow>) : <div className="stam"></div>}
            <span className="clickable" onClick={() => handleClick()}>
              {props.content}
            </span>
            {isAccountContextValue ? <span id="break" >{favoriteBookTitleContent}</span> : <></>}
          </>
          :
          <>
            {props.isFavorite ? <><FontAwesomeIcon className={classes.favIcon} icon={faStar}></FontAwesomeIcon></> : <div className="stam"></div>}
            {props.content}
          </>
        }
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default LineComponent;