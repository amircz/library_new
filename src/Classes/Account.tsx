import { Book } from "./Book";
import { LibraryEntity } from './LibraryEntity';

export class Account implements LibraryEntity {
    name:string;
    age:number;
    booksReaded:Book[];
    booksWantToRead:Book[];
    favoriteBook:Book;
    id:string;

    constructor(name:string,age:number,favoriteBook:Book,booksReaded:Book[],booksWantToRead:Book[]) {
        this.name=name;
        this.age=age;
        this.favoriteBook=favoriteBook;
        this.booksReaded=booksReaded;
        this.booksWantToRead=booksWantToRead;
        this.id=name;
    }
}