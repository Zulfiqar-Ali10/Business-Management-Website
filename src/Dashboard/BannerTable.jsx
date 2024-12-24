// import axios from "axios"
// import { useEffect, useState } from "react";

// export default function BannerTable() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({ heading: '', paragraph: ''});

// const bannerApi = async () => {
//   const response = await axios.get("https://6742d9d9b7464b1c2a62dd44.mockapi.io/bannerApi")
//   setData(response.data)
// }

// const handelInput = (e) => {
//          const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value })
       
// }

// // const upDate = async (id) => {
// //   const response = await axios.post(`https://6742d9d9b7464b1c2a62dd44.mockapi.io/bannerApi/${id}`)
// //   setData(response.data)
// // }

// useEffect(() => {
//   bannerApi();

// })

// return(
//   <>
//       <table  style={{marginLeft: "600px", zIndex: "100", position: "absolute", marginTop: "200px"}}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Heading</th>
//             <th>Paragraph</th>
//             <th>Edit</th>
//           </tr>
//         </thead>

//         <tbody>
//          { data.map((item, index) => {
//             return(
//               <>
//               <tr key={index}>
//                  <td>{item.id}</td>
//                  <td> <input type="text" style={{background: "aliceblue"}} onChange={handelInput} value={formData.heading}  name="heading" />{item.Heading}</td>
//                  <td><input type="text"   style={{background: "aliceblue"}}  onChange={handelInput} value={formData.paragraph} name="paragraph" />{item.Paragraph}</td>
//                  <td>
//                   <button >delete</button>
//                   <button >update</button>
//                  </td>
//               </tr>
//               </>
//             )
//          })

//          }
//         </tbody>
//       </table>
//   </>
// )
// }



import axios from "axios";
import { useEffect, useState } from "react";

export default function BannerTable() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ heading: "", paragraph: "" });
  const [editId, setEditId] = useState(null); // Track the ID being edited
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  const fetchBanners = async () => {
    try {
      const response = await axios.get(
        "https://6742d9d9b7464b1c2a62dd44.mockapi.io/bannerApi"
      );
      // console.log(response.data , "response");
      setData(response.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  // Handle form input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new banner (POST)
  const addBanner = async () => {
    if (!formData.heading || !formData.paragraph) {
      alert("Please fill out both fields before adding.");
      return;
    }

    
    try {
      await axios.post(
        "https://6742d9d9b7464b1c2a62dd44.mockapi.io/bannerApi",
        formData
      );
      console.log(formData , "formData");
      setFormData({ heading: "", paragraph: "" }); // Reset form
      fetchBanners(); // Refresh data
    } catch (error) {
      console.error("Error adding banner:", error);
    }
  };

  // Update an existing banner (PUT)
  const updateBanner = async () => {
    if (!formData.heading || !formData.paragraph) {
      alert("Please fill out both fields before updating.");
      return;
    }

    try {
      await axios.put(
        `https://6742d9d9b7464b1c2a62dd44.mockapi.io/bannerApi/${editId}`,
        formData
      );
      setFormData({ heading: "", paragraph: "" }); // Reset form
      setEditId(null); // Exit edit mode
      fetchBanners(); // Refresh data
    } catch (error) {
      console.error("Error updating banner:", error);
    }
  };

  // Delete a banner
  const deleteBanner = async (id) => {
    try {
      await axios.delete(
        `https://6742d9d9b7464b1c2a62dd44.mockapi.io/bannerApi/${id}`
      );
      fetchBanners(); // Refresh data
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []); // Dependency array to prevent infinite loop

  return (
    <>
    {loading ?  <div className="loader"></div>
    : 
    <div className="table-container">
      {/* Add/Edit Form */}
      <div className="add-form">
        <h2>{editId ? "Edit Banner" : "Add New Banner"}</h2>
        <input
          type="text"
          placeholder="Enter Heading"
          name="heading"
          value={formData.heading}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Enter Paragraph"
          name="paragraph"
          value={formData.paragraph}
          onChange={handleInput}
        />
        <button
          className="btn btn-add"
          onClick={editId ? updateBanner : addBanner}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* Table */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Heading</th>
            <th>Paragraph</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.heading}</td>
              <td>{item.paragraph}</td>
              <td>
                <button
                  className="btn btn-edit"
                  onClick={() => {
                    setEditId(item.id); // Set current ID for editing
                    setFormData({
                      heading: item.heading,
                      paragraph: item.paragraph,
                    });
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => deleteBanner(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
}
    </>
  );
}
