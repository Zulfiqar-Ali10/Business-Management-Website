import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function TestimonialTabel() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ quote: "", name: "", designation: "" });
  const [editId, setEditId] = useState(null); // Track the ID being edited
  const [loading, setLoading] = useState(false);

  // Fetch data from API
  const fetchTestimonial = async () => {
    try {
      const response = await axios.get(
        "https://6773d23c77a26d4701c67010.mockapi.io/testimonial"
      );
      console.log(response.data , "response");
      setData(response.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching Testimonial:", error);
    }
  };

  // Handle form input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new banner (POST)
  const addTestimonial = async () => {
    if (!formData.quote || !formData.name || !formData.designation) {
      alert("Please fill out both fields before adding.");
      return;
    }

    
    try {
      await axios.post(
        "https://6773d23c77a26d4701c67010.mockapi.io/testimonial",
        formData
      );
      toast.success("Data post Successfully")
      console.log(formData , "formData");
      setFormData({ quote: "", name: "", designation: "" }); // Reset form
      fetchTestimonial(); // Refresh data
    } catch (error) {
      console.error("Error adding Testimonial:", error);
      toast.error("Data Not post")
    }
  };

  // Update an existing banner (PUT)
  const updateTestimonial = async () => {
    if (!formData.quote || !formData.name || !formData.designation) {
      alert("Please fill out both fields before updating.");
      return;
    }

    try {
      await axios.put(
        `https://6773d23c77a26d4701c67010.mockapi.io/testimonial/${editId}`,
        formData
      );
      toast.success("Data Update Testimonial")
      setFormData({ quote: "", name: "", designation: "" }); // Reset form
      setEditId(null); // Exit edit mode
      fetchTestimonial(); // Refresh data
    } catch (error) {
      console.error("Error updating Testimonial:", error);
      toast.error("Data Not update")
    }
  };

  // Delete a banner
  const deleteBanner = async (id) => {
    try {
      await axios.delete(
        `https://6773d23c77a26d4701c67010.mockapi.io/testimonial/${id}`
      );
      toast.success("Data delete Successfully")
      fetchTestimonial(); // Refresh data
    } catch (error) {
      console.error("Error deleting Testimonial:", error);
      toast.error("Data Not delete")
    }
  };

  useEffect(() => {
    fetchTestimonial();
  }, []); // Dependency array to prevent infinite loop

  return (
    <>
    {loading ?  <div className="loader"></div>
    : 
    <div className="table-container">
      {/* Add/Edit Form */}
      <div className="add-form">
        <h2>{editId ? "Edit Testimonial" : "Add New Testimonial"}</h2>
        <input
          type="text"
          placeholder="Enter Quote"
          name="quote"
          value={formData.quote}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Enter Designation"
          name="designation"
          value={formData.designation}
          onChange={handleInput}
        />
        <button
          className="btn btn-add"
          onClick={editId ? updateTestimonial : addTestimonial}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* Table */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.quote}</td>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>
                <button
                  className="btn btn-edit"
                  onClick={() => {
                    setEditId(item.id); // Set current ID for editing
                    setFormData({
                      quote: item.quote,
                      name: item.name,
                      designation: item.designation,
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

