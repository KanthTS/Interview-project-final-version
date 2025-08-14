import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContributeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const nav = useNavigate();
  const [err, setErr] = useState('');

  async function postingDetails(obj) {
    obj.contributeId = Date.now();
    obj.isContributeActive = true;
    try {
      let res = await axios.post('http://localhost:3000/user-api/user-contribute', obj);
      let { message } = res.data;
      if (message === "contribute") {
        nav('/thanks');
      } else {
        setErr('No data present');
      }
    } catch (error) {
      setErr('Error submitting the form');
    }
  }

  return (
    <div className="container mt-5">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="mb-3">Contribution Form</h2>
        <p className="mb-5 text-muted">Help others by sharing your interview experience</p>
      </div>

      {/* Form Section */}
      <div className="d-flex justify-content-center">
        <div className="shadow-lg rounded w-50 p-4 bg-white">
          <form onSubmit={handleSubmit(postingDetails)}>
            {/* Question */}
            <div className="mb-3">
              <label htmlFor="question" className="form-label fw-bold">Question</label>
              <input
                type="text"
                className={`form-control ${errors.question ? 'is-invalid' : ''}`}
                id="question"
                placeholder="e.g. What is useState in React?"
                {...register("question", { required: "Question is required" })}
              />
              {errors.question && <div className="invalid-feedback">{errors.question.message}</div>}
            </div>

            {/* Topic */}
            <div className="mb-3">
              <label htmlFor="topic" className="form-label fw-bold">Topic</label>
              <input
                type="text"
                className={`form-control ${errors.topic ? 'is-invalid' : ''}`}
                id="topic"
                placeholder="e.g. React"
                {...register("topic", { required: "Topic is required" })}
              />
              {errors.topic && <div className="invalid-feedback">{errors.topic.message}</div>}
            </div>

            {/* Company */}
            <div className="mb-3">
              <label htmlFor="company" className="form-label fw-bold">Company</label>
              <input
                type="text"
                className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                id="company"
                placeholder="e.g. Meta"
                {...register("company", { required: "Company name is required" })}
              />
              {errors.company && <div className="invalid-feedback">{errors.company.message}</div>}
            </div>

            {/* Role */}
            <div className="mb-3">
              <label htmlFor="role" className="form-label fw-bold">Role</label>
              <input
                type="text"
                className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                id="role"
                placeholder="e.g. Front End Developer"
                {...register("role", { required: "Role is required" })}
              />
              {errors.role && <div className="invalid-feedback">{errors.role.message}</div>}
            </div>

            {/* Submit */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">Post</button>
            </div>

            {/* General Error */}
            {err && <p className="text-danger mt-3 text-center">{err}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContributeForm;
