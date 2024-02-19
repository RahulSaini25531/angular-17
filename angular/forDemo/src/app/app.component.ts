import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forDemo';

product:any[]=[]
constructor()
{
  fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  .then((data)=>{console.log(data); this.product=data});
}


  names=["raj","ravi","tejas","ram"]
//   products=[

//     {"title":"Samsung21",
//      "price":5000,
//      "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4X11OxfHQk0WqY6sc1kjd2Xh4gN-eFyWHA&usqp=CAU"
//   },
    
//   {"title":"Samsung22",
//   "price":45000,
//   "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4X11OxfHQk0WqY6sc1kjd2Xh4gN-eFyWHA&usqp=CAU"
// },

// {"title":"Samsung23",
// "price":35000,
// "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4X11OxfHQk0WqY6sc1kjd2Xh4gN-eFyWHA&usqp=CAU"
// },

// {"title":"Samsung24",
// "price":25000,
// "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4X11OxfHQk0WqY6sc1kjd2Xh4gN-eFyWHA&usqp=CAU"
// },

// {"title":"Samsung25",
// "price":15000,
// "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4X11OxfHQk0WqY6sc1kjd2Xh4gN-eFyWHA&usqp=CAU"

// }
//   ]
}
