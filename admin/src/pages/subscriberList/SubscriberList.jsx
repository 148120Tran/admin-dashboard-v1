// import "./SubscriberList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";
// import { SubscriberContext } from "../../context/SubscriberContext/SubscriberContext";
// import {
//   deleteSubscriber,
//   getSubscribers,
// } from "../../context/SubscriberContext/apiCalls";

// export default function SubscriberList() {
//   const { subscribers, dispatch } = useContext(SubscriberContext);

//   useEffect(() => {
//     getSubscribers(dispatch);
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     deleteSubscriber(id, dispatch);
//   };

//   const columns = [
//     { field: "_id", headerName: "ID", width: 90 },
//     {
//       field: "movie",
//       headerName: "Movie",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListImg" src={params.row.img} alt="" />
//             {params.row.title}
//           </div>
//         );
//       },
//     },
//     { field: "genre", headerName: "Genre", width: 120 },
//     { field: "year", headerName: "year", width: 120 },
//     { field: "limit", headerName: "limit", width: 120 },
//     { field: "isSeries", headerName: "isSeries", width: 120 },

//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             {/* this below passing movie to movie.jsx */}
//             <Link to={`/movie/${params.row._id}`} state={{ movie: params.row }}>
//               <button className="productListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="productListDelete"
//               onClick={() => handleDelete(params.row._id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="productList">
//       <DataGrid
//         rows={movies}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//         getRowId={(r) => r._id}
//       />
//     </div>
//   );
// }
