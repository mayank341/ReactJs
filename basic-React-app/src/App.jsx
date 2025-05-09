import "./App.css";


// creating a component :
// function Title(){
//   return<h1>i am the tittle!</h1>;
// }

// function Description() {
//   return <p>i am the description</p>;
// }

// function App() {
//   return (
//     <div>
//   <h1>hello react!</h1>;
//   <button>Hello wolrd!</button>
//   <Description/>
//   </div>
//   ); 
// }

// 
function App(){
  return (
    <>
    <ProductTab/>
    </>
  ); 
}
// function App(){
//   return(
//<div>
//   <button>hello world!</button>
//   <h1> this is my app component </h1>
//   <p> inside app component we have :</p>
//   <Title/>
// <Descrption/>
//     <Title/>
//     <Description/>
//     </div>
//   );
//     }

export default App

// jsx with curly braces ,we can add some js function ,

// structuring component :

// to increase the reusability of code ,we use ProductTab