import "./App.css";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";

function App() {
  const data = {
    title: "hello",
    content: "there",
    createdAt: "29/10/2023",
    image: "",
    _id:"sdat32523rfasfrq"
  };
  return (
    <>
      <Navbar></Navbar>
      <AddNote></AddNote>
      <NoteCard data={data} isLoading={false}></NoteCard>
    </>
  );
}

export default App;
