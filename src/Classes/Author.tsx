import { LibraryEntity } from './LibraryEntity';
export class Author implements LibraryEntity {
    name:string;
    age:number;
    language:string;
    id:string;

    constructor(name:string, age:number,language:string) {
        this.name=name;
        this.age=age;
        this.language=language;
        this.id=name;
    }
}