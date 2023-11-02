export class Medic {

    constructor(
      public name: string,
      public specialty: string,
      public code?:number,
      public pacients?: [string]
    ) {  }
  
  }