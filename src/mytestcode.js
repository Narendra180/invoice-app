function App() {

    const [inputValue, setInputValue] = useState("");
  
    let handleInput = (event) => {
      // console.log(event.target.value)
      setInputValue(event.target.value)
    }
  
    return (
      <div>
          <input 
            type='text' 
            name='' 
            value={inputValue}
            onChange={handleInput}
          />
      </div>
    );
  }


  const [productButtonContent, setProductButtonContent] = useState("no product");
  const [penButtonContent, setPenButtonContent] = useState("pen button");
  const [paperButtonContent, setPaperButtonContent] = useState("paper product");