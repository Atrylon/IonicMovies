export interface Movie {
    title:string;
    image:string;
    resume:string;
    duration:number;
    traileryt:string;
    genre:string[];
    actors:string[];
    director:string;
    date:string;
    comments: Array<Comment>
  }
  
  export interface Comment {
    name:string;
    date:string;
    comment:string;
    score:number;
  }