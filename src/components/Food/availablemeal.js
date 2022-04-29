import Mealitem from "./fooditem/fooditem"
import classes from './fooditem/fooditem.module.css'
const Mealsfake=[
    {
        id:'v1',
        name:'idly',
        description:'smooth and round',
        image:'https://www.jacadatravel.com/wp-content/uploads/fly-images/316520/iStock-530506394-552x310-cc.jpg',
        price:25
    },
    {
        id:'v2',
        name:'pepper masala',
        description:'smooth and round',
        image:'https://sandinmysuitcase.com/wp-content/uploads/2020/12/Beef-Biryani-1024x768.jpg.webp',
        price:25
    },
    {
        id:'v3',
        name:'dosa',
        description:'smooth and round',
        image:'https://sandinmysuitcase.com/wp-content/uploads/2020/04/Indian-food.jpg.webp',
        price:25
    },
    {
        id:'v4',
        name:'lemon rice',
        description:'smooth and round',
        image:'https://sandinmysuitcase.com/wp-content/uploads/2021/01/Popular-Indian-Food-Dishes-1024x768.jpg.webp',
        price:25
    },
    {
        id:'v5',
        name:'tomato juice',
        description:'smooth and round',
        image:'https://www.jacadatravel.com/wp-content/uploads/fly-images/316522/iStock-1084019098-552x310-cc.jpg',
        price:25
    },
    {
        id:'v6',
        name:'pineapple juice',
        description:'smooth and round',
        image:'https://www.jacadatravel.com/wp-content/uploads/fly-images/316526/iStock-1024549286-552x310-cc.jpg',
        price:25
    }
]

export default function AvailableMeals() {
    return(
        <section className={classes.list}>
            <h1>Food Items</h1>
            <ul>
                {Mealsfake.map((x)=>
               <Mealitem id={x.id}
               key={x.id} name={x.name} description={x.description}
               price={x.price} image={x.image}
               />)}
            </ul>
        </section>
    )
}
