#Input
Users provide data through interactive text forms across specialized screen tabs. The application accepts alphanumeric string inputs for city name and country name, or country name paired with currency details.  

#Process
Upon submission, the app executes a validation check to block empty text fields. If valid, the program generates a unique identifier using the react-native-uuid library and constructs a structured data object. This object is passed up to a central state modifier function via React Navigation parameters, which securely appends the new record into a reactive array state.  

#Output
The system reads the global state arrays and reflects updates using a scrollable layout. It maps over the active array to display every saved entry dynamically on the screen. If the dataset is empty, a conditional rendering fallback triggers the CenterMessage component to display a clean notification notice.