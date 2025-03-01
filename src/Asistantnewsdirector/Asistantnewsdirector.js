import React from "react";
import { useState, useEffect } from "react";
import Saveshare from "../Popouts/Save_pop_h";
import abcLogo from "../img/abc-logoimg.png";
import {
  RiMapPin2Fill,
  RiMoneyDollarCircleFill,
  RiTimeLine,
  RiMore2Fill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Viewjobdetail from "../Viewjobdetail/Viewjobdetail";
import axios from "axios";
import { baseurl } from "../baseurl";
import { Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiSearchLine,
} from "react-icons/ri";

const Asistantnewsdirector = ({searchTerm , sortOrder ,locationFilter, JOBType }) => {

  const calculateHoursAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - createdDate;
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    return diffInHours;
  };
  const [jobContent, setjobContent] = useState([]);
  const navigate = useNavigate();
  // const jobdetail = () => navigate("/viewjobdetail");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    fetchJobsData();
  }, []);

  const fetchJobsData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getjobs`);
      console.log("xxxxx", response.data.jobs);
      setjobContent(response.data.jobs);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const setJobId = (e) => {


    const user = localStorage.getItem('userData');

    if (user == null) {

      toast.error("To See Details Please Login First")

      return;

    }
    localStorage.setItem("jobId", e);


    navigate("/viewjobdetail");
  };


  const [currentPage, setCurrentPage] = useState(1);
  const visibleCount = 10; // Number of products per page
  const pageLimit = 6; // Number of page numbers to show at a time
  const pageCount = Math.ceil(jobContent.length / visibleCount); // Total number of pages

  // Change page function
  const changePage = (page) => {
    if (page > 0 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  // Get the start and end page for pagination display
  const getPaginationRange = () => {
    const halfPageLimit = Math.floor(pageLimit / 2);
    let start = Math.max(1, currentPage - halfPageLimit);
    let end = Math.min(pageCount, start + pageLimit - 1);

    if (end - start < pageLimit - 1) {
      start = Math.max(1, end - pageLimit + 1);
    }

    return { start, end };
  };

  const { start, end } = getPaginationRange();

  // Calculate starting index of items for current page
  const startIndex = (currentPage - 1) * visibleCount;
  // const displayedProducts = jobContent.slice(startIndex, startIndex + visibleCount);
    
  
  // const filteredJobs = jobContent.filter((job) => {
  //   const matchesSearchTerm = job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesLocation = job.location.toLowerCase().includes(locationFilter.toLowerCase());
  //   const matchesState = job.selectedState.toLowerCase().includes(locationFilter.toLowerCase()); // You might need to adjust this based on your state filter logic.
  //   const matchestype = job.jobType.toLowerCase().includes(JOBType.toLowerCase()); // You might need to adjust this based on your state filter logic.

  //   return matchesSearchTerm && (matchesLocation || matchesState) && matchestype;
  // });

  // const sortedProducts = [...filteredJobs].sort((a, b) => {
  //   if (sortOrder === "oldest") {
  //     return new Date(a.createdAt) - new Date(b.createdAt);  // Oldest first
  //   } else {
  //     return new Date(b.createdAt) - new Date(a.createdAt);  // Newest first
  //   }
  // });




  const displayedProducts = jobContent.slice(startIndex, startIndex + visibleCount);

const filteredJobs = jobContent.filter((job) => {
  const matchesSearchTerm = (job.jobTitle || '').toLowerCase().includes(searchTerm.toLowerCase());
  const matchesLocation = (job.location || '').toLowerCase().includes(locationFilter.toLowerCase());
  const matchesState = (job.selectedState || '').toLowerCase().includes(locationFilter.toLowerCase()); 
  const matchestype = (job.jobType || '').toLowerCase().includes(JOBType.toLowerCase());

  return matchesSearchTerm && (matchesLocation || matchesState) && matchestype;
});

const sortedProducts = [...filteredJobs].sort((a, b) => {
  if (sortOrder === "oldest") {
    return new Date(a.createdAt) - new Date(b.createdAt);  // Oldest first
  } else {
    return new Date(b.createdAt) - new Date(a.createdAt);  // Newest first
  }
});



  return (
    <>
      <ToastContainer />
      {/* {jobContent.map((job, index) => ( */}
      {sortedProducts.map((job, index) => (
        <Col lg={6}>
          <div
            key={job.id}
            onClick={() => setJobId(job.id)}
            className="assistant-news-director-box"
          >
            <div className="assistant-logo-txt-more">
              <div className="assistant-logo-txt">
                <div className="assistant-director-logo">
                  <img src={abcLogo} alt="ABC Logo" />
                </div>
                <div className="assistant-director-txt">
                  <h4>{job.jobTitle}</h4>
                  <h6>{job.jobType}</h6>
                </div>
              </div>
              <div onClick={toggle} className="assistant-more-icon">
                <span>
                  <RiMore2Fill />
                  {isOpen && <Saveshare />}
                </span>
              </div>
            </div>
            <div className="assistant-city-dollar-time">
              <p>
                <RiMapPin2Fill />{job.selectedState} {job.location} 
              </p>
              <p>
                <RiMoneyDollarCircleFill /> ${job.yearlySalary}
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                >
                  <path
                    d="M0.756836 12.5719C0.756836 10.7219 0.756836 8.87199 0.756836 7.01768C0.774288 7.02205 0.787377 7.02205 0.80483 7.02641C3.38776 7.88593 5.9707 8.74546 8.54927 9.60934C8.9245 9.73587 9.29099 9.74024 9.66622 9.61807C12.2099 8.76727 14.7579 7.92084 17.3016 7.0744C17.3539 7.05695 17.4107 7.0395 17.4674 7.02205C17.4717 7.05695 17.4761 7.0744 17.4761 7.09185C17.4761 8.8589 17.4805 10.6303 17.4674 12.3973C17.4674 12.6417 17.4019 12.8991 17.2972 13.1216C16.9307 13.8895 16.3024 14.2516 15.4516 14.2473C11.2326 14.2429 7.01784 14.2473 2.79875 14.2473C2.72458 14.2473 2.64604 14.2473 2.57187 14.2429C1.7647 14.2124 1.04044 13.6365 0.826645 12.8555C0.80483 12.7638 0.783014 12.6679 0.756836 12.5719ZM0.756836 5.90946C0.769925 5.91819 0.787377 5.92692 0.800467 5.93128C3.5012 6.83007 6.20194 7.73322 8.90704 8.62329C9.0423 8.66692 9.21246 8.66256 9.34771 8.61893C12.0135 7.73759 14.6794 6.84752 17.3452 5.96182C17.4543 5.92692 17.4805 5.87456 17.4805 5.76548C17.4761 5.31172 17.4761 4.86233 17.4761 4.40857C17.4761 3.22618 16.6602 2.40592 15.4778 2.40592C14.3521 2.40592 13.2265 2.40592 12.0964 2.40592C12.0354 2.40592 11.9699 2.40592 11.9001 2.40592C11.9001 2.17904 11.9045 1.98707 11.9001 1.79073C11.8957 1.67293 11.8957 1.55076 11.8739 1.43296C11.7343 0.765408 11.1933 0.320375 10.4952 0.316012C9.57459 0.307286 8.65399 0.311649 7.73338 0.316012C7.63739 0.316012 7.53704 0.324738 7.44105 0.342191C6.79096 0.481809 6.35029 1.00974 6.33283 1.67293C6.32411 1.90853 6.33283 2.1485 6.33283 2.40156C6.24557 2.40156 6.18013 2.40156 6.11468 2.40156C4.97156 2.40156 3.82843 2.39719 2.68531 2.40156C1.82142 2.41465 1.09716 2.94258 0.844097 3.75411C0.809193 3.86319 0.783014 3.97226 0.756836 4.08134C0.756836 4.69217 0.756836 5.303 0.756836 5.90946ZM7.72902 1.72092C8.64962 1.72092 9.57023 1.72092 10.5039 1.72092C10.5039 1.94344 10.5039 2.16159 10.5039 2.3972C9.58332 2.3972 8.66708 2.3972 7.72902 2.3972C7.72902 2.16595 7.72902 1.95216 7.72902 1.72092Z"
                    fill="#194D79"
                  />
                </svg>{" "}
                {job.jobType}
              </p>
            </div>
            <ul>
              <li>{job.careerlevel}</li>
              <li>{job.yearofexperience}</li>
              <li>{job.jobDescription}</li>
            </ul>
            <div className="actively-hiring-updated">
              <a href="#">
                <RiCheckboxCircleFill /> Actively Hiring
              </a>
              <p>
                <RiTimeLine /> Updated {calculateHoursAgo(job.createdAt)} hours
                ago
              </p>
            </div>
          </div>
        </Col>
      ))}

   
      <div className="newsletter-pagination-slide">
        <div className="pagination">
          {/* Left Arrow */}
          <a href="#" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
            <RiArrowLeftSLine />
          </a>

          {/* First Page */}
          {start > 1 && (
            <>
              <a href="#" onClick={() => changePage(1)} className={currentPage === 1 ? 'active' : ''}>1</a>
              <span>...</span>
            </>
          )}

          {/* Middle Page Numbers */}
          {Array.from({ length: end - start + 1 }, (_, index) => start + index).map((number) => (
            <a
              href="#"
  
              key={number}
              onClick={() => changePage(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </a>
          ))}

          {/* Ellipsis and Last Page */}
          {end < pageCount && (
            <>
              <span>...</span>
              <a href="#" onClick={() => changePage(pageCount)} className={currentPage === pageCount ? 'active' : ''}>
                {pageCount}
              </a>
            </>
          )}

          {/* Right Arrow */}
          <a href="#" onClick={() => changePage(currentPage + 1)} disabled={currentPage === pageCount}>
            <RiArrowRightSLine />
          </a>
        </div>
      </div>
    </>
  );
};

export default Asistantnewsdirector;
