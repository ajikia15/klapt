// filepath: /c:/Balls/Homework/github/react/practice/src/App.tsx
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import { LaptopT } from "./types/LaptopT";
import { fetchLaptops } from "./services/laptops.api";
import Card from "./card/Card";
import PopModal from "./reusable/Modal";
import AddLaptopForm from "./forms/AddLaptopForm";
function App() {
  const [count, setCount] = useState(0);
  const [laptops, setLaptops] = useState<LaptopT[]>([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const addModal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    async function loadLaptops() {
      try {
        const data = await fetchLaptops();
        const laptopsArray = Object.values(data); // Transform object to array
        setLaptops(laptopsArray);
      } catch (error) {
        console.error("Error fetching laptops:", error);
      }
    }

    loadLaptops();
  }, []);

  function toggleAddModal() {
    setAddModalOpen(!addModalOpen);
    if (addModal.current) addModal.current.showModal();
  }

  return (
    <>
      <PopModal title="Add Laptop" modalRef={addModal} builtInClose={false}>
        <AddLaptopForm />
      </PopModal>
      <Navbar />
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={toggleAddModal}></button>
      <div>
        {laptops.length > 0 ? (
          laptops.map((laptop) => (
            <Card
              key={laptop.id}
              id={laptop.id}
              title={laptop.title}
              price={laptop.price}
            />
          ))
        ) : (
          <p>No laptops available</p>
        )}
      </div>
    </>
  );
}

export default App;
