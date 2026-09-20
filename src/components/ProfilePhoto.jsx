import { useState } from "react";
import profileImage from "../assets/profile.jpeg";

function ProfilePhoto() {
  const [imageAvailable, setImageAvailable] = useState(true);

  if (!imageAvailable) {
    return <div className="profile-placeholder" aria-label="Profile photo placeholder">LP</div>;
  }

  return <img className="profile-photo" src={profileImage} alt="Lochana Patil" onError={() => setImageAvailable(false)} />;
}

export default ProfilePhoto;