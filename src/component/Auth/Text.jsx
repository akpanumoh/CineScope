

// export default function TextColor({ children, color }) {
//   return (

//     <div>
//       <h1 className={`{${(children, color)}`}></h1>

//     </div> // only apply when you want to display only one item.
//   );
// }








export default function Movietext ({header, welcome, about, info}){
    return(
        <div>
            <h1 className="header">{header}</h1>
            <p className="welcome">{welcome}</p>
            <small className="small">about</small>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates repellendus!</p>
        </div>
    )
}

//when you want to call it; you are calling it a component example <TextColor Header="Our product"/>
//this only apply when you have multiple texts to display.