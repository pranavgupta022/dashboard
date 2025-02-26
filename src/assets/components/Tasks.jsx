import React, { useState } from "react";

const Task = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", position: "Manager" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", position: "Senior Developer" },
    { id: 3, name: "Pranav Gupta", email: "pranavgupta022@gmail.com", position: "Developer Trainee" },
    { id: 4, name: "Amit Kumar", email: "amit@example.com", position: "Team Lead" },
    { id: 5, name: "Sara Lee", email: "sara@example.com", position: "Designer" },
    { id: 6, name: "David Warner", email: "david@example.com", position: "Marketing Manager" },
    { id: 7, name: "Elena Gomez", email: "elena@example.com", position: "HR" },
    { id: 8, name: "Mark Ruffalo", email: "mark@example.com", position: "Finance Head" },
  ]);

  const [formData, setFormData] = useState({ id: "", name: "", email: "", position: "" });
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdate = (e) => {
    e.preventDefault();
    if (formData.id) {
      setEmployees(employees.map(emp => (emp.id === formData.id ? formData : emp)));
    } else {
      setEmployees([...employees, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: "", name: "", email: "", position: "" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.email.toLowerCase().includes(search.toLowerCase()) ||
    emp.position.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEmployees = filteredEmployees.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Add Employee</button>
      </div>

      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Position</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map(emp => (
            <tr key={emp.id} className="text-center">
              <td className="border p-3">{emp.name}</td>
              <td className="border p-3">{emp.email}</td>
              <td className="border p-3">{emp.position}</td>
              <td className="border p-3 flex justify-center gap-2">
                <button onClick={() => { setFormData(emp); setShowModal(true); }} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(emp.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-md flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">{formData.id ? "Edit" : "Add"} Employee</h2>
            <form onSubmit={handleCreateOrUpdate} className="space-y-3">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="border p-2 w-full rounded" required />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="border p-2 w-full rounded" required />
              <input type="text" name="position" value={formData.position} onChange={handleInputChange} placeholder="Position" className="border p-2 w-full rounded" required />
              <div className="flex justify-between">
                <button type="submit" className="bg-blue-500 text-white py-2 rounded w-1/2">{formData.id ? "Update" : "Add"}</button>
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-400 text-white py-2 rounded w-1/2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
