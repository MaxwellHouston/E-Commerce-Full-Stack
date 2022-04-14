import '../App.css';

function App() {

  const getProduct = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    console.log(data);
  }


  return (
    <div>
      <button onClick={getProduct}>fetch</button>
    </div>
  );
}

export default App;
