import { React, Text } from "react";

export default function () {
  return (
    <div className="content-wrapper" style={{ minHeight: window.innerHeight }}>
      <div className="container">
        <section className="content">
          <div
            className="box box-default"
            style={{ left: "-5%", top: "-17.5px", width: "110%" }}
          >
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{ width: "98%", marginLeft: "1%" }}>
                {/* /.col */}
                <div className="col-md-12 pull-left">
                  <div>
                    <div className="box box-warning ">
                      <div className="box-header" style={{ marginTop: "0%" }}>
                        <div style={{textAlign: 'center'}}>
                          <h1>404 Not Found</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /. box */}
                </div>
                {/* /.box */}
              </div>
              {/* /.col */}
              {/* /.row */}
            </section>
            {/* ariel */}
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
      </div>
    </div>
  );
}
