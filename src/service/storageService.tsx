import AsyncStorage from "@react-native-async-storage/async-storage";

const storageService = {
    save: async (key: string, value: any) => {

        await AsyncStorage.setItem(key, JSON.stringify(value))
    },
    get: async (key: string) => {
        try {
            const value: any = await AsyncStorage.getItem(key)
            return JSON.parse(value)

        } catch (error) {
            return null

        }

    },
    
}
export default storageService