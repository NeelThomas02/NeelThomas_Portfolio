import { FaHome, FaUser, FaClipboardList, FaCode, FaEnvelope } from "react-icons/fa"; // Importing FontAwesome icons

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#home">
            <FaHome size={24} />
          </a>
        </li>
        <li>
          <a href="#about">
            <FaUser size={24} />
          </a>
        </li>
        <li>
          <a href="#projects">
            <FaClipboardList size={24} />
          </a>
        </li>
        <li>
          <a href="#skills">
            <FaCode size={24} />
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
}
