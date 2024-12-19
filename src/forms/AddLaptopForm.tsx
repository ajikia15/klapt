import { addLaptop } from "../services/laptops.api";

export default function AddLaptopForm() {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string | null;
    const price = formData.get("price") as string | null;
    if (title && price) {
      addLaptop(title, parseFloat(price));
    } else {
      console.error("Title and price are required");
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          Price:
          <input type="number" name="price" required min={0} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <form method="dialog">
        <button>Close</button>
      </form>
    </div>
  );
}
