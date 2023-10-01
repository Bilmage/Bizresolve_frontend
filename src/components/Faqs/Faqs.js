import React from "react";
import {Link} from "react-router-dom";
import "./faqs.css";

export default function Frequents() {
  return (
    <div className="container">
      <div className="faq-content">
        <div className="faq-question">
          <input id="q1" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q1" className="panel-title">
            What documents do I need to have to get Accredited ?
          </label>
          <div className="panel-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.</div>
        </div>
        <div className="faq-question">
          <input id="q2" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q2" className="panel-title">
            How many businesses can I have Registered with Biz-resolve ?
          </label>
          <div className="panel-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.
          </div>
        </div>
        <div className="faq-question">
          <input id="q3" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q3" className="panel-title">
            What happens after I rate a particular business ?
          </label>
          <div className="panel-content">
            Certain questions are better left &nbsp;{" "}
            <Link to=""
              href="https://en.wikipedia.org/wiki/The_Unanswered_Question"
              target="_blank"
            >
              unanswered
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
