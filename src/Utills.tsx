import { ACCOUNTS, AUTHORS, BOOKS } from "./Data"
import { Account } from "./Classes/Account";
import { Author } from "./Classes/Author";


export const getFavoriteBookTitleByAccountName: (name: string) => string |
    undefined = (name: string) => ACCOUNTS.find(account => account.name === name)?.favoriteBook.title;

export const getAccountByAccountName: (name: string) => Account | undefined
    = (name: string) => ACCOUNTS.find(account => account.name === name);

export const getAuthorByAuthorName: (name: string) => Author | undefined
    = (name: string) => AUTHORS.find(author => author.name === name);

export const allreadBooks = Array.from(new Set(ACCOUNTS.map(account => account.booksReaded).flat(1)));

export const getAllBooksOfAuthorByAuthorName = (name: string | undefined) => BOOKS.filter(book => book.author.name === name);