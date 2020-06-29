import React, { useState } from "react";
import { CaretUpFill, CaretDownFill } from "react-bootstrap-icons";
import { makeStyles } from "@material-ui/core";

export interface ExpendArrowProps {
  updateParentState: () => void
}

const useStyles = makeStyles({
  arrow: {
    color: 'black',
    marginLeft:"5px",
  }
})

const ExpendArrow = (props: ExpendArrowProps) => {
  const [clicked, setClicked] = useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setClicked(!clicked)
    props.updateParentState();
  }

  const returnedElement = clicked
    ?
    <span onClick={handleClick}><CaretUpFill className={classes.arrow}></CaretUpFill></span>
    :
    <span onClick={handleClick} ><CaretDownFill className={classes.arrow}></CaretDownFill></span>
  return (
    returnedElement
  )
}

export default ExpendArrow;