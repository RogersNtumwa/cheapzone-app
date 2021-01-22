import React, { useEffect, useState, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pagination from "react-js-pagination";

import { responsive } from "../utils/Carousel";
import Product from "../components/Product";
import { listProducts } from "../actions/product";
import Carauselimage from "../components/Carauselimage";
import {
  SkeletionProductcard,
  CarouselSkeletion,
} from "../skeleton/SkeletionProductcard";
// import Message from "../components/Message";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const { loading, products } = productList;
  const SkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [currentPage, setCurrentPage] = useState(1);

  function setCurrentPageNumber(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(listProducts(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

  // : error ? (
  //         <Message variant="danger">{error}</Message>
  //       )
  return (
    <Fragment>
      <div className="jumbotrone">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          centerMode={true}
        >
          {loading
            ? SkeletonArray.map((num) => <CarouselSkeletion key={num} />)
            : products.data.products.map((product) => (
                <div>
                  <Carauselimage item={product} />
                </div>
              ))}
        </Carousel>
      </div>
      <h1>Latest Products</h1>
      {loading ? (
        <Row>
          {SkeletonArray.map((num) => (
            <Col sm={12} md={6} lg={4} xl={3} key={num}>
              <SkeletionProductcard />
            </Col>
          ))}
        </Row>
      ) : (
        //we shall implemented error messsage here
        <Fragment>
          <div className="products">
            {products.data.products.map((product) => (
              <Product product={product} />
            ))}
          </div>
          {products.count > products.resPerpage && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={products.resPerpage}
                totalItemsCount={products.count}
                onChange={setCurrentPageNumber}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"first"}
                lastPageText={"Last"}
                itemClass="page-itme"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeScreen;
