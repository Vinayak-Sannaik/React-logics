const Preview = (props) => {
    console.log(props); // Logs props for debugging
    const { name, age, add } = props.data;
    return (
      <>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>add: {JSON.stringify(add)}</div>
        {/* Alternatively, destructure and display add's properties */}
        {/* <div>add: {add.n}, {add.m}</div> */}
      </>
    );
  };
  
  export default Preview;