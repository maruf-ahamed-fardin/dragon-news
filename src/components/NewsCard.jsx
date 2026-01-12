import { FaEye, FaBookmark, FaShareAlt, FaStar, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    author,
    id,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl  ">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Content */}
      <div className="card-body space-y-4">
        <h2 className="card-title text-lg font-bold">{title}</h2>

        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full"
          />
        </figure>

        <p className="text-gray-600">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">
            {" "}
            Read More
          </Link>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
