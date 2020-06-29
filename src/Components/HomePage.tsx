import React from "react";
import { Book } from "../Classes/Book";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TopBar from "./TopBar";
import { Author } from "../Classes/Author";
import AllLists from "./AllLists";
import { AUTHORS, ACCOUNTS, BOOKS } from "../Data";
import { Account } from "../Classes/Account";
import AccountDialog from "./AccountDialog";
import AuthorDialog from "./AuthorDialog";
import { allreadBooks } from "../Utills";



export const dataOfTablesContext: React.Context<{ books: Book[], accounts: Account[], authors: Author[] }> =
  React.createContext({ books: BOOKS, accounts: ACCOUNTS, authors: AUTHORS });
const defaultAccountLineClickedContext = (account: Account) => { };
const defaultAuthorLineClickedContext = (author: Author) => { }
export const handleAccountLineClickFunctionsContext = React.createContext(defaultAccountLineClickedContext);
export const handleAutorLineClickFunctionsContext = React.createContext(defaultAuthorLineClickedContext);


const HomePage = () => {

  const [isAccountDialogShowing, setIsAccountDialogShowing] = useState(false);
  const [isAuthorDialogShowing, setIsAuthorDialogShowing] = useState(false);
  const [accountOfDialog, setAccountOfDialog] = useState<Account>();
  const [authorOfDialog, setAuthorOfDialog] = useState<Author>();
  const [booksOfTable, setBooksOfTable] = useState(BOOKS);
  const [authorsOfTable, setAuthorsOfTable] = useState(AUTHORS);
  const [accountOfTable, setAccountsOfTable] = useState(ACCOUNTS);

  const handleSearch = (textOfSearch: string) => {
    const booksFound: Book[] = allreadBooks.filter(book => book.id.includes(textOfSearch));
    const authorsFound: Author[] = booksFound.map(book => book.author);
    const accountsFound: Account[] = ACCOUNTS.filter(account => booksFound.filter(book => account.booksWantToRead.concat(account.booksReaded).includes(book)).length > 0)
    if (booksFound.length !== 0) {
      setBooksOfTable(booksFound);
      setAuthorsOfTable(authorsFound);
      setAccountsOfTable(accountsFound);
      if (textOfSearch === "") {
        resetTables();
      }
    }
    else {
      if (textOfSearch === "") {
        resetTables();
      }
      else {
        setBooksOfTable([]);
        setAuthorsOfTable([]);
        setAccountsOfTable([]);
      }
    }
  }

  const resetTables = () => {
    setBooksOfTable(BOOKS);
    setAuthorsOfTable(AUTHORS);
    setAccountsOfTable(ACCOUNTS);
  }

  const handleAccountLineClicked = (account: Account) => {
    setIsAccountDialogShowing(true);
    setAccountOfDialog(account);
  }
  const handleAuthorLineClicked = (author: Author) => {
    setIsAuthorDialogShowing(true);
    setAuthorOfDialog(author);
  }

  return (
    <>
      <TopBar handleSearch={handleSearch}></TopBar>
      <dataOfTablesContext.Provider value={{ books: booksOfTable, accounts: accountOfTable, authors: authorsOfTable }}>
        <handleAccountLineClickFunctionsContext.Provider value={handleAccountLineClicked}>
          <handleAutorLineClickFunctionsContext.Provider value={handleAuthorLineClicked}>
            <AllLists
            />
          </handleAutorLineClickFunctionsContext.Provider>
        </handleAccountLineClickFunctionsContext.Provider>
      </dataOfTablesContext.Provider>
      <Dialog open={isAccountDialogShowing} aria-label="AccountDialog">
        <AccountDialog account={accountOfDialog} setIsAccountDialogShowing={setIsAccountDialogShowing} />
      </Dialog>


      <Dialog open={isAuthorDialogShowing} aria-label="AuthorDialog">
        <AuthorDialog author={authorOfDialog} setIsAuthorDialogShowing={setIsAuthorDialogShowing} />
      </Dialog>
    </>);
}
export default HomePage;