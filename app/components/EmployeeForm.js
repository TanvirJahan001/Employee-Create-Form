"use client";

import { useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function EmployeeForm({ employees, initialFormData }) {
  const [formData, setFormData] = useState(initialFormData);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fileName, setFileName] = useState('No file chosen');

 
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 1) {
      const filtered = employees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(query.toLowerCase()) ||
          emp.father.toLowerCase().includes(query.toLowerCase()) ||
          (emp.mother && emp.mother.toLowerCase().includes(query.toLowerCase())) ||
          (emp.presentAddress || '').toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else { setSearchResults([]); }
  };
  const handleSelectEmployee = (employee) => {
    const formattedEmployee = {
      ...employee,
      dob: employee.dob ? new Date(employee.dob).toISOString().split('T')[0] : '',
      joiningDate: employee.joiningDate ? new Date(employee.joiningDate).toISOString().split('T')[0] : '',
      presentAddress: employee.presentAddress || '',
      permanentAddress: employee.permanentAddress || '',
    };
    setFormData(formattedEmployee);
    setSearchQuery('');
    setSearchResults([]);
  };
  const handleResetForm = () => {
    setFormData(initialFormData);
    setFileName('No file chosen');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Employee data saved! Check the console for the data.');
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        setFileName(e.target.files[0].name);
    } else {
        setFileName('No file chosen');
    }
  }


  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <button onClick={() => alert('Back clicked!')}>
            <i className="fa-solid fa-arrow-left" style={{ marginRight: '8px' }}></i>
            Back
          </button>
          <button onClick={handleResetForm}>
            <i className="fa-solid fa-arrows-rotate" style={{ marginRight: '8px' }}></i>
            Refresh
          </button>
        </div>
        <h1>EMPLOYEE CREATE</h1>
        <div className={styles.breadcrumbs}>
          <a href="#">Dashboard</a> &gt; <a href="#">HR</a> &gt; <a href="#">Employee</a> &gt; <span>Form</span>
        </div>
      </div>
      
      <main className={styles.mainContent}>
        <div className={styles.formHeader}>Employee Create</div>
        <div className={styles.formBody}>
          <div className={styles.searchContainer}>
            <label>Search Existing Employee (by Name, Father, Mother, or Address)</label>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Start typing to search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchResults.length > 0 && (
              <div className={styles.searchResults}>
                {searchResults.map((emp) => (
                  <div
                    key={emp.employeeNo}
                    className={styles.searchResultItem}
                    onClick={() => handleSelectEmployee(emp)}
                  >
                    <strong>{emp.name}</strong> <span>(Father: {emp.father}, Mobile: {emp.mobile})</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className={styles.formGrid}>
           
            <div className={styles.formGroup}><label htmlFor="employeeType">Employee Type</label><select id="employeeType" name="employeeType" value={formData.employeeType || ''} onChange={handleFormChange}><option>Select</option><option>Wages</option><option>Salary</option></select></div>
            <div className={styles.formGroup}><label htmlFor="employeeNo">Employee No</label><input type="text" id="employeeNo" name="employeeNo" value={formData.employeeNo || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="name">Name</label><input type="text" id="name" name="name" value={formData.name || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="father">Father Name</label><input type="text" id="father" name="father" value={formData.father || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="mother">Mother Name</label><input type="text" id="mother" name="mother" value={formData.mother || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="mobile">Mobile</label><input type="tel" id="mobile" name="mobile" value={formData.mobile || ''} onChange={handleFormChange} /></div>

           
            <div className={styles.formGroup}><label htmlFor="dob">Date Of Birth</label><input type="date" id="dob" name="dob" value={formData.dob || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="birthCertificateNo">Birth Certificate No</label><input type="text" id="birthCertificateNo" name="birthCertificateNo" value={formData.birthCertificateNo || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="nid">NID or SMART ID</label><input type="text" id="nid" name="nid" value={formData.nid || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="bloodGroup">Blood Group</label><input type="text" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="gender">Gender</label><select id="gender" name="gender" value={formData.gender || ''} onChange={handleFormChange}><option>Select</option><option>Male</option><option>Female</option><option>Other</option></select></div>
            <div className={styles.formGroup}><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email || ''} onChange={handleFormChange} /></div>

            <div className={styles.formGroup}><label htmlFor="otherContactNo">Other Contact No</label><input type="tel" id="otherContactNo" name="otherContactNo" value={formData.otherContactNo || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="reference">Reference</label><input type="text" id="reference" name="reference" value={formData.reference || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="age">Age</label><input type="number" id="age" name="age" value={formData.age || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="nationality">Nationality</label><input type="text" id="nationality" name="nationality" value={formData.nationality || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="religion">Religion</label><input type="text" id="religion" name="religion" value={formData.religion || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="maritalStatus">Marital Status</label><input type="text" id="maritalStatus" name="maritalStatus" value={formData.maritalStatus || ''} onChange={handleFormChange} /></div>

       
            <div className={styles.formGroup}><label htmlFor="education">Education Qualification</label><textarea id="education" name="education" value={formData.education || ''} onChange={handleFormChange} /></div>
            <div className={styles.formGroup}><label htmlFor="experience">Experience</label><textarea id="experience" name="experience" value={formData.experience || ''} onChange={handleFormChange} /></div>
            <div className={`${styles.formGroup} ${styles.colSpan2}`}><label htmlFor="presentAddress">Present Address</label><textarea id="presentAddress" name="presentAddress" placeholder="present address" value={formData.presentAddress || ''} onChange={handleFormChange}></textarea></div>
            <div className={`${styles.formGroup} ${styles.colSpan2}`}><label htmlFor="permanentAddress">Permanent Address</label><textarea id="permanentAddress" name="permanentAddress" placeholder="permanent address" value={formData.permanentAddress || ''} onChange={handleFormChange}></textarea></div>

            
            <div className={styles.colSpan4}></div> 
            <div className={`${styles.formGroup} ${styles.photoGroup}`}>
                <label>Photo</label>
                <div className={styles.photoContainer}>
                    <div className={styles.photoUploadWrapper}>
                        <input type="file" id="photo" name="photo" onChange={handleFileChange} />
                        <div className={styles.photoUploadDisplay}>
                            <span>Choose File</span>
                            <span>{fileName}</span>
                        </div>
                    </div>
                    <div className={styles.photoPreview}>
                        <i className="fa-solid fa-user" style={{ fontSize: '45px', color: '#adb5bd' }}></i>
                    </div>
                </div>
            </div>

           
            <div className={styles.formGroup}><label>Company</label><select name="company" value={formData.company || ''} onChange={handleFormChange}><option>Select</option><option>ABC Textiles Ltd.</option></select></div>
            <div className={styles.formGroup}><label>Factory</label><select name="factory" value={formData.factory || ''} onChange={handleFormChange}><option>Select</option><option>Main Factory</option></select></div>
            <div className={styles.formGroup}><label>Production Floor</label><select name="productionFloor" value={formData.productionFloor || ''} onChange={handleFormChange}><option>Select</option></select></div>
            <div className={styles.formGroup}><label>Department</label><input type="text" name="department" value={formData.department || ''} onChange={handleFormChange}/></div>
            <div className={styles.formGroup}><label>Section</label><input type="text" name="section" value={formData.section || ''} onChange={handleFormChange}/></div>
            <div className={styles.formGroup}><label>Designation</label><select name="designation" value={formData.designation || ''} onChange={handleFormChange}><option>Select</option></select></div>

            
            <div className={styles.formGroup}><label>Work Station</label><select name="workStation" value={formData.workStation || ''} onChange={handleFormChange}><option>Select</option></select></div>
            <div className={styles.formGroup}><label>Shift</label><select name="shift" value={formData.shift || ''} onChange={handleFormChange}><option>Select</option></select></div>
            <div className={styles.formGroup}><label>Salary Type</label><select name="salaryType" value={formData.salaryType || ''} onChange={handleFormChange}><option>Select</option><option>Wages</option><option>Monthly</option></select></div>
            <div className={styles.formGroup}><label>Salary</label><input type="text" name="salary" value={formData.salary || ''} onChange={handleFormChange}/></div>
            <div className={styles.formGroup}><label>Daily Salary</label><input type="text" name="dailySalary" value={formData.dailySalary || ''} onChange={handleFormChange}/></div>
            <div className={styles.formGroup}><label>State</label><select name="state" value={formData.state || ''} onChange={handleFormChange}><option>Select</option></select></div>
            
           
            <div className={styles.formGroup}><label>Joining Date</label><input type="date" name="joiningDate" value={formData.joiningDate || ''} onChange={handleFormChange}/></div>
            <div className={styles.formGroup}><label>Wages Type</label><select name="wagesType" value={formData.wagesType || ''} onChange={handleFormChange}><option>Select</option><option>Wages</option></select></div>
            <div className={styles.formGroup}><label>Status</label><select name="status" value={formData.status || 'Active'} onChange={handleFormChange}><option>Active</option><option>Inactive</option></select></div>
            <div className={styles.formGroup}><label>Emp Code</label><input type="text" name="empCode" value={formData.empCode || ''} onChange={handleFormChange}/></div>
            <div className={styles.colSpan2}></div> 

         
            <div className={`${styles.fullWidth} ${styles.saveButtonContainer}`}>
                <button type="submit" className={styles.saveButton}>Save</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
