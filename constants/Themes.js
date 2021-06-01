export const getThemeBg = (isLight) => {
    return {
        backgroundColor: isLight ? "white" : "black",
    }
};

export const getBaseTextTheme = (isLight) => {
    return {
        color: isLight ? "black" : "white",
        fontSize: 20,
    }
};

export const getTitleTextTheme = (isLight) => {
    return {
        color: isLight ? "black" : "white",
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
    }
};

export const getGridTileTheme = (isLight) => {
    return {
        backgroundColor: isLight ? "#bbd0ff" : "#101010",
        flex: 1,
        margin: 15,
        padding: 15,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 8
    }
};

export const getGridTileTextTheme = (isLight) => {
    return {
        color: isLight ? "black" : "white",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right'
    }
};

export const getBottomTabTheme = (isLight) => {
    return {
        backgroundColor: isLight ? "#e5e5e5" : "#101010",
    }
};

export const getHeaderTheme = (isLight) => {
    return {
        backgroundColor: isLight ? "#e5e5e5" : "#101010",
        height: 100,

    }
};

export const getHeaderTextTheme = (isLight) => {
    return {
        fontSize: 32,
        fontWeight: 'bold',
        color:  "#5e60ce",
    }
};