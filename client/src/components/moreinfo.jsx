import React, { Fragment } from 'react';



function MoreInfo(){
	return(

			<div className="navItem">
				<h3>Here are some resources for you</h3>
				<a href="https://oag.ca.gov/missing"> California Missing Persons</a>
				<a href="https://oag.ca.gov/missing"> National Center for Missing and Exploited Children</a>


				<Fragment>
				<article className="about">
					<h4> About this project</h4>
					<p>This project was conceived for the 2019 AngelHacks Silicon Valley Hackathon. Our goal was to employ the AWS
					Rekognition system to find lost persons, using photos provided by friends and family of the person and matching with
					the security footage of nearby cameras.</p>
					<p> Our team includes:</p>
					<ul><a href="https://howardlee93.github.io">Howard Lee</a></ul>
					<ul><a href="https://github.com/kenhlu">Ken Lu</a></ul>
					<ul><a href="https://github.com/shirleydongj">Shirley Dong </a></ul>


				</article>
				</Fragment>
				
			</div>
			)

}

export default MoreInfo;
