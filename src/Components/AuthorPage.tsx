import { Author } from "../Classes/Author";
import React from "react";
import ListComponent from "./ListComponent";
import { makeStyles } from "@material-ui/core";
import { getAllBooksOfAuthorByAuthorName } from "../Utills";

export interface AuthorPageProps {
  author?: Author;
}

const useStyles = makeStyles({
  authorPageDeatils: {
    marginTop: '50px'
  },
  authorPageText: {
    direction: 'rtl',
    textAlign: 'right',
    display: 'inline'
  },
  authorList: {
    transform: 'translateY(-190px)'
  }
})

const AuthorPage = (props: AuthorPageProps) => {

  const classes = useStyles();

  return (
    <div className={classes.authorPageDeatils}>
      <div className={classes.authorPageText}>
        <h1>סופר: {props.author!.id}</h1>
        <h4>
          שם מלא:  {props.author!.name}
        </h4>
        <h4>
          גיל: {props.author!.age}
        </h4>
        <h4>
          שפה: {props.author!.language}
        </h4>
      </div>
      <div className={classes.authorList}>
        <ListComponent titleOfList="ספרים שכתב" objectsOfList
          ={getAllBooksOfAuthorByAuthorName(props.author?.name).map(book => book.title)}
        ></ListComponent>
      </div>
    </div>
  );
}
export default AuthorPage;