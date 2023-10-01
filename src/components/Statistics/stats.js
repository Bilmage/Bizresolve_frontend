import React from "react";
import { NavigationMoreVert } from "./NavigationMoreVert";
import { Tab } from "./Tab";
import { Tooltip } from "./Tooltip";
import "./style.css";

export const Statistics = ({ className }) => {
    return (
        <div className={`statistics ${className}`}>
            <div className="head">
                <div className="user-stat">Traffic History</div>
                <Tab
                    className="tab-instance"
                    divClassName="tab-2"
                    divClassName1="tab-4"
                    divClassNameOverride="tab-4"
                    selected="one-tab"
                    showTab10={false}
                    showTab4={false}
                    showTab5={false}
                    showTab6={false}
                    showTab7={false}
                    showTab8={false}
                    showTab9={false}
                    tab1="Users"
                    tab2="Comments"
                    tab3="Ratings"
                    tabClassName="design-component-instance-node"
                    tabClassName1="tab-3"
                    tabClassNameOverride="tab-3"
                />
                <NavigationMoreVert className="navigation-more-vert-instance" icon="image.svg" iconClassName="icon-2" />
            </div>
            <div className="content-wrapper">
                <div className="content-2">
                    <div className="charts">
                        <div className="content-3">
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">9</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">11</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">13</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">15</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">17</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">19</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                                <Tooltip
                                    arrow="top"
                                    arrowClassName="tooltip-4"
                                    className="tooltip-instance"
                                    contentClassName="tooltip-2"
                                    divClassName="tooltip-3"
                                    img="arrow-2.svg"
                                    text="1345 Users"
                                    type="default"
                                />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">21</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">23</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">25</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">27</div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date" />
                            </div>
                            <div className="chart">
                                <div className="chart-2" />
                                <div className="date-wrapper">
                                    <div className="text-wrapper-3">29</div>
                                </div>
                            </div>
                        </div>
                        <div className="line" />
                    </div>
                    <div className="date-2">
                        <div className="text-wrapper-3">600</div>
                        <div className="text-wrapper-4">500</div>
                        <div className="text-wrapper-4">400</div>
                        <div className="text-wrapper-4">300</div>
                        <div className="text-wrapper-4">200</div>
                        <div className="text-wrapper-4">100</div>
                        <div className="text-wrapper-4">0</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Statistics;