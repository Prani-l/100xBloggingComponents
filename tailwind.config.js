/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Twitter_blue_bydef: "#1D9BF0",//The primary accent color of Twitter.
        Twitter_blue_hover: "#1871CA",//The primary accent color of Twitter (hover state).
        Twitter_blue_disabled:"#1E5D87",//The primary accent color of Twitter (disabled state).
        Bluewash:"rgba(117, 190, 239, 0.20",//Used as a layer on top of the main screen in case a modal is to be displayed, thereby giving the modal a higher priority.
        ButtonStroke:"#546A7A",//Used as a replacement color where white is not used, to break the monotony or represent lower hierarchy. 
        SearchbarFill:"#212327",//Used as a fill for the searchbar in the app.
        CardFill:"#16181C",//Used as a fill for cards/ containers to present content.
        Success:"#00BE74",//Symbolizes validation and accomplishment, signaling that tasks or actions have been completed successfully.
        Error:"#8B141A",//Signifies an alert and demands attention, often conveying issues or discrepancies that require immediate user acknowledgment.
        Neutral50:"#F9F9F9",//
        Neutral100:"F4F4F4",
        Neutral200:"#E4E4E4",
        Neutral300:"#D3D3D3",
        Neutral400:"#A2A2A2",
        Neutral500:"#737373",
        Neutral600:"#525252",
        Neutral700:"#404040",
        Neutral800:"#262626",
        Neutral900:"#171717",
        Neutral950:"#0A0A0A",
        Neutral1000:"#000",
      },
     
},
  plugins: [],
}
}
