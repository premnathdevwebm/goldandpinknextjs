"use server";
import axios from "axios";

const WIT_API_ACCESS_TOKEN: string | undefined = process.env.NEXT_WIT_API_ACCESS_TOKEN;

export const handleSendMessage = async (userInput: string): Promise<string> => {
  console.log(WIT_API_ACCESS_TOKEN);
  
  if(WIT_API_ACCESS_TOKEN){
  try {
    const response = await axios.get('https://api.wit.ai/message', {
      params: {
        v: '20230728',
        q: `${userInput}`
      },
      headers: {
        'Authorization': `Bearer ${WIT_API_ACCESS_TOKEN}`
      }
    })
    
    return response.data.traits.hellowel[0].value;

  } catch (error) {
    console.log("RESPONSE1")
    console.error("Error communicating with Wit.ai:", error);
    return "Sorry, I'm having trouble understanding right now.";
  }
}else{
  console.log("RESPONSE2")
  return "Sorry, I'm having trouble understanding right now.";
}
};


