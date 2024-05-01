import Swal from "sweetalert2";
import AdminSideBar from "./AdminSideBar";
import { Link } from "react-router-dom";

const PostsTable = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //     dispatch(getAllPosts())
  // })
  const posts = [
    {
      _id: "65ca983d3509c22dd09e14dd",
      title: "moahdfjsa",
      description: "sfasfsafsfsf",
      image: {
        url : "../../../public/profile.jpg",
        publicId: "ununfaym9tcd37kra124",
      },
      user: {
        username: "mohmaed Outerbah",
        url : "../../../public/profile.jpg",
      },
      likes: [
        {
          _id: "65ca97e53509c22dd09e14b0",
        },
      ],
    },
    {
      _id: "65ca983d3509c22dd09e14dd",
      title: "little House",
      description: "sfasfsafsfsf",
      image: {
        url : "../../../public/profile.jpg",
        publicId: "ununfaym9tcd37kra124",
      },
      user: {
        url : "../../../public/profile.jpg",
        username: "Achraf Safi",
      },
      likes: [
        {
          _id: "65ca97e53509c22dd09e14b0",
        },
      ],
    },
  ];
  const removeHandler = (postId) => {
    Swal.fire({
      title: "Are you sure to remove this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(deletePost(postId))
        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "the user post is safe!",
          text: "something went wrong",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="flex" style={{ minHeight: "calc(100vh - (72px +  48px))" }}>
      <AdminSideBar />
      <div className="flex flex-col justify-center w-full overflow-x-auto overflow-y-hidden ">
        <p className="pl-4 mx-2 mt-[2.1rem] text-2xl">Posts</p>
        <div className="mx-6 w-[1000px] min-h-[330px] text-center my-2  ">
          <table className="w-full h-full ">
            <thead>
              <tr className="">
                <th>Count</th>
                <th>User</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center justify-start gap-2 img w-[260px] pl-4">
                      <img
                        className="w-10 rounded-full"
                        src={post.user.url}
                      />
                      <span>{post.user.username}</span>
                    </div>
                  </td>
                  <td>{post.title}</td>
                  <td>
                    <div className="flex items-center justify-center gap-2 text-white w-[260px]">
                      <button className="px-3 py-1 bg-green-400 rounded-xl">
                        <Link to={`/posts/details/${post._id}`}>View post</Link>
                      </button>
                      <button
                        className="px-3 py-1 bg-red-400 rounded-xl"
                        onClick={() => removeHandler(post._id)}
                      >
                        Delete Post
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PostsTable;
