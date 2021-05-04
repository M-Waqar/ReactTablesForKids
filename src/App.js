import React, {useState} from 'react';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [val, setVal] = useState("");

  const generateTable = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <div className="container mt-5">
      <div className="col-6 mx-auto border">
        <form onSubmit={generateTable}>
          <div className="form-group">
            <h4 className="text-primary text-center m-3">
              Enter value to Generate Table
            </h4>
            <input type="text" className="form-control"
              value={val} onChange={(e) => {setVal(e.target.value)}} />
          </div>
          <button className="btn btn-primary btn-block">Table</button>
        </form>
      <div className="mt-5">
        {
          val && val > 0 &&
          arr.map((array) => {
            return (
              <div key={array}>
                <div className="row text-center mb-2 font-weight-bold">
                  <div className="col-sm p-4 bg-secondary">
                    {val}
                  </div>
                  <div className="col-sm p-4 bg-primary">
                    X
                  </div>
                  <div className="col-sm p-4 bg-info">
                    {array}
                  </div>
                  <div className="col-sm p-4 bg-warning">
                    =
                  </div>
                  <div className="col-sm p-4 bg-success">
                    {val * array}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  );
}

export default App;
