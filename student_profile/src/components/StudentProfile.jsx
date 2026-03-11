import React  from "react";
import './StudentProfile.css';

const StudentProfile = () => {

    const student = {
    name: "Janvi Zinzuvadiya",
    shortName: "jnv",
    education: "Master of Computer Applications (MCA)",
    semester: "Semester 2",
    skills: ["Java", "Python", "PHP", "Laravel", "React", "Ubuntu/Linux", "Git"],
    currentFocus: "Setting up development environments and mastering full-stack tools."
  };

 return (

    <div className="container mt-5">
        <div className="card shadow border-0">
        <div className="card-body text-center">
          <h2 className="display-6">{student.name}</h2>
          <p className="text-muted">({student.shortName})</p>
          <hr />
          <p><strong>Course:</strong> {student.education}</p>
          <p><strong>Current:</strong> {student.semester}</p>
          
          <div className="mt-4">
            <h5>Technical Toolkit</h5>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {student.skills.map((skill, index) => (
                <span key={index} className="badge bg-primary p-2">{skill}</span>
              ))}
            </div>
          </div>
          
          <p className="mt-4 italic">"{student.currentFocus}"</p>
        </div>
      </div>
    </div>

    );
}
export default StudentProfile;