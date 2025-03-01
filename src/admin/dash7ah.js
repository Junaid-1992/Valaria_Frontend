import React, { useEffect, useState } from "react";

import adminz from "../img/karc-abc-logo.png";
import Btn from "./btn";
import NewsroomAccountHeadh from "./component_hamza_dashboard/NewsroomAccoutHeadh";
import axios from "axios";
import { baseurl } from "../baseurl";

const Dash7ah = () => {
  const cards = Array.from({ length: 9 }); // Create an array with 8 elements

  const [userdata, setUser] = useState([]);


  useEffect(() => {
   

      fetchUserData();
  
  }, []);


   
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropbtn')) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseurl}/newsroomusers`);
      console.log('response', response)
      setUser(response.data.message);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [verificationFilter, setVerificationFilter] = useState('');
  const [sortFilter, setSortFilter] = useState('Newest');

  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  

  const filteredUsers = userdata
    .filter(user =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(user =>
      filterType === '' || user.stationtype === filterType
    )
    .filter(user =>
      verificationFilter === '' || 
      (verificationFilter === 'Verified' && user.verified_account === 1) ||
      (verificationFilter === 'Not Verified' && user.verified_account !== 1)
    )
    .sort((a, b) => {
      if (sortFilter === 'Newest') {
        return new Date(b.createdAt) - new Date(a.createdAt); // Sort by newest first
      } else if (sortFilter === 'Oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt); // Sort by oldest first
      }  return 0; // No sorting applied if no sort option is selected
    });

    


  return (
    <>
      <section className="ah1">
        <NewsroomAccountHeadh 
            searchTerm= {searchTerm} handleSearchChange= {handleSearchChange}
            filterType= {filterType} setFilterType= {setFilterType}
            verificationFilter= {verificationFilter} setVerificationFilter= {setVerificationFilter}
            sortFilter= {sortFilter} setSortFilter= {setSortFilter}
        />
        <div className="table-container">
          <table id="customers">
            <tr>
              <th>
                ID
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Type
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Status
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Verification
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Join Date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Action
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>
            </tr>
            <tbody>
              {filteredUsers.map((users , index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="gg-td">
                    <div className="admin-dp">
                      <img src={users.Profile ? users.Profile.image :  adminz} alt="" />
                    </div>
                    {users.username}
                  </td>
                  <td> {users.stationtype}</td>
                  <td>
                    <div className="new-online">Online</div>
                  </td>
                  <td>{users.verified_account === 1 ? 'Verified' : 'Not Verified'}</td>

                  {/* <td>{users.createdAt}</td> */}
                  <td>{new Date(users.createdAt).toLocaleDateString('en-CA')}</td>

                  <td>
                    {/* <Btn /> */}
                    <div className="action_setting_icon">
                    <svg xmlns="http://www.w3.org/2000/svg"  onClick={toggleDropdown} className="dropbtn" width="60" height="35" viewBox="0 0 60 35" fill="none">
                      <rect width="60" height="35" rx="10" fill="#F2F2F2" />
                      <path d="M16.6835 7C17.1416 7.03068 17.4898 7.22707 17.7769 7.57074C18.3816 8.29489 19.1635 8.66311 20.1103 8.63243C20.9838 8.60174 21.6924 8.22739 22.2482 7.55232C22.5536 7.18411 22.9323 7 23.4088 7.03068C23.5432 7.03682 23.6837 7.07364 23.8058 7.1166C24.9787 7.54619 26.0415 8.16602 27.0005 8.96996C27.4892 9.38113 27.6175 9.92118 27.3976 10.5656C26.8234 12.2287 27.7641 13.9593 29.4683 14.3582C29.566 14.3827 29.6638 14.395 29.7615 14.4196C30.3235 14.5423 30.7144 14.9535 30.8244 15.5181C31.0626 16.7823 31.0565 18.0404 30.8182 19.3046C30.7083 19.906 30.2624 20.3417 29.6516 20.4399C27.7152 20.7529 26.6829 22.5326 27.3609 24.3798C27.5869 24.9935 27.4342 25.5643 26.9272 25.9877C26.0782 26.6873 25.1497 27.2458 24.1296 27.6692C23.4699 27.9392 22.8896 27.792 22.4376 27.2335C21.2892 25.8036 19.249 25.7115 18.0457 27.0371C17.9479 27.1414 17.8624 27.2642 17.7769 27.3746C17.3982 27.8533 16.8118 28.0313 16.2376 27.8165C15.0464 27.3808 13.9775 26.761 13.0124 25.9509C12.542 25.552 12.4199 24.9506 12.6764 24.343C13.0246 23.5084 13.0185 22.686 12.6092 21.8821C12.1633 21.0045 11.4364 20.489 10.4652 20.3417C9.64055 20.219 9.24961 19.8508 9.12134 19.0284C8.93198 17.8194 8.96863 16.6166 9.20074 15.4199C9.32902 14.7755 9.77493 14.3766 10.4469 14.2907C11.9739 14.0882 13.0429 12.8485 12.9757 11.3143C12.9635 11.0074 12.878 10.6944 12.7864 10.3999C12.5665 9.73708 12.7192 9.17248 13.2689 8.74289C14.1546 8.05555 15.1198 7.50937 16.1765 7.12274C16.3353 7.06137 16.5125 7.04296 16.6835 7ZM20.0064 21.1334C22.0283 21.1334 23.6654 19.4825 23.6654 17.4389C23.6654 15.4322 22.0161 13.7813 20.0187 13.7813C17.9907 13.7813 16.3414 15.4137 16.3353 17.4267C16.3292 19.4764 17.9662 21.1272 20.0064 21.1334Z" fill="#828282" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M51.31 15.8014C51.7005 16.192 51.7005 16.8251 51.31 17.2157L47.2157 21.31C46.8251 21.7005 46.192 21.7005 45.8014 21.31L41.7071 17.2157C41.3166 16.8251 41.3166 16.192 41.7071 15.8014C42.0976 15.4109 42.7308 15.4109 43.1213 15.8014L46.5085 19.1887L49.8958 15.8014C50.2863 15.4109 50.9195 15.4109 51.31 15.8014Z" fill="#828282" />
                    </svg>
                      {/* <div className="action_setting_dropdown" id="myDropdown" className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>>
                        <ul>
                          <li><a href="#">See Profile</a></li>
                          <li><a href="#">See Rating</a></li>
                          <li><a href="#">Action 3</a></li>
                        </ul>
                      </div> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* <div className="Employees-tabs">
        <div className="filter-box ">
          <p>Filter:</p>
          <select name="" id="">
            <option value="" disabled selected>
              Type
            </option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>

          <select name="" id="">
            <option value="" disabled selected>
              Location
            </option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>

          <select name="" id="">
            <option value="" disabled selected>
              Verification
            </option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <p>Sort:</p>

          <select name="" id="">
            <option value="" disabled selected>
              Newest
            </option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
        </div>
      </div> */}

      {/* </div>

    <table id="customers">
  <tr>

    <th>  
    ID
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
    Account
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>
    
    <th>    
    Type
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
    Status
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>   
    Verification 
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
    Join Date
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
     Action
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>


    
  </tr>
  <tbody>
  {cards.map((_, index) => (
  <tr  key={index}>
    <td>#0001</td>
    <td className="gg-td"><div className="admin-dp"><img src={adminz}alt="" /></div>KABC</td>
    <td>TV News</td>
    <td ><div className="new-online">Online</div></td>
    <td>Verified</td>
    <td>June 23, 2022</td>
    <td><Btn/></td>
 
    
  </tr>
  
  ))}
  </tbody>
    </table>

    </section> */}
    </>
  );
};

export default Dash7ah;
