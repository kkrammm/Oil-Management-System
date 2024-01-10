import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails = [
    {
      id:1,
      foodName:"Coconut oil",
      foodDetails:"Wood pressed oil",
      foodprice:200,
      foodImg:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvT4brf7gEktk5tREk4fey3UUguamzWv-VHjhsvLtyAVeoUKs8ytJ9QZQAHPfiZnhR1e24sq2_aDE&usqp=CAc"
    },
    {
      id:2,
      foodName:"Groundnut oil",
      foodDetails:"Wood pressed oil",
      foodprice:200,
      foodImg:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvT4brf7gEktk5tREk4fey3UUguamzWv-VHjhsvLtyAVeoUKs8ytJ9QZQAHPfiZnhR1e24sq2_aDE&usqp=CAc"
    },
    {
      id:3,
      foodName:"Gingely oil",
      foodDetails:"Wood pressed oil",
      foodprice:200,
      foodImg:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvT4brf7gEktk5tREk4fey3UUguamzWv-VHjhsvLtyAVeoUKs8ytJ9QZQAHPfiZnhR1e24sq2_aDE&usqp=CAc"
    }
  ]

}
