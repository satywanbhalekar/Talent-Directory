import React from 'react';

export function SkillFilter({ skillFilter, setSkillFilter }) {
  return (
    <input
      type="text"
      placeholder="Filter by skill"
      value={skillFilter}
      onChange={(e) => setSkillFilter(e.target.value)}
      className="form-control mb-4"
    />
  );
}
