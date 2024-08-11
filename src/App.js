import "./style.css";
function App() {
  const appTitle = "Today I Learned";
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="./logo.png"
            alt="Today I learned Logo"
            height="68"
            width="68"
          />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">share a fact</button>
      </header>
      <main className="main">
        <NewFactForm />
        <FactList />
      </main>
      <CategoryFilter />
    </>
  );
}
function NewFactForm() {
  return <form className="fact-form">Form</form>;
}
function CategoryFilter() {
  return <aside>Categoty filter</aside>;
}

function FactList() {
  return <section>Fact List</section>;
}
export default App;
