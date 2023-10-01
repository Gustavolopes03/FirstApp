import { StyleSheet , Dimensions } from "react-native"



const ICON_FONT = "sans-serif";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({

    // CONTAINER - HOME
	containerHome: { 
    marginHorizontal: 10 ,
    backgroundColor: "#FFF",
    borderTopWidth: 0,
    paddingVertical: 30,
    height: 60,
    marginBottom: 0,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 }
    },

    //Menu
    iconMenu: {
        top: "6%" ,
        left: "3%" ,
        fontFamily: ICON_FONT,
        fontSize: 20,
        width: 100,
        height: 100,
        paddingBottom: 7
    }

})