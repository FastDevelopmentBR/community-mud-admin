export interface Room {
    id?: number;
    hash: string;
    title: string;
    exits: string[]; 
    description: string;
}