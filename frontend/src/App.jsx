import Header from "./components/Header";
import Welcome from "./components/Welcome";
import NoteList from "./components/NoteList";

const name = "Yuhanth";

const notes = [
  {
    id: 1,
    title: "Learn React",
    content: "Understand JSX, components and props.",
  },
  {
    id: 2,
    title: "Learn FastAPI",
    content: "Build REST APIs using Python.",
  },
  {
    id: 3,
    title: "Connect Frontend and Backend",
    content: "Use fetch() to call FastAPI endpoints.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Welcome name={name} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
