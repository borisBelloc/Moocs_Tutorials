export class Post {
  title: string;
  content: string;
  loveIts?: number;
  createdDate?: Date;

  /* Permet de ne pas remplir tout les parametres lors de la creation de l'objet
  A utiliser avec :   post2: Post = new Post( {title: 'AA', content: 'Earth'} )
  */
  //   constructor(init?: Partial<Post>) {
  //     Object.assign(this, init);
  //     this.loveIts = 0;
  //   }

  // TODO: permettre creation d'un objet sans loveIts et lem ettre a 0 si non présent

  constructor(title: string, content: string, loveIts?: number, createdDate?: Date) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;

    if (!this.createdDate) {
      this.createdDate = new Date();
    } else {
      this.createdDate = createdDate;
    }


  }


}
