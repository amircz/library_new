import { Author } from './Author';
import { LibraryEntity } from './LibraryEntity';

export class Book implements LibraryEntity{
    title:string;
    summary:string;
    author:Author;
    id:string;


    constructor(title:string, summary:string, author:Author){
        this.title=title;
        this.summary=summary;
        this.author=author;
        this.id=title;
    }
}