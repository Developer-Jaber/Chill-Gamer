import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvaider";

const AddReviwe = () => {
    const {user} = useContext(AuthContext);
    const genres = ['Action', 'RPG', 'Adventure', 'Strategy', 'Puzzle', 'Simulation'];

    const handleAddReviwe = (e) => {
        e.preventDefault();
        const form = e.target;
        const coverImage = form.coverImage.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;
        const email = form.email.value;
        const name = form.name.value;

        form.reset();
        const addedReview = {coverImage,title,description,rating,year,genre,email,name}
        console.log(addedReview);

        fetch('http://localhost:5000/added-review',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(addedReview)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            console.log('reviwe is added',data);
          }
        })
    }
  return (
    <div className="bg-white shadow-md mx-auto p-6 rounded-lg max-w-3xl">
      <h2 className="mb-6 font-semibold text-2xl text-blue-600 text-center">Add New Review</h2>
      <form onSubmit={handleAddReviwe}>
        <div className="gap-6 grid grid-cols-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Cover Image URL</span>
            </label>
            <input
              type="url"
              name='coverImage'
              placeholder="Enter game cover image URL"
              className="input-bordered w-full input"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Title</span>
            </label>
            <input
              type="text"
              name='title'
              placeholder="Enter game title"
              className="input-bordered w-full input"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Review Description</span>
            </label>
            <textarea
              placeholder="Write your review here..."
              name='description'
              className="textarea-bordered w-full textarea"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name='rating'
              placeholder="Rate the game (1-10)"
              className="input-bordered w-full input"
              required
              min="1"
              max="10"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Publishing Year</span>
            </label>
            <input
              type="number"
              name='year'
              placeholder="Enter the publishing year"
              className="input-bordered w-full input"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Genres</span>
            </label>
            <select
              name='genre'
              className="w-full select-bordered select"
              required
            >
              {/* <option value="" disabled>Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Sports">Sports</option> */}
              {
                genres.map((option,index)=><option key={index}>{option}</option>)
              }
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email (Pre-filled)</span>
            </label>
            <input
              type="email"
              name='email'
              className="input-bordered w-full input"
              value={user.email}
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name (Pre-filled)</span>
            </label>
            <input
              type="text"
              name='name'
              className="input-bordered w-full input"
              value={user.displayName }
              readOnly
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full text-white btn btn-primary"
            >
              Submit Review
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddReviwe
