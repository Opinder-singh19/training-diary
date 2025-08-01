import './App.css';
import { apiUrl, filterData } from './data';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(filterData[0].title); // Default to "All"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data); // assuming data.data contains course categories
      } catch (error) {
        console.error("Something went wrong");
      }
    };

    fetchData();
  }, []);

  // Decide which courses to show based on selected category
  const getFilteredCourses = () => {
    if (!courses) return [];

    return selectedCategory === "All"
      ? Object.values(courses).flat()
      : courses[selectedCategory] || [];
  };

  return (
    <div className="App">
      <Navbar />
      <Filter
        filterData={filterData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Cards courses={getFilteredCourses()} />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
