const Title = ({ title: text }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;
