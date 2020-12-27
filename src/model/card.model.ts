export interface ICard{
  id?: number;
  name? :string;
  city? :string;
  info? :string;
  imgurl? :string;
}

export class Card implements ICard{
  constructor(
    public id?:number,
    public name?:string,
    public city?:string,
    public info?:string,
    public imgurl?:string
  ){}
}
