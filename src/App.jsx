import './App.css'
import 'boxicons'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Education from './Components/Education-Section/Education'
import Results from './Components/EducationResults/Results'
import Campus from './Components/MAABCampus/Campus'
import StatisticsRow from './Components/Statistics/Statistics'
import Partner from './Components/PartnerCard/Partner'
import Industry from './Components/IndustrySection/Industry'
import Grand from './Components/GrandSection/Grand'
import Courses from './Components/CoursesSection/Courses'
import EnrollmentCourse from './Components/EnrollmentFormSection/EnrollmentForm'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className={`bg-[#ffffff]`}>
      <Navbar />
      <Header />
      <div className={"w-[90%] sm:w-[70%] md:w-[70] lg:w-[60%] mx-auto"}>
        <Education />
        <Results />
        <StatisticsRow/>
        <Campus />
      </div>
      <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] mx-auto">
        <Partner />
        <Industry />
        <Grand />
        <Courses />
        <EnrollmentCourse/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
