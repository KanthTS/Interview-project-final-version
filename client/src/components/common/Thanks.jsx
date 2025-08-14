import React, { useEffect, useContext, useState } from 'react';
import { con } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import './Thanks.css';

function Thanks() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');
  const { getToken } = useAuth();
  const { cUser } = useContext(con);
  const nav = useNavigate();

  function back() {
    nav('/');
  }

  async function accessingdata() {
    const token = await getToken();
    try {
      let res = await axios.get('http://localhost:3000/user-api/user-contributes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.message === "getDetails") {
        setData(res.data.payload);
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      setErr('Error fetching data.');
    }
  }

  useEffect(() => {
    accessingdata();
  }, []);

  return (
    <div className="thanks-container">
      <div className="cards-grid">
        {data.map((item, index) => (
          <div key={item._id || index} className="thanks-card">
            <div className="card-header">
              <h2>{item.topic?.substring(0, 20) || "No Title"}</h2>
              <div className="text-end">
                {item.profileImageUrl && (
                  <img src={item.profileImageUrl} width="40" alt="Profile" />
                )}
                {item.email && (
                  <p>{item.email.substring(0, 15) + "..."}</p>
                )}
              </div>
            </div>

            <div className="card-body">
              {item.question && (
                <p className="lead">{item.question.substring(0, 50) + "..."}</p>
              )}
              {item.role && (
                <p className="text-info">Role: {item.role.substring(0, 30)}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="thank-you-message">
        Thanks for Submitting Your Interview Details {cUser.firstName}
      </h3>

      <button className="back-button" onClick={back}>
        Back to Home
      </button>
    </div>
  );
}

export default Thanks;
