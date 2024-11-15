const DirectorInfoForm = () => {
  return (
    <div class="container">
      <div class="my--container--h  mx-auto">
        <div class="row">
          <div class="col">
            <div class=" d-flex align-items-center director--info--popup--head--cont">
              <div className="info--popup--title--alt--h">
                <div className="info--popup--title  d-flex align-items-center">
                  <div className="info--popup--img--alt ">
                    <img src={require("../../img/admin.png")} alt="" />
                  </div>
                  <div className="user--info--popup--title--text">
                    <div className="info--popup--title--heading d-flex align-items-center">
                      <h1>Brooklyn Simmons </h1>
                    </div>
                    <div className="info--popup--title--text--h d-flex align-items-center">
                      <p>News Director</p>
                    </div>
                  </div>
                </div>
                <div className="director--info--popup--btn--h">
                  <a href="">See Profile</a>
                </div>
              </div>
              <div class="info--close--h info--close--h--alt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M18.2522 0.636916C17.4041 -0.211193 16.029 -0.211191 15.1809 0.636918L9.44463 6.37319L3.70752 0.636082C2.85942 -0.212027 1.48436 -0.212027 0.636252 0.636081C-0.211857 1.48419 -0.211855 2.85925 0.636254 3.70736L6.37336 9.44446L0.636082 15.1817C-0.212027 16.0298 -0.212027 17.4049 0.636081 18.253C1.48419 19.1011 2.85925 19.1011 3.70736 18.253L9.44463 12.5157L15.1811 18.2522C16.0292 19.1003 17.4042 19.1003 18.2523 18.2522C19.1005 17.4041 19.1005 16.029 18.2523 15.1809L12.5159 9.44446L18.2522 3.70819C19.1003 2.86008 19.1003 1.48502 18.2522 0.636916Z"
                    fill="#828282"
                  />
                </svg>
              </div>
            </div>

            <div className="director--popup--cont--2--alt">
              <div className="col-lg-12 pt-3 director--info--heading--h">
                <h3>Contact Info</h3>
              </div>

              <div className="col-lg-12 mb-4 pt-3">
                <div className="info--link--h d-flex align-items-center">
                  <div className="info--link--img d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="23"
                      viewBox="0 0 30 23"
                      fill="none"
                    >
                      <path
                        d="M0.0683594 6.63617C1.95366 7.79709 3.84753 8.95801 5.73283 10.1189C8.43224 11.7823 11.1402 13.4458 13.8396 15.1265C14.5595 15.577 15.2365 15.5683 15.9563 15.1265C20.4382 12.3541 24.92 9.59912 29.4105 6.83543C29.5048 6.77478 29.6076 6.71414 29.7618 6.6275C29.7618 6.76612 29.7618 6.87008 29.7618 6.96538C29.7618 10.6128 29.7618 14.2515 29.7618 17.8988C29.7618 20.5846 27.868 22.4992 25.1857 22.4992C18.8614 22.4992 12.5285 22.4992 6.20415 22.4992C5.36434 22.4992 4.51595 22.5339 3.69328 22.4039C1.82512 22.118 0.411141 20.6105 0.128346 18.7479C0.119777 18.6959 0.094068 18.6439 0.0683594 18.5919C0.0683594 14.6067 0.0683594 10.6214 0.0683594 6.63617ZM4.60165 0.381048C2.51925 0.389711 0.81391 1.6546 0.274029 3.57792C0.214042 3.78584 0.24832 3.88981 0.42828 4.00243C5.20152 6.93073 9.96619 9.86769 14.7223 12.8046C14.8765 12.8999 14.9879 12.8913 15.1336 12.796C15.7078 12.4321 16.2819 12.0769 16.8647 11.7217C21.0209 9.14861 25.1771 6.58418 29.3419 4.01976C29.5562 3.88981 29.6247 3.75985 29.5219 3.5346C29.4019 3.25736 29.3248 2.9628 29.1705 2.70289C28.305 1.15211 26.9682 0.389711 25.2028 0.381048C21.775 0.372384 18.3472 0.381048 14.9108 0.381048C11.4744 0.381048 8.03804 0.381048 4.60165 0.381048Z"
                        fill="#194D79"
                      />
                    </svg>
                  </div>
                  <div className="info--link--text">
                    <h1>Email</h1>
                    <a href="">email@address.com</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4 pt-3">
                <div className="info--link--h d-flex align-items-center">
                  <div className="info--link--img d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M5.58996 0.413574C6.08371 0.523298 6.55918 0.669596 6.95541 1.00486C7.01027 1.05363 7.07123 1.0963 7.11999 1.14507C8.24161 2.26669 9.36933 3.38221 10.4849 4.50992C11.3139 5.35114 11.4541 6.50324 10.875 7.46027C10.6129 7.89307 10.241 8.19786 9.76555 8.36854C9.07673 8.61847 8.5464 9.03907 8.24771 9.7218C8.05264 10.179 8.02217 10.6423 8.15018 11.1238C8.48544 12.3795 9.17426 13.4341 10.0155 14.3972C11.0213 15.5554 12.1734 16.5369 13.5632 17.2196C14.1423 17.5061 14.7397 17.7499 15.4102 17.6585C16.2941 17.5366 16.9707 17.1038 17.3182 16.2625C17.5437 15.7078 17.8241 15.2141 18.3606 14.8971C19.2323 14.3851 20.3356 14.4521 21.0854 15.1348C21.7681 15.7566 22.4143 16.4271 23.0665 17.0855C23.6639 17.6829 24.2857 18.262 24.8404 18.902C25.5414 19.7006 25.5597 20.9563 24.944 21.8219C24.816 21.9987 24.6758 22.1693 24.5234 22.3217C23.865 22.9862 23.1884 23.6323 22.5423 24.315C21.8534 25.0404 21.0061 25.3574 20.0369 25.4001C18.9945 25.4428 18.0009 25.2111 17.0256 24.882C15.1054 24.2297 13.3742 23.2239 11.7345 22.0535C9.01577 20.109 6.63233 17.8109 4.58416 15.1775C3.07241 13.2391 1.78011 11.1665 0.981563 8.82572C0.634105 7.80773 0.39637 6.75926 0.451232 5.66812C0.499998 4.71718 0.810882 3.88206 1.52409 3.21153C2.12147 2.64462 2.70057 2.06552 3.26747 1.46814C3.76732 0.943905 4.30985 0.511106 5.05353 0.413574C5.23031 0.413574 5.40708 0.413574 5.58996 0.413574Z"
                        fill="#194D79"
                      />
                    </svg>
                  </div>
                  <div className="info--link--text">
                    <h1>Phone</h1>
                    <a href="">1234 - 33341413</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4 pt-3">
                <div className="info--link--h d-flex align-items-center">
                  <div className="info--link--img d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                    >
                      <path
                        d="M0.982422 14.7792C0.982422 14.2403 0.982422 13.6907 0.982422 13.1518C1.00357 13.0566 1.01414 12.9615 1.03528 12.8664C1.11986 12.264 1.17272 11.6617 1.29958 11.0699C2.02905 7.73037 3.74172 4.9827 6.46929 2.92194C9.86291 0.353913 13.6794 -0.502094 17.8448 0.364481C21.175 1.06197 23.8814 2.80569 25.9535 5.50053C28.1948 8.40673 29.1251 11.7145 28.7762 15.3605C28.4908 18.3089 27.349 20.9192 25.3826 23.1491C23.2259 25.5903 20.5406 27.1121 17.3267 27.6828C16.7981 27.7779 16.2695 27.8307 15.7409 27.9047C15.2018 27.9047 14.652 27.9047 14.1129 27.9047C14.0389 27.8941 13.9754 27.8624 13.9014 27.8624C11.7236 27.7039 9.68318 27.0804 7.82251 25.9496C4.21746 23.7409 1.98676 20.5494 1.21501 16.3856C1.09871 15.836 1.05643 15.3076 0.982422 14.7792ZM20.2552 10.6154C20.4561 12.8664 20.4455 15.0751 20.2552 17.305C21.9996 17.5797 23.6805 17.9602 25.3192 18.6471C26.6513 15.5084 26.6513 12.4014 25.3192 9.2733C23.6805 9.96022 21.9996 10.3407 20.2552 10.6154ZM9.57746 10.6154C7.83308 10.3407 6.15213 9.96022 4.55576 9.29444C3.20254 11.482 3.21312 16.8083 4.56633 18.6365C6.16271 17.9708 7.85423 17.5903 9.57746 17.3155C9.38717 15.0751 9.38717 12.8664 9.57746 10.6154ZM12.0936 16.9774C13.9966 16.9774 15.8678 16.9774 17.7391 16.9774C17.9082 14.9695 17.9082 12.9404 17.7391 10.9536C15.8361 10.9536 13.9754 10.9536 12.0936 10.9536C11.9244 12.9615 11.9244 14.9695 12.0936 16.9774ZM17.4219 8.37502C17.4007 8.25877 17.3796 8.1848 17.369 8.12139C17.1153 6.77926 16.7981 5.44769 16.2167 4.20066C15.9735 3.67226 15.6987 3.165 15.2546 2.76342C14.9903 2.52035 14.8318 2.52035 14.578 2.76342C14.3983 2.9325 14.2397 3.12273 14.1129 3.32352C13.1297 4.85588 12.7596 6.5996 12.4213 8.37502C14.0917 8.50184 15.7409 8.50184 17.4219 8.37502ZM12.4002 19.5137C12.4636 19.8413 12.5165 20.1055 12.5693 20.3591C12.8336 21.7118 13.2037 23.0434 13.8803 24.2482C14.0811 24.5969 14.356 24.9034 14.6203 25.2098C14.7895 25.4001 15.0115 25.4001 15.1912 25.2098C15.3709 25.0196 15.5612 24.8294 15.7092 24.618C16.333 23.688 16.6819 22.6418 16.9673 21.5744C17.1364 20.9192 17.2739 20.2429 17.4325 19.5137C15.7409 19.5137 14.0917 19.5137 12.4002 19.5137ZM5.83497 7.08573C7.16705 7.59299 8.50969 7.88889 9.85234 8.08969C10.0532 7.23368 10.2118 6.40937 10.4444 5.59564C10.6664 4.7819 10.9624 3.99987 11.2373 3.18614C9.05944 3.94703 7.27277 5.2469 5.83497 7.08573ZM5.83497 20.8453C7.26219 22.6947 9.04886 23.984 11.2901 24.766C10.5712 23.1491 10.1801 21.5216 9.88405 19.8307C8.49912 20.0421 7.15647 20.338 5.83497 20.8453ZM18.532 24.766C20.7732 23.984 22.5599 22.6841 23.9871 20.8453C22.655 20.338 21.323 20.0421 19.938 19.8307C19.642 21.5216 19.2509 23.1596 18.532 24.766ZM18.5954 3.18614C18.8703 4.01044 19.1557 4.79247 19.3777 5.59564C19.6103 6.40937 19.7689 7.24425 19.9697 8.08969C21.323 7.87833 22.6762 7.59299 23.9871 7.07516C22.5599 5.2469 20.7732 3.94703 18.5954 3.18614Z"
                        fill="#194D79"
                      />
                    </svg>
                  </div>
                  <div className="info--link--text">
                    <h1>Website</h1>
                    <a href="">socialmedialink.com</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4 pt-3">
                <div className="info--link--h d-flex align-items-center">
                  <div className="info--link--img d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M14.4229 25.1596C12.7097 25.1596 11.0286 25.1596 9.32345 25.1596C9.32345 19.6902 9.32345 14.2207 9.32345 8.72704C10.9321 8.72704 12.5488 8.72704 14.2138 8.72704C14.2138 9.45899 14.2138 10.1829 14.2138 10.9148C14.5677 10.5046 14.8653 10.0864 15.2273 9.74051C16.1281 8.88791 17.2301 8.45357 18.4527 8.34096C19.5064 8.24444 20.56 8.31683 21.5815 8.63857C23.2787 9.16943 24.2841 10.3598 24.7828 12.0329C25.1126 13.1348 25.2332 14.277 25.2413 15.4191C25.2654 18.6043 25.2574 21.7814 25.2574 24.9666C25.2574 25.0068 25.2493 25.047 25.2413 25.1114C23.5522 25.1114 21.8631 25.1114 20.1337 25.1114C20.1337 24.9907 20.1337 24.8781 20.1337 24.7575C20.1337 22.0388 20.1418 19.3202 20.1257 16.6015C20.1257 16.0304 20.0694 15.4593 19.9648 14.8963C19.6511 13.2072 18.5572 12.62 16.9727 12.8131C15.549 12.99 14.7688 13.8265 14.5516 15.3789C14.4712 15.9419 14.439 16.5211 14.431 17.0841C14.4149 19.6499 14.4229 22.2238 14.4229 24.7896C14.4229 24.9023 14.4229 25.0229 14.4229 25.1596ZM6.08197 8.719C4.37678 8.719 2.69571 8.719 1.00661 8.719C1.00661 14.2046 1.00661 19.6821 1.00661 25.1596C2.7118 25.1596 4.39286 25.1596 6.08197 25.1596C6.08197 19.658 6.08197 14.1885 6.08197 8.719ZM3.51614 0.49868C1.89942 0.514767 0.572266 1.84997 0.572266 3.45864C0.572266 5.09949 1.93159 6.45881 3.55635 6.45077C5.17307 6.44273 6.50023 5.0834 6.49218 3.4506C6.48414 1.80975 5.14894 0.482593 3.51614 0.49868Z"
                        fill="#194D79"
                      />
                    </svg>
                  </div>
                  <div className="info--link--text">
                    <h1>Linkedin</h1>
                    <a href="">socialmedialink.com</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4 pt-3">
                <div className="info--link--h d-flex align-items-center">
                  <div className="info--link--img d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="23"
                      viewBox="0 0 28 23"
                      fill="none"
                    >
                      <path
                        d="M27.3248 2.69968C26.3275 3.15529 25.2648 3.45728 24.1568 3.60391C25.2966 2.89519 26.1666 1.78149 26.5756 0.439113C25.5129 1.09895 24.3395 1.56503 23.0891 1.82513C22.08 0.706192 20.6419 0.0131836 19.073 0.0131836C16.029 0.0131836 13.5784 2.58622 13.5784 5.74054C13.5784 6.1944 13.6153 6.6308 13.7058 7.04626C9.13486 6.81409 5.09023 4.53258 2.37313 1.05706C1.89877 1.91416 1.62052 2.89519 1.62052 3.95129C1.62052 5.9343 2.60109 7.69213 4.06272 8.70983C3.17937 8.69237 2.31279 8.42529 1.57862 8.0046C1.57862 8.02206 1.57862 8.04475 1.57862 8.06744C1.57862 10.8499 3.48444 13.1611 5.98363 13.6936C5.53609 13.821 5.04832 13.8821 4.54211 13.8821C4.19011 13.8821 3.83476 13.8611 3.5012 13.7843C4.21358 16.0519 6.23506 17.7189 8.63871 17.7731C6.76809 19.297 4.39293 20.2152 1.82166 20.2152C1.37077 20.2152 0.938315 20.1942 0.505859 20.1366C2.94136 21.7722 5.82775 22.7062 8.94042 22.7062C19.0579 22.7062 24.5893 13.9781 24.5893 6.4126C24.5893 6.15949 24.5809 5.9151 24.5692 5.67246C25.6604 4.86599 26.5772 3.85877 27.3248 2.69968Z"
                        fill="#194D79"
                      />
                    </svg>
                  </div>
                  <div className="info--link--text">
                    <h1>Twitter</h1>
                    <a href="">socialmedialink.com</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 pt-3">
                <div className="info--link--h d-flex align-items-center">
                  <div className="info--link--img d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="27"
                      viewBox="0 0 13 27"
                      fill="none"
                    >
                      <path
                        d="M12.4302 0.147187L9.56869 0.141602C6.35387 0.141602 4.2763 2.73451 4.2763 6.74772V9.79358H1.39917C1.15055 9.79358 0.949219 10.0388 0.949219 10.3412V14.7543C0.949219 15.0568 1.15078 15.3017 1.39917 15.3017H4.2763V26.4373C4.2763 26.7398 4.47763 26.9847 4.72625 26.9847H8.4801C8.72871 26.9847 8.93004 26.7395 8.93004 26.4373V15.3017H12.2941C12.5427 15.3017 12.744 15.0568 12.744 14.7543L12.7454 10.3412C12.7454 10.196 12.6979 10.0569 12.6136 9.95416C12.5294 9.85139 12.4146 9.79358 12.2952 9.79358H8.93004V7.21157C8.93004 5.97055 9.17315 5.34054 10.5021 5.34054L12.4298 5.3397C12.6781 5.3397 12.8795 5.09451 12.8795 4.79236V0.694532C12.8795 0.392654 12.6784 0.147745 12.4302 0.147187Z"
                        fill="#194D79"
                      />
                    </svg>
                  </div>
                  <div className="info--link--text">
                    <h1>Facebook</h1>
                    <a href="">socialmedialink.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="col-lg-12 pt-3 director--info--heading--h director--info--heading--h--alt">
                <h3>Work History</h3>
              </div>

              <div className="col-lg-12">
                <div className="info--popup--title info--popup--title--alt d-flex align-items-center">
                  <div className="director--info--popup--img">
                    <img src={require("../../img/kabc.png")} alt="" />
                  </div>
                  <div className="director--popup--title--text">
                    <div className="info--popup--title--heading d-flex align-items-center">
                      <h2>Office Name </h2>
                    </div>
                    <div className="info--popup--title--text--h d-flex align-items-center">
                      <p>14 months</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="director--info--list--ul">
                    <li className="director--info--list--li ">
                      <div className="d-flex justify-content-between">
                        <div className="director--popup--title--text">
                          <div className="info--popup--title--heading info--popup--title--heading--alt d-flex align-items-center">
                            <h2>Job Title (Current) </h2>
                          </div>
                          <div className="info--popup--title--text--h d-flex align-items-center">
                            <p>Fulltime</p>
                          </div>
                        </div>

                        <div className="director--popup--title--text director--popup--title--text--2">
                          <div className="info--popup--title--heading info--popup--title--heading--alt d-flex align-items-center">
                            <h3>Oct 2021 - Apr 2022 </h3>
                          </div>
                          <div className="info--popup--title--text--h d-flex align-items-center">
                            <p>7 months</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="director--info--list--li ">
                      <div className="d-flex justify-content-between">
                        <div className="director--popup--title--text">
                          <div className="info--popup--title--heading info--popup--title--heading--alt d-flex align-items-center">
                            <h2>Job Title (Current) </h2>
                          </div>
                          <div className="info--popup--title--text--h d-flex align-items-center">
                            <p>Fulltime</p>
                          </div>
                        </div>

                        <div className="director--popup--title--text director--popup--title--text--2">
                          <div className="info--popup--title--heading info--popup--title--heading--alt d-flex align-items-center">
                            <h3>Oct 2021 - Apr 2022 </h3>
                          </div>
                          <div className="info--popup--title--text--h d-flex align-items-center">
                            <p>7 months</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="info--popup--title info--popup--title--alt d-flex align-items-center">
                  <div className="director--info--popup--img">
                    <img src={require("../../img/kabc.png")} alt="" />
                  </div>
                  <div className="director--popup--title--text">
                    <div className="info--popup--title--heading d-flex align-items-center">
                      <h2>Office Name </h2>
                    </div>
                    <div className="info--popup--title--text--h d-flex align-items-center">
                      <p>14 months</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="director--info--list--ul">
                    <li className="director--info--list--li director--info--list--li--alt ">
                      <div className="d-flex justify-content-between">
                        <div className="director--popup--title--text">
                          <div className="info--popup--title--heading info--popup--title--heading--alt d-flex align-items-center">
                            <h2>Job Title (Current) </h2>
                          </div>
                          <div className="info--popup--title--text--h d-flex align-items-center">
                            <p>Fulltime</p>
                          </div>
                        </div>

                        <div className="director--popup--title--text director--popup--title--text--2">
                          <div className="info--popup--title--heading info--popup--title--heading--alt d-flex align-items-center">
                            <h3>Oct 2021 - Apr 2022 </h3>
                          </div>
                          <div className="info--popup--title--text--h d-flex align-items-center">
                            <p>7 months</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DirectorInfoForm;
