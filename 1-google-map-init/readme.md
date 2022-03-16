# Steps on getting google maps running locally

See more info here: https://developers.google.com/maps/get-started

## Google Cloud Platform(GCP) setup

1. Before you can use Goole Maps Platform, you need **Google Cloud Platform(GCP)** account and project.
1. Attach a billing account to it (**important**).
	1. Visit https://console.cloud.google.com/
	1. On the sidebar, select billing.
	1. Follow the "add billing account" flow.
	1. https://console.cloud.google.com/billing/0131D1-D0C58C-A34230 
	1. More info about the flow: https://www.youtube.com/watch?v=uINleRduCWM
1. Create a project.
	1. On the sidebar, click "Home".
	1. On the topbar, select "Select a project" dropdown.
	1. Click "New Project".
	1. Fill necessary form fields
	1. (if available)It ask for billing account, select the new billing account.
	1. More info about the flow: https://www.youtube.com/watch?v=uINleRduCWM
1. Setup your APIs or SDKs. See more: https://developers.google.com/maps/get-started#enable-api-sdk
	1. Go to your GCP console dashboard and make sure you have the correct project.
	1. Go to your sidebar, and select "Google Maps Platform"/
	1. App will redirect your this kind of URL. https://console.cloud.google.com/google/maps-apis/new
	1. GMP(Google Maps Platform) offers variety of of APIs.
	1. For this example, select "Maps JavaScript API".
	1. Click Enable button for "Maps JavaScript API".
1. Generate your API key and restrict usage.
	1. Go to your sidebar and select `APIs & Services > Credentials`.
	1. Click `Create Credentials` button and select `API key`.
	1. This will generate an API key for you to consume on your app/s.
	1. To add restriction to your API key, select the edit icon of the newly API key.
	1. There is two type of key restrictions(Application and API).
	1. Select `Application restrictions > IP Address` and enter your public IP to access.
	1. See more info: https://youtu.be/2_HZObVbe-g
	1. Also Restrict key to only use "Maps JavaScript API" under API restrictions.
	1. See more info: https://youtu.be/2_HZObVbe-g


### Resources:
* https://developers.google.com/maps/get-started#create-project
* https://youtu.be/uINleRduCWM
* https://youtu.be/n1UorU1PALk
* https://youtu.be/2_HZObVbe-g

## Code implementation

See more: https://developers.google.com/maps/documentation/javascript?hl=en_US

1. Copy and paste this initial code snippet in your html file(in this directory, index.html)
	```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Add Map</title>
			<link rel="stylesheet" type="text/css" href="./style.css" />
			<script src="./index.js"></script>
		</head>
		<body>
			<h3>My Google Maps Demo</h3>
			<!--The div element for the map -->
			<div id="map"></div>

			<!-- Async script executes immediately and must be after any DOM elements used in callback. -->
			<script
				src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
				async
			></script>
		</body>
	</html>
	```

1. Replace `YOUR_API_KEY` with the GCP API key.
1. Open `index.html` on your favourite browser.
1. Hello Australia! :tada: