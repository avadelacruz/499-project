import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import WhyCollege from "./views/WhyCollege";
import Guides from "./views/Guides";
import GuideDetails from "./views/GuideDetails";
import FAQs from "./views/FAQs";
import Progress from "./views/Progress";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add("is-loaded");
		childRef.current.init();
		trackPage(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
					<AppRoute
						exact
						path="/why-college"
						component={WhyCollege}
						layout={LayoutDefault}
					/>
					<AppRoute
						exact
						path="/guides"
						component={Guides}
						layout={LayoutDefault}
					/>
					<AppRoute
						exact
						path="/guides/:topic"
						component={GuideDetails}
						layout={LayoutDefault}
					/>
					<AppRoute
						exact
						path="/faqs"
						component={FAQs}
						layout={LayoutDefault}
					/>
					<AppRoute
						exact
						path="/progress"
						component={Progress}
						layout={LayoutDefault}
					/>
				</Switch>
			)}
		/>
	);
};

export default App;
