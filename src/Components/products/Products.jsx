import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
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
        <div className="col-md-3">
          <Skeleton height={350} count={3} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} count={3} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} count={3} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} count={3} />
        </div>
      </>
    );
  };
  ////////////////////////////////////////////////////////////////
  const filterProduct = (cat) => {
    const udateList = data.filter((p) => p.category === cat);
    setFilter(udateList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons m-4">
          <button
            className="btn btn-outline-warning me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-warning me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            electroncs
          </button>
          <button
            className="btn btn-outline-warning me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            women's clothing
          </button>
          <button
            className="btn btn-outline-warning me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            men's clothing
          </button>
          <button
            className="btn btn-outline-warning me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            jewelery
          </button>
        </div>
        {filter.map((Product) => {
          return (
            <>
              <br />
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4 key={Product.id}">
                  <img
                    src={Product.image}
                    className="card-img-top"
                    alt=""
                    height="250px"
                  />
                  <div className="card-body">
                    <div className="card-title">
                      <h5 className="card-title mb-0">
                        {Product.title.substring(0, 12)}
                      </h5>
                      <p className="card-text">${Product.price}</p>
                      <a href="#" className="btn btn-warning">
                        cart it
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
