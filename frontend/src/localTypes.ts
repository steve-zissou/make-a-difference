/**
 * Contains types for use in TypeScript.
 */

// Attributes on a Book
export type bookType = {
    _id: string;
    author: string;
    isbn: string;
    title: string;
    description: string;
    publishedDate: Date;
    publisher: string;
};