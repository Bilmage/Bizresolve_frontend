import React from 'react'

export default function Datatable() {
  return (
    <div>
  <table id="example" className="display nowrap" style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start Date</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tiger Nixon</td>
        <td>System Architect</td>
        <td>
          <span>Edinburgh</span>
        </td>
        <td>
          <span className="old">61</span>
        </td>
        <td>2011-04-25</td>
        <td>
          <span>$320,800.00</span>
        </td>
      </tr>
      <tr>
        <td>Garrett Winters</td>
        <td>Accountant</td>
        <td>
          <span>Tokyo</span>
        </td>
        <td>
          <span className="old">63</span>
        </td>
        <td>2011-07-25</td>
        <td>
          <span>$170,750.00</span>
        </td>
      </tr>
      <tr>
        <td>Ashton Cox</td>
        <td>Junior Technical Author</td>
        <td>
          <span>San Francisco</span>
        </td>
        <td>
          <span className="old">66</span>
        </td>
        <td>2009-01-12</td>
        <td>
          <span>$86,000.00</span>
        </td>
      </tr>
      <tr>
        <td>Cedric Kelly</td>
        <td>Senior Javascript Developer</td>
        <td>
          <span>Edinburgh</span>
        </td>
        <td>
          <span className="young">22</span>
        </td>
        <td>2012-03-29</td>
        <td>
          <span>$433,060.00</span>
        </td>
      </tr>
      <tr>
        <td>Airi Satou</td>
        <td>Accountant</td>
        <td>
          <span>Tokyo</span>
        </td>
        <td>
          <span className="young">33</span>
        </td>
        <td>2008-11-28</td>
        <td>
          <span>$162,700.00</span>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start Date</th>
        <th>Salary</th>
      </tr>
    </tfoot>
  </table>
</div>

  )
}
