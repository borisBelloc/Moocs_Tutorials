export class Post {
  title: string;
  content: string;
  loveIts?: number;

  /* Permet de ne pas remplir tout les parametres lors de la creation de l'objet
  A utiliser avec :   post2: Post = new Post( {title: 'AA', content: 'Earth'} )
  */
  //   constructor(init?: Partial<Post>) {
  //     Object.assign(this, init);
  //     this.loveIts = 0;
  //   }

  constructor(title: string, content: string, loveIts?: number) {
    this.title = title;
    this.content = content;

    if (!this.loveIts) {
      this.loveIts = 0;
    } else {
      this.loveIts = loveIts;
    }


  }


}
