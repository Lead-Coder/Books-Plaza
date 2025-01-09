import { Book } from './types';
import bird from './assets/bird.jpg'
import chanakya from './assets/Chanakya.jpg'
import gatsby from './assets/gatsby.jpg'
import orwell from './assets/orwell.jpg'
import lord from './assets/lord.jpg'
import Invisible from './assets/Invisible.jpg'
import money from './assets/money.jpg'
import dad from './assets/dad.jpg'
import satanic from './assets/satanic.jpg'

const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A tragic tale of love, ambition, and the American Dream set in the opulent Jazz Age, exploring the emptiness beneath wealth and glamour.",
    price: 12.99,
    cover: gatsby,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A poignant story of racial injustice and moral growth in the American South, told through the eyes of young Scout Finch.",
    price: 14.99,
    cover: bird,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian masterpiece depicting a totalitarian regime's control over truth and individuality, serving as a chilling warning about authoritarianism.",
    price: 11.99,
    cover: orwell,
  },
  {
    id: 4,
    title: "Chanakya's Chant",
    author: "Ashwin Sanghi",
    description: "A man overthrows a government in modern society like Chanakya.",
    price: 9.99,
    cover: chanakya,
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy about a group of hobbits who must destroy a powerful ring to defeat the Dark Lord Sauron.",
    price: 16.99,
    cover: lord,
  },
  {
    id: 6,
    title: "Invisible Man",
    author: "Ralph Ellison",
    description: "A powerful novel about a black man navigating the complexities of race and identity in American society.",
    price: 11.99,
    cover: Invisible,
  },
  {
    id: 7,
    title: "Satanic Verses",
    author: "Salman Rushdie",
    description: "A controversial and allegorical novel blending magical realism and cultural identity with themes of faith, migration, and transformation.",
    price: 18.99,
    cover: satanic,
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "The book explores timeless lessons on wealth, greed, and happiness, emphasizing the role of behavior in financial success.",
    price: 7.99,
    cover: money,
  },
  {
    id: 9,
    title: "Rich Dad, Poor Dad",
    author: "Robert Kiyosaki",
    description: "Highlights financial literacy through contrasting mindsets on wealth-building between two father figures.",
    price: 8.99,
    cover: dad,
  },
];

export const getBooks = (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(books), 500);
  });
};

export const getBookById = (id: number): Promise<Book | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = books.find((b) => b.id === id);
      resolve(book || null);
    }, 500);
  });
};

