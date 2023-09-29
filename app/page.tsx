"use client";
import "./ProfilePicture.css";

export default function Home() {
  return (
    <main>
      <div className="navbar bg-base-10 mb-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl font-bold">
            Arjun.dev
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div>
              <span>
                <svg
                  color="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="dark-mode"
                >
                  <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="flex 	p-10 m-10 justify-center  space-x-10 ">
        <div>
          <div className="flex flex-col">
            <h1 className="text-5xl text-black font-extrabold">
              Frontend &<br /> Mobile developer 🚀
            </h1>

            <h2 className="text-lg mt-7 font-semibold">
              Hi, I am a software developer from Himachal Pradesh, India. 🗺️
              <br />I specialize in Mobile apps and Web development.
            </h2>
            <div className="flex space-x-2 my-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/arjun-mudgil-650a21183/"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 30 30"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </a>
              <a target="_blank" href="https://www.github.com/Arjun6112">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="avatar">
          <div className="w-80 rounded-full ">
            {/* <div className="hero-img h-28 w-28"></div> */}
            <img
              className="hero-img "
              height={18}
              width={18}
              src="https://pbs.twimg.com/profile_images/1659931155473502209/wqtivq9p_400x400.jpg"
            />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex  m-10 justify-center items-center space-x-4 ">
        <div className="flex mt-10 text-2xl font-bold ">
          Tech Stack |
          <div className="flex flex-wrap ">
            <img
              className="ms-4 mb-3 "
              height={35}
              width={35}
              src="data:image/png;base64,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"
            />

            <img
              className="ms-4 mb-3 me-5"
              height={37}
              width={37}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Rm90t9qi3ptIBVriY-fvb_CMYAOSJbdSZTLAuChpDw&s"
            />
            <img
              className="ms-4 mb-3 "
              height={35}
              width={35}
              src="https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png"
            />
            <img
              className="ms-4 mb-3 me-5"
              height={35}
              width={35}
              src="https://play-lh.googleusercontent.com/qbeCduZblOk80GaY164lw47gIRjXq9QIzSmgFwqQj1PyhNhTWxYR0OqPzm8BumnmJQ=w240-h480-rw"
            />
            <img
              className="ms-4 mb-3 "
              height={35}
              width={35}
              src="https://pbs.twimg.com/media/FwMqYA-WIA0E6Rw.jpg:small"
            />
            <img
              className="ms-4 mb-3 me-5"
              height={35}
              width={35}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtgSjSJjYs33pyOCIJCLyFnD_oGyp8yh_9lv_Tq5oVw&s"
            />

            <img
              className="ms-4 mb-3 "
              height={35}
              width={35}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            />
            <img
              className="ms-4 mb-3 me-5"
              height={35}
              width={35}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            />

            <img
              className="ms-4 mb-3 me-5"
              height={35}
              width={35}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkP3iVSZZ2A7gTp2z7VRbdmebW28iy73NzNSWG4fiN0pHBoxi9F-IKoHsVYPcUGPTfMeU"
            />
            <img
              className="ms-4 mb-3 me-5"
              height={35}
              width={35}
              src="https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png"
            />
            <img
              className="ms-4 mb-3 "
              height={35}
              width={35}
              src="data:image/png;base64,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"
            />
          </div>
        </div>
      </div>

      {/* About Me */}

      {/* <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-extrabold my-4">About Me</h1>
        <div className="card lg:card-side w-200 bg-base-100 shadow-xl">
          <figure>
            <img
              height={400}
              width={400}
              src="https://assets.leetcode.com/users/avatars/avatar_1659589815.png"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* My Projects */}
      {/* <div className="flex flex-col m-10 ">
        <h1 className="text-3xl font-extrabold my-4">My Projects</h1>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://storage.googleapis.com/cms-storage-bucket/images/case_study_part_1_Reflectly.width-635.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-2">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
