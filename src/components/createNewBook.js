const CreateBook = () => (
  <div className="add-book">
    <h2>Add new book</h2>
    <form>
      <input type="text" className="book-title" placeholder="Book title" />
      <div className="selector">
        <select>
          <option value="0">Category</option>
        </select>
      </div>
      <button type="submit">Add book</button>
    </form>
  </div>
);
export default CreateBook;
