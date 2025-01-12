import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function BannerTable() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ heading: "", paragraphy: "" });
  const [editId, setEditId] = useState(null); // Track the ID being edited
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  const fetchBanners = async () => {
    try {
      const response = await axios.get(
        "https://crud-api-vp6e.vercel.app/banner"
      );
      console.log(response.data.data , "response");
      setData(response.data.data);
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
    if (!formData.heading || !formData.paragraphy) {
      alert("Please fill out both fields before adding.");
      return;
    }

    
    try {
      await axios.post(
        "https://crud-api-vp6e.vercel.app/banner",
        formData
      );
      toast.success("Data post Successfully")
      console.log(formData , "formData");
      setFormData({ heading: "", paragraphy: "" }); // Reset form
      fetchBanners(); // Refresh data
    } catch (error) {
      console.error("Error adding banner:", error);
      toast.error("Data Not post")
    }
  };

  // Update an existing banner (PUT)
  const updateBanner = async () => {
    if (!formData.heading || !formData.paragraphy) {
      alert("Please fill out both fields before updating.");
      return;
    }

    try {
      await axios.put(
        `https://crud-api-vp6e.vercel.app/banner/${editId}`,
        formData
      );
      toast.success("Data Update Successfully")
      setFormData({ heading: "", paragraphy: "" }); // Reset form
      setEditId(null); // Exit edit mode
      fetchBanners(); // Refresh data
    } catch (error) {
      console.error("Error updating banner:", error);
      toast.error("Data Not update")
    }
  };

  // Delete a banner
  const deleteBanner = async (_id) => {
    try {
      await axios.delete(
        `https://crud-api-vp6e.vercel.app/banner/${_id}`
      );
      toast.success("Data delete Successfully")
      fetchBanners(); // Refresh data
    } catch (error) {
      console.error("Error deleting banner:", error);
      toast.error("Data Not delete")
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
          name="paragraphy"
          value={formData.paragraphy}
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.heading}</td>
              <td>{item.paragraphy}</td>
              <td>
                <button
                  className="btn btn-edit"
                  onClick={() => {
                    setEditId(item._id); // Set current ID for editing
                    setFormData({
                      heading: item.heading,
                      paragraphy: item.paragraphy,
                    });
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => deleteBanner(item._id)}
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
