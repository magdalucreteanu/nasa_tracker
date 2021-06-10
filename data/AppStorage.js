import {AsyncStorage} from 'react-native';

export const storeTheme = (data) => {
    try {
        AsyncStorage.setItem('isDarkThemeEnabled', JSON.stringify(data));
        return 'stored it!';
    } catch (e) {
        throw e;
    }
};

export const getTheme = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('isDarkThemeEnabled').then(value => {
            if (value !== null) {
                resolve(value);
            } else {
                reject(Error('Something went wrong!'));
            }
        });
    });
};