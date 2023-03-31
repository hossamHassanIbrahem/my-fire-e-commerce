import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  ////////////////////////////////////////////////////////////////
  const Loading = () => {
    return (
      <>
        <h2 className="text-warning">Loading .......</h2>
      </>
    );
  };
  ////////////////////////////////////////////////////////////////
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons">
          <button className="btn btn-outline-warning me-2">All</button>
          <button className="btn btn-outline-warning me-2">electroncs</button>
          <button className="btn btn-outline-warning me-2">labtob</button>
          <button className="btn btn-outline-warning me-2">mobile</button>
          <button className="btn btn-outline-warning me-2">computers</button>
        </div>
        {filter.map((Product) => {
          return (
            <>
              <br />
              <div className="col-md-3">
                <div className="card">
                  <img src={Product.image} className="card-img-top" alt="" />
                  <div className="card-body">
                    <div className="card-title">
                      <p className="card-text">${Product.price}</p>
                      <a href="#" className="btn btn-warning">
                        product data
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <container className="container my-5 py-5">
        <row className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">latest proucts</h1>
            <hr />
          </div>
        </row>
        <div className="row justfy-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </container>
    </div>
  );
};

export default Products;
