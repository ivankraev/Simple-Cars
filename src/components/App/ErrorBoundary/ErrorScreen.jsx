import React from "react";
import { Button } from "@mui/material";
import { useAuthActions } from "../../../hooks/useActions";
import "./ErrorBoundary.scss";

const ErrorScreen = () => {
  const { redirect } = useAuthActions();
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Button
                  variant="contained"
                  onClick={() => {
                    redirect("/");
                  }}
                >
                  Go to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorScreen;
