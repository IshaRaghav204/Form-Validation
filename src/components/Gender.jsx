const Gender = () => {
  return (
    <>
    <div className="gender-heading" >
        <p>Select Your Gender</p>
    </div>
      <div className="select-gender" style={{ display: "flex" , gap:"40px" , marginBottom:"10px"}}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Male
          </label>
        </div>
      </div>
    </>
  );
};

export default Gender;
