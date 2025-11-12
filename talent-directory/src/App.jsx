import React, { useState } from 'react';
import { TalentList } from './Components/TalentList';
import { TalentForm } from './Components/TalentForm';
import { SkillFilter } from './Components/SkillFilter';
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Bootstrap import

function App() {
  const [skillFilter, setSkillFilter] = useState('');

  return (
    <div className="container">
      <h1>Talent Directory</h1>

      <div>
        <SkillFilter skillFilter={skillFilter} setSkillFilter={setSkillFilter} />
        <div>
          <TalentForm />
        </div>
        <TalentList skillFilter={skillFilter} />
      </div>
    </div>
  );
}

export default App;
