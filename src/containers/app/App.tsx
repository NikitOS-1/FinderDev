function App() {
  let userName = 'NikitOS-1';
  fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  userName = 'NikitOS-1';

  return (
    <>
      {/*App*/}
    </>
  );
}

export default App;
