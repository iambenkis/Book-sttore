const Home = () => (
    <div className="home">
        <div className="container">
            <div className="">
                <select>
                    <option value="0">All</option>
                </select>
            </div>
            <div className="book-container">
                <div className="book">
                    <div className="book-details">
                        <div className="book-titles">
                            <p className="category">Biography</p>
                            <h2>Book Title</h2>
                            <p>Autor</p>
                        </div>
                        <div className="book-action">
                            <button type="button">Comments</button>
                            <button type="button">Remove</button>
                            <button type="button">Edit</button>
                        </div>
                    </div>
                    <div className="book-progress">
                        <div className="progress-info">
                            <div className="graph"></div>
                            <div className="progress-data">
                                <p>64%</p>
                                <p>Completed</p>
                            </div>
                        </div>
                        <div className="chapter-details">
                            <p>CURRENT CHAPTER</p>
                            <span>CHAPTER 1</span>
                            <button className="update">UPDATE PROGRESS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Home;