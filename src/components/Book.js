import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteBook } from '../redux/books/books';

const Book = (
  {
    title,
    author,
    id,
  },
) => (
  <div id={id} className="book">
    <div key={id}>
      <h4 className="genre">{author}</h4>
      <h2>{title}</h2>
      <h4 className="author">Author</h4>
    </div>
    <button
      type="button"
    >
      Remove
    </button>
  </div>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
