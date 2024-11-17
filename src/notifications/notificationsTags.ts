import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate(){
    OneSignal.User.addTags({
        
    });
}

export function tagCarUpdate(itemsCount: string){
    OneSignal.User.addTag("cart_item_count", itemsCount);
}