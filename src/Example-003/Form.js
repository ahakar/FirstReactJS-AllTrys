import React from 'react';

export default class Form extends React.Component {
	render() {
		return (
			<div className="container pt-5 pb-5">
				<div className="row justify-content-center">
					<div className="col-sm-12 col-md-8 col-lg-8">
						<div className="row">
							<div className="col-sm-12 col-md-6 col-lg-6">
								<div className="card bg-secondary  text-white">
									<div className="card-body">
										<h5 className="card-title pb-3">Leave us a message...</h5>
										<form>
											<div className="form-group row">
												<label className="col-sm-4 col-form-label">Name</label>
												<div className="col-sm-8">
													<input type="text" className="form-control form-control-sm" id="name"/>
												</div>
											</div>
											<div className="form-group row">
												<label className="col-sm-4 col-form-label">Phone</label>
												<div className="col-sm-8">
													<input type="text" className="form-control form-control-sm" id="phone"/>
												</div>
											</div>
											<div className="form-group row">
												<label className="col-sm-4 col-form-label">Email</label>
												<div className="col-sm-8">
													<input type="email" className="form-control form-control-sm" id="email"/>
												</div>
											</div>
											<div className="form-group row">
												<label className="col-sm-4 col-form-label">Newsletter</label>
												<div className="col-sm-8">
													<div className="form-check">
														<input type="checkbox" className="form-check-input"  id="gridCheck1"/>
														<label className="form-check-label" htmlFor="gridCheck1">Subscribe me to Loewy's Latest</label>
													</div>
												</div>
											</div>
											<div className="form-group row">
												<label className="col-sm-4 col-form-label">Comments</label>
												<div className="col-sm-8">
													<textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3"></textarea>
												</div>
											</div>
											<div className="form-group row text-right">
												<div className="col-12">
													<button type="submit" className="mr-2 btn btn-outline-dark btn-sm">Cancel</button>
													<button type="submit" className="btn btn-outline-dark btn-sm">Send ></button>
												</div>
											</div>
											<div className="row pt-5">
												<div className="col-6">
													<ul className="list-unstyled">
														<li>555 Broadhollow Road</li>
														<li>Suite 270</li>
														<li>Meliville, NY 11747</li>
													</ul>
												</div>
												<div className="col-6">
													<ul className="list-unstyled">
														<li>Tel: 631.249.2429</li>
														<li>Fax: 631.249.2436</li>
													</ul>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-6 col-lg-6">
								<h5 className="card-title">...or leave us doodle.</h5>
								<form>
									<div className="form-group row purple-border">
					                	<div className="col-sm-12">
					                    	<textarea className="form-control" id="exampleFormControlTextarea4" rows="10"></textarea>
					                	</div>
					                </div>
									<div className="form-group row text-right">
										<div className="col-12">
											<button type="submit" className="btn btn-outline-dark btn-sm">Send ></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}