import React from 'react'
import DetailsNavbar from './DetailsNavbar'
import './Details.css'
import './Scroll.js'

export default function Details() {
  return (
    <>
      <div>
        <DetailsNavbar />
      </div>
      <div className='container'>
        <section className="section1" id='Admission'>
          <div>
            <p>
              <strong>Procedure for B.E I Year Admission</strong>
              <br />
              <br />
              The candidate after getting allotment of seat through CET/COMED-K/Management
              he/she has to approach the Admission Section complete the admission
              formalities with the following;
              <br />
              <br />
              Allotment letter
              <br />
              Original SSLC/SSC/10th/PUC/12th Marks Card and Transfer Certificate
              <br />
              Original Study and Conduct Certificate
              <br />
              Original Caste Certificate / Income Certificate, if applicable
              <br />
              Original Migration Certificate, if applicable
              <br />
              Three sets of photocopies of all the above along with 8 passport size photos
              <br />
              College Fees, as applicable.
              <br />
              <br />
              The candidate will be allotted a section, either in Chemistry Group or Physics
              Group and the same is notified on the Notice Board at the beginning of the
              semester. The sections allotted to the students have to be followed and no
              change of sections is allowed under any circumstances.
              <br />
              <br />
              <strong>Admission to Higher Semester:</strong>
              <br />
              <br />
              After the announcement of the reopening date of the college, the candidates
              have to register for the admission with an Application enclosing all the
              photocopies of previous semesters marks cards through their department HOD and
              they have to pay the applicable Tuition Fees / Registration Fees within a week
              of re-opening the institute for classwork. The Students who fail to register
              within the first week of re-opening will be charged a penalty. The names of
              the students will be deleted, in case they fail to register as per the
              schedule. Any financial matters are required to be referred to the Principal
              only.
              <br />
              <br />
              Once the student is admitted he/she will be under the guidance of the
              department and all the academic matters should be addressed through the Head
              of the department only. Students are expected to maintain discipline in the
              college campus and not to indulge in "Ragging Activities".
              <br />
              <br />
              <strong>For BE Courses:</strong>
              <br />
              Students who have passed Karnataka 2nd PUC/12th Std./10+2/Intermediate or
              equivalent exam with Physics &amp; Mathematics along with Chemistry/Computer
              Science/Biology and any other optional subject with English as one of the
              languages of study and should have obtained a minimum of 45% marks.
              <br />
              For SC/ST &amp; other backward classes of Karnataka students only, the minimum
              marks are 40% in aggregate in the optional subjects in the qualifying
              examination, irrespective of marks obtained in the Common Entrance
              Test/Comed-K/AIEEE.
            </p>
          </div>
        </section >
        <br />
        <div>
          <section classname="section2" id='cet'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <br />


        <div>
          <section classname="section3" id='management'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <br />

        <div>
          <section classname="section4" id='saf'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  )
}
