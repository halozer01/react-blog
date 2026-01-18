import type Postagem from './Postagem';

export default interface Tema{
    id: number;
    descriçao: string;
    postagem?: Postagem [] | null;
}