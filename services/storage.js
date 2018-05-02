import { AsyncStorage } from "react-native";

async function read(key, bJsonParse)
{
    try
    {
        let val = await AsyncStorage.getItem(key);
        if((val !== null) && bJsonParse)
        {
            return JSON.parse(val);
        };
        return readValue;
    }
    catch (error)
    {
        console.warn("AsyncStorage error: ", error.message);
    }
}

async function write(key, item, bJsonStringify)
{
    try
    {
        await AsyncStorage.setItem(key, bJsonStringify ? JSON.stringify(item) : item);
    }
    catch (error)
    {
        console.error("AsyncStorage error: ", error.message);
    }
}
