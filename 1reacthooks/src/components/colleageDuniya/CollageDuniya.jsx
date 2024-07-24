import React, { useState, useEffect } from 'react';

const CollegesTable = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [visibleColleges, setVisibleColleges] = useState(10);

  useEffect(() => {
    // Fetch colleges data from your API or dummy JSON
    // Replace this with your actual fetch call
    const fetchColleges = async () => {
      try {
        const response = await fetch('your_api_endpoint');
        const data = await response.json();
        setColleges(data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, []);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom) {
      setVisibleColleges(prevVisibleColleges => prevVisibleColleges + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedColleges = sortBy
    ? filteredColleges.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      })
    : filteredColleges;

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by college name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('rating')}>Rating</th>
            <th onClick={() => handleSort('fees')}>Fees</th>
            <th onClick={() => handleSort('userReview')}>User Review</th>
            <th>Name</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {sortedColleges.slice(0, visibleColleges).map(college => (
            <tr key={college.id}>
              <td>{college.rating}</td>
              <td>{college.fees}</td>
              <td>{college.userReview}</td>
              <td>{college.name}</td>
              {/* Add more columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegesTable;
