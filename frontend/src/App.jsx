import Welcome from "./components/Welcome";

let name = "Yuhanth";
let topics = ["React",
  "FastAPI",
  "REST APIs"];



function App() {
    return (
        <div>
            <Welcome name= "Yuhanth" />
            <p>Today I'm learning:</p>
            {topics.map(topic => (
              <p key={topic}>{topic}</p>
            ))}
        </div>
    );
}

export default App;