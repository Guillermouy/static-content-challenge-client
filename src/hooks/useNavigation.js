import { useNavigate } from "react-router-dom";
import { API_CONFIG } from "../config/api";

const useNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);

    const contentPath = path;
    const iframeSrc = `${API_CONFIG.baseUrl}${contentPath}`;

    const iframe = document.querySelector(".content-frame-container iframe");
    if (iframe) {
      iframe.src = iframeSrc;
    }
  };

  return { handleNavigation };
};

export default useNavigation;
