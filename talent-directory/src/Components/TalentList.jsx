import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTalents } from '../features/talents/talentsSlice';

export function TalentList({ skillFilter }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.talents);

  useEffect(() => {
    dispatch(fetchTalents(skillFilter));
  }, [dispatch, skillFilter]);

  if (loading) return <p className="text-primary">Loading talents...</p>;
  if (error) return <p className="text-danger">Error loading talents: {error}</p>;

  return (
    <ul className="list-group mt-4">
      {data.map(({ _id, name, email, skills, experience }) => (
        <li
          key={_id}
          className="list-group-item bg-white border rounded shadow-sm mb-3"
        >
          <div className="h5 mb-1">{name}</div>
          <div className="text-muted small">{email}</div>
          <div className="mt-2">
            <span className="fw-medium">Experience:</span> {experience} years
          </div>
          <div className="mt-2">
            <span className="fw-medium">Skills:</span> {skills.join(', ')}
          </div>
        </li>
      ))}
    </ul>
  );
}
