import {
  ChatboxOutline,
  HomeOutline,
  ImageOutline,
  PersonOutline,
  SettingsOutline,
} from 'react-ionicons';

import './style.module.scss';

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <ul>
          <li className="item active">
            <a href="#">
              <span className="icon">
                <HomeOutline />
              </span>
              <span className="text">Home</span>
            </a>
          </li>

          <li className="item">
            <a href="#">
              <span className="icon">
                <PersonOutline />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <span className="icon">
                <ChatboxOutline />
              </span>
              <span className="text">Messages</span>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <span className="icon">
                <ImageOutline />
              </span>
              <span className="text">Photos</span>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <span className="icon">
                <SettingsOutline />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
      {/* <script src="script.js"></script> */}
    </>
  );
}
