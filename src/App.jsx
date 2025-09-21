import "./App.css";
import { useState } from "react";
import Jobs from "./sample_jobs.json";
import Button from './components/Button';
import InputBox from './components/InputBox';
import JobInfo from './components/JobInfo';

function App() {
  const [showJobs, setShowJobs] = useState(false);
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const jobInfo = [];

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1 className="App-header">
        J*b Finding
      </h1>

      <form onSubmit={handleSubmit}>
        <InputBox 
          className="App-inputBox" 
          htmlFor="job-search" 
          type="text" placeholder="Job Role" 
          onChange={(e) => setTitle(e.target.value)} 
          />
        <InputBox
          className="App-inputBox"
          htmlFor="salary-search"
          type="text"
          placeholder="Salary"
          onChange={(e) => setSalary(e.target.value)}
        />
        <InputBox
          className="App-inputBox"
          htmlFor="location-search"
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <InputBox
          className="App-inputBox"
          htmlFor="company-search"
          type="text"
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />

        <button className="App-button" type="submit" onClick={() => setShowJobs(true)}>
          Submit
        </button>

      </form>

      <div>
        {showJobs && Jobs.map((job) => (
          <JobInfo
            className="App-jobInfo"
            id={job.id}
            title={job.title}
            company={job.company_name}
            location={job.job_location}
            salary={job.max_salary}
            wageType={job.pay_period}
          />
        ))
        }
      </div>
      
    </div>
  )
}

export default App
