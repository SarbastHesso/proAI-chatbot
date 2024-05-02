import "./CustomBtn.css";

const CustomBtn = ({ txt, bgColor, onClick }) => {
  const btnStyle = { backgroundColor: bgColor };

  return (
    <button className="custom-btn" style={btnStyle} onClick={onClick}>
      {txt}
    </button>
  );
};

export default CustomBtn;
