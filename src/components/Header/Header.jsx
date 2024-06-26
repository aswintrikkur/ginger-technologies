import React, { useState } from "react";
import "./Header.scss";
import Switch from "react-switch";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={`header-container ${isMenuOpen && "fixed"} `}>
			<img className="cloud1" src="/images/cloud1.png" alt="cloud1" />
			<div className="logo">
				<img src="/images/logo.png" alt="logo" />
			</div>
			<div className="menu-bar">
				<img src="/icons/icon-menu.png" alt="menu" onClick={handleMenu} />
			</div>
			<div className={` navbar  ${isMenuOpen && "active"}`} onClick={handleMenu}>
				<a href="#home">Home</a>
				<a href="#about-us">About Us</a>
				<a href="#programs">Programs</a>
				<a href="#">Gallery</a>
				<a href="#">Careers</a>
				<a href="#contact-us">Contact Us</a>
				<div className="lan">
					<p>English</p>
					<Switch className="toggle-button" checked checkedIcon onColor="#A4CAD3" onHandleColor="#2F535D" />
				</div>
			</div>
		</div>
	);
};
