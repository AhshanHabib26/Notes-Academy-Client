import logoImg from "../../assets/images/logo.png";
const FooterInfo = () => {
  return (
    <div>
      <div>
        <div className="flex items-center mb-2">
          <img src={logoImg} alt="Logo image" />
          <h1 className="text-2xl hind-siliguri-regular ml-2">Notes Academy</h1>
        </div>
        <p className="text-lg hind-siliguri-light">
          Your ultimate resource for concise, clear, and comprehensive study
          notes across various subjects, helping students achieve academic
          success effortlessly.
        </p>
      </div>
    </div>
  );
};

export default FooterInfo;
