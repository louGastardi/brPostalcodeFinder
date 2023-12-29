<h1>CEP Finder App</h1>
This React application allows users to find address details by entering a Brazilian ZIP code (CEP). </br>
It utilizes the ViaCEP API to fetch and display address information, and it keeps track of previously searched ZIP codes.

<h2>Features</h2>
<b>CEP Search:</b> Enter a Brazilian ZIP code (CEP) in the input field to retrieve and display address details. </br>
<b>Error Handling: </b>If the entered CEP is not found or invalid, an error message will be displayed.</br>
<b>Previous Searches:</b> The application keeps track of previously searched CEPs, and they are displayed in a list.

<h2>Components</h2>

<b>App:</b> The main component that manages state and contains the UI elements.

<h2>State Management</h2>
<ul>
<li><b>endereco:</b> Holds the address information for the currently searched CEP.</li>
<li><b>cepUser:</b> Stores the current input value for the ZIP code.</li>
<li><b>erro:</b> Displays error messages for invalid or not found CEPs.</li>
<li><b>allResults:</b> Keeps track of all previously searched CEPs.</li>
</ul>

<h2>Dependencies</h2>
<b>react:</b> The core library for building the user interface in React. </br>
<b>axios:</b> A promise-based HTTP client for making requests to the ViaCEP API.

<h2>Development</h2>
This project uses the <b>React framework</b> for building user interfaces.</br>
The application fetches data from the <b>ViaCEP API </b>to retrieve address details.</br>
State management is achieved using the <b>useState hook</b> for managing component-level state.</br>
The <b>useEffect hook</b> is used to trigger side effects, such as updating the list of previous searches when the current address is updated.</br>
Feel free to explore the codebase and customize it according to your needs!
