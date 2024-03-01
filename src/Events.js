import React from "react";
import "./Events";
import "./events.css";

function Events() {

    return (
        <div class="responsive">
         <div className="Blocks test">
            <div className="headers">
                
            </div>
                <div className="Block test">
                    <div class="dropdown test">
                        <button class="btn btn-secondary dropdown-toggle responsive test" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6> Who is this Webinar for?</h6>
                        </button>
                        <ul class="dropdown-menu test" >
                            <p>This webinar is specially designed for mid-career professionals from any industry or domain
                                who are looking from any industry or domain who are looking for their dream job and ready to
                                learn a step-by step job strategy.</p>
                        </ul>
                    </div>
                    <br></br>
                    <div class="dropdown test">
                        <button class="btn btn-secondary dropdown-toggle responsive test" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6> How long will the session be conducted?</h6>
                        </button>
                        <ul class="dropdown-menu test">
                            <p>This is  a live session  conducted on zoom platform for 90 minutes.
                                It's better to attend the entire session from
                                start to end to get maximum benifits from the session.
                            </p>

                        </ul>
                    </div>
                    <br></br>
                    <div class="dropdown test">
                        <button class="btn btn-secondary dropdown-toggle responsive test" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>How will I get the joining link?</h6>
                        </button>
                        <ul class="dropdown-menu test">
                            <p>After completing your registration,you will be asked to join a WhatsApp group.
                                the joining link will be shared in WhatsApp group and on your emails.
                            </p>

                        </ul>
                    </div>
                    <br></br>
                    <div class="dropdown  test">
                        <button class="btn btn-secondary dropdown-toggle responsive test" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>How should I prepare myself before the webinar?</h6>
                        </button>
                        <ul class="dropdown-menu  test">
                            <p>  If you are really serious about earning a dream job, bookmark in your notepad and attend the webinar
                                from start to end without any distractions.Make sure you re sitting in a quite place with a pen and paper handy.
                            </p>
                        </ul>
                    </div>
                    <br></br>
                    <div class="dropdown  test">
                        <button class="btn btn-secondary dropdown-toggle responsive test" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6> Will I get the recording of the session?</h6>
                        </button>
                        <ul class="dropdown-menu  test">
                            <p>
                                As it's a live webinar, no recordings will be shared with any one.
                            </p>
                        </ul>
                    </div>
                    <br></br>
                    <div class="dropdown  test">
                        <button class="btn btn-secondary dropdown-toggle responsive test" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6> Will I get the Job after the session?</h6>
                        </button>
                        <ul class="dropdown-menu  test">
                            <p>
                                This session covers a step-by-step strategy for job search.Many mid career professionals follwed this strategy to get their dream job.
                                This webinar will give you the guidance and thenext steps.
                            </p>
                        </ul>
                    </div>
                    <br></br>
                    <div class="dropdown  test">
                        <button class="btn btn-secondary dropdown-toggle responsive test" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6> Will you be offering any paid programs in the webinar?</h6>
                        </button>
                        <ul class="dropdown-menu  test">
                            <p>
                                Yes,Trainers will talk about his paid coaching at the end of the webinar.In this strategy and wish to
                                continue on the learning journey,you can grab the special offer that will be given only in
                                the webinar.
                            </p>
                        </ul>
                    </div>
                    <div className="Last">
                        {/* <div class="btn btn-Light">
                    <p>GOT YOUR DREAM JOB AS WEB DEVELOPER</p>
                  </div> */}
                    </div>
                </div>
            </div>
 </div>
 )

}
export default Events;