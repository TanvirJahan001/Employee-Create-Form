import fs from 'fs/promises';
import path from 'path';
import styles from '../styles/Home.module.css';
import EmployeeForm from './components/EmployeeForm.js';


async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'employees.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}


export const metadata = {
    title: "Employee Create Form",
    description: "Next.js employee creation form using the App Router",
};

export default async function Page() {

  const employees = await getData();


  const initialFormData = {
    employeeType: '', employeeNo: '', name: '', father: '', mother: '', mobile: '',
    dob: '', birthCertificateNo: '', nid: '', bloodGroup: '', gender: '', email: '',
    otherContactNo: '', reference: '', age: '', nationality: '', religion: '', maritalStatus: '',
    education: '', experience: '', presentAddress: '', permanentAddress: '', company: '',
    factory: '', productionFloor: '', department: '', section: '', designation: '',
    workStation: '', shift: '', salaryType: '', salary: '', dailySalary: '', state: '',
    joiningDate: '', wagesType: '', status: 'Active', empCode: ''
  };

  return (
    <div className={styles.container}>
      <EmployeeForm employees={employees} initialFormData={initialFormData} />
    </div>
  );
}