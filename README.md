### Features

-   HEADER
-   BODY
    -   SIDE BAR
        -   MENU ITEMS
    -   MAIN CONTAINER
        -   BUTTON LIST
        -   VIDEO CONTAINER
            -   VIDEO CARD

### Namaste Youtube

-   Frontend Framework: I've used Create React App as the foundation for your application, providing a structured and efficient development environment.

-   Styling: TailwindCSS has been configured for styling, allowing for a responsive and visually appealing design.

-   Header: APP includes a header with icons, likely for user interaction.

-   State Management: I've integrated React Toolkit and React Redux for state management, ensuring efficient data flow and updates within your application.

-   Store and Slice: I've created a Redux store and slice to manage application's state, making it easier to access and update data throughout the app.

-   Provider Pattern: The Provider pattern has been used to provide the Redux store to entire app, ensuring that components can access the global state.

-   Sidebar: I've implemented a sidebar.

-   Toggle Sidebar: The sidebar's visibility is controlled through Redux, allowing for dynamic showing/hiding of this UI element.

-   YouTube Data: App fetches video data from YouTube APIs, likely to display video content on platform.

-   Routing: React Router DOM is used for client-side routing, enabling navigation between different views or pages within the application.

-   Search and Watch Page: I've created search functionality and individual video watch pages for a seamless user experience.
-   Video ID Param: You've used URL parameters to pass the video ID, allowing users to access specific videos directly.

-   Search Suggestions: App fetches and displays search suggestions as users type, enhancing the search experience.

-   Debouncing: I've implemented debouncing with a 200ms delay for more efficient and responsive search functionality.

-   Cache Management: Utilizing Redux, I've implemented a cache mechanism to optimize API calls and reduce redundant data fetching.

-   Nested Comments: I've implemented a nested comments feature.

-   Live Chat: App includes a live chat feature, possibly for real-time interaction among users.

-   API Polling: To update the live chat in real-time, you've used API polling, which regularly fetches new chat messages from the data.

-   Chat Optimization: Chat system includes an optimization feature that deletes old chat messages after a certain period, ensuring a streamlined and efficient chat experience.
