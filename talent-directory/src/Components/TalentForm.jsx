import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTalent } from '../features/talents/talentsSlice';

export function TalentForm() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.talents.error);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillsArray = skills.split(',').map((s) => s.trim());
    dispatch(addTalent({ name, email, skills: skillsArray, experience: Number(experience) }));
    setName('');
    setEmail('');
    setSkills('');
    setExperience('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow mt-4">
      <div className="mb-3">
        <input
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Experience (years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
      >
        Add Talent
      </button>
      {error && <p className="text-danger mt-2">Error: {error}</p>}
    </form>
  );
}
