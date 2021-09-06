 function T(props) {
    return (
      <div>
         {props.n}
         <button onClick={() => props.setR()}>click</button>
      </div>
    );
 }

 export default T;