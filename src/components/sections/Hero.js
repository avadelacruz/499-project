import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";

const propTypes = {
	...SectionProps.types
};

const defaultProps = {
	...SectionProps.defaults
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const [videoModalActive, setVideomodalactive] = useState(false);

	const openModal = e => {
		e.preventDefault();
		setVideomodalactive(true);
	};

	const closeModal = e => {
		e.preventDefault();
		setVideomodalactive(false);
	};

	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1
							className="mt-0 mb-16 reveal-from-bottom"
							data-reveal-delay="200"
						>
							Everything you’ve ever wanted to know about college, in one place.
							<div className="text-color-primary">
								By students, for students.
							</div>
						</h1>
						<div className="container-xs">
							<p
								className="m-0 mb-32 reveal-from-bottom"
								data-reveal-delay="400"
							>
								College Central is your one-stop-shop to hear from current
								students and learn about important topics related to college.
							</p>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ButtonGroup>
									<Link to="/why-college">
										<Button tag="a" color="primary" wideMobile>
											Get started
										</Button>
									</Link>
									{/* <Button
										tag="a"
										color="dark"
										wideMobile
										href="https://github.com/cruip/open-react-template/"
									>
										View on Github
									</Button> */}
								</ButtonGroup>
							</div>
						</div>
					</div>
					<div
						className="hero-figure reveal-from-bottom illustration-element-01"
						data-reveal-value="20px"
						data-reveal-delay="800"
					>
						{/* <a
							data-video="https://player.vimeo.com/video/174002812"
							href="#0"
							aria-controls="video-modal"
							onClick={openModal}
						> */}
						<Image
							className="has-shadow"
							src={require("./../../assets/images/student-smiling.png")}
							alt="Hero"
							width={896}
							height={504}
						/>
						{/* </a> */}
					</div>
					{/* <Modal
						id="video-modal"
						show={videoModalActive}
						handleClose={closeModal}
						video="https://player.vimeo.com/video/174002812"
						videoTag="iframe"
					/> */}
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
