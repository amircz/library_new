import { Book } from "../Classes/Book";
import React, { useState } from "react";
import { Account } from "../Classes/Account";
import { makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ListComponent from "./ListComponent";
import useSharedStyles from "../sharedStyles";

export interface AccountPageProps {
  account?: Account;
}
const useStyles = makeStyles({
  accountTitle: {
    marginLeft: '35%',
  },
  searchBox: {
    transform: 'translate3d(605px, -375px, 0)'
  },
  searchBtn: {
    transform: 'translate3d(-10px, -65px, 0)'
  }
})
const AccountPage = (props: AccountPageProps) => {
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);
  const [booksOfReadBooksTable, setBooksOfReadBooksTable] = useState(props.account!.booksReaded);
  const [booksOfWantToReadTable, setBooksOfWantToReadTable] = useState(props.account!.booksWantToRead);

  const classes = useStyles();
  const sharedClasses = useSharedStyles();

  const handleSearchBtnClicked = () => {
    setSearchBtnClicked(true);
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let booksFound: Book[] = [];
    const readBooks: Book[] = props.account!.booksReaded;
    const wantToRead: Book[] = props.account!.booksWantToRead;

    booksFound = readBooks.filter(book => book.title.includes(event.currentTarget.value))

    let booksOfReadBooksState: Book[] = (booksFound.length > 0
      ? booksFound : event.currentTarget.value === "" ? readBooks : [])
    setBooksOfReadBooksTable(booksOfReadBooksState);

    booksFound = wantToRead.filter(book => book.title.includes(event.currentTarget.value))

    let booksOfWantToReadBooksState: Book[] = (booksFound.length > 0
      ? booksFound : (event.currentTarget.value === "" ? wantToRead : []))
    setBooksOfWantToReadTable(booksOfWantToReadBooksState);
  }
  return (
    <>
      <h1 className={classes.accountTitle}>
        משתמש: {props.account!.name}
      </h1>
      <div className={sharedClasses.lists}>
        <ListComponent
          objectsOfList={booksOfReadBooksTable.map(book => book.title)}
          titleOfList="ספרים שקרא" favoriteBookTitle={props.account?.favoriteBook.title}>
        </ListComponent>
        <ListComponent
          objectsOfList={booksOfWantToReadTable.map(book => book.title)} titleOfList="ספרים שרוצה לקרוא"  >
        </ListComponent>
      </div>
      {searchBtnClicked
        ?
        <input type="text" placeholder="חיפוש" className={classes.searchBox} onChange={handleChange}
         onBlur={()=>setSearchBtnClicked(false)}></input>
        :
        <FontAwesomeIcon icon={faSearch} className=
          {classes.searchBtn} onClick={() => handleSearchBtnClicked()}></FontAwesomeIcon>
      }
    </>
  );

}
export default AccountPage;