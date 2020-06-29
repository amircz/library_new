import { Author } from "./Classes/Author";
import { Book } from "./Classes/Book";
import { Account } from "./Classes/Account";

export const AUTHORS = [
  new Author("יאיר לפיד", 50, "עברית"),
  new Author("דן בראון", 28, "אנגלית"),
  new Author("נפוליאון", 44, "צרפתית"),
  new Author("דר סוס", 70, "עברית"),
  new Author("דור ציון", 22, " רוסית")
];
export const BOOKS = [
  new Book("חייו של יאיר לפיד", "החיים שלי היו מדהימים מאוד", AUTHORS[0]),
  new Book("האדם ביער", "היה היה אדם אשר הלך ביער שנים ארוכות", AUTHORS[1]),
  new Book("צרפת-המדינה", "בשת 1990 הוכתרה צרפת למדינה היפה ביותר בעולם על ידי גולשי מאקו", AUTHORS[2]),
  new Book("חיי ומותי", "בספר זה אספר אודות חיי ומותח", AUTHORS[1]),
  new Book("החיים יפים", "החיים יפים בסך", AUTHORS[2]),
  new Book("המדריך לפטוריסט", "פשוט תלך לרופא כל היום", AUTHORS[4])
];
export const ACCOUNTS = [
  new Account("אמיר", 23, BOOKS[5], [BOOKS[0], BOOKS[5]], [BOOKS[1], BOOKS[3]]),
  new Account("לינוי", 21, BOOKS[2], [BOOKS[2]], [BOOKS[1]]),
  new Account("עמית", 30, BOOKS[1], [BOOKS[1], BOOKS[0]], [BOOKS[2]])
];