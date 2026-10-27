function ProfilePicture() {

  const handleClick = () => {
    console.log("Profile picture clicked!");
  }
  return (
    <div className="Bg-Profile">
      <img className="Profile" onClick={handleClick} src="./src/assets/img1.jpg" alt="ProFile" />
      <div className="student-info">
        <h1>Name: រុក..Brothoung</h1>
        <p>
          Lorem, ipsum ស្រួលណាស់
        </p>
      </div>
    </div>
  );
}

export default ProfilePicture;
