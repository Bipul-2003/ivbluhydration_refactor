import React, { useState, useEffect } from "react";
import '../css/Appointment.css';

const BookAppintmentPage = (data) => {
  const [baseUrl, setBaseUrl] = useState('http://localhost:9999/prebook/api/v1')
  const [formData, setFormData] = useState({
    service: data.selectedService,
    name: '',
    email: '',
    phno: '',
    date: '',
    slot: null,
    patient: {
        "userId":2,
        "role":"USER"
    },
    nurse:null,
    status:"",
    isVisited:false,

  });

        const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch time slots from the API
    const fetchTimeSlots = async () => {
      try {
        const response = await fetch(baseUrl+"/slots"); // Replace with your actual API endpoint
       
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTimeSlots(data);
        setLoading(false);
        // console.log(data)
      } catch (error) {
        // console.log(response.json())
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTimeSlots();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSlotChange = (event) => {
    const timeSlot = JSON.parse(event.target.value);
    // setSelectedTime(timeSlot);
    // const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      slot: timeSlot
    }));
  };



  const bookAppointment = (e) => {
    e.preventDefault();
    
    let array = [formData]
    console.log(array)
    saveAppointment(formData);
    // localStorage.setItem("appointments":)
    // Handle form submission, e.g., send data to a server
    // console.log('Form submitted:', formData);
  };
  const saveAppointment = async (formData) => {
    try {
      const response = await fetch(baseUrl+"/appointment",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }); // Replace with your actual API endpoint
     
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLoading(false);
      alert(data.msg)
      console.log(data)
    } catch (error) {
      console.log(response.json())
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="form-container text-xs p-3 bg-primary/10 border border-primary rounded-lg">
      <h1>Book Your Appointment!</h1>
      <form onSubmit={bookAppointment}>
        <div className="form-grid">
          <div className="form-group">
            <label>
              Service:&nbsp;&nbsp;
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                name="service"
                required
                className="styled-select p-2"
                disabled={true}
              >
                <option value="">-Select Service-</option>
                <option value="1">HYDRATION BOOST</option>
                <option value="2">ATHLETIC RECOVERY</option>
                <option value="3">MYERS COCKTAIL</option>
                <option value="4">HEALTH BOOST</option>
                <option value="5">HYDROGO</option>
                <option value="6">HYDROGO MAX</option>
                <option value="7">BLEND I</option>
                <option value="8">BLEND II</option>
                <option value="9">BLEND III</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Name:&nbsp;
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:&nbsp;
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone:&nbsp;
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Date:&nbsp;
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Time:&nbsp;
              <select
                id="slot"
                value={JSON.stringify(formData.slot)}
                onChange={handleSlotChange}
                name="slot"
                required
                className="styled-select p-2"
                disabled={loading || error}
              >
                <option value="">-Select Time-</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={JSON.stringify(time)}>
                    {time.time}&nbsp;{time.maridian}
                  </option>
                ))}
              </select>
              {loading && <p>Loading time slots...</p>}
              {error && <p>Error loading time slots: {error}</p>}
            </label>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default BookAppintmentPage;
